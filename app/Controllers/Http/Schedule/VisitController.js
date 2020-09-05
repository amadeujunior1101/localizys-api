'use strict'

const Visit = use("App/Models/Visit");
const VisitAlert = use("App/Models/VisitAlert");

class VisitController {

    // async index({ request }) {
    //     const { id } = request.get()
    //     const client = await Client.query()
    //         .where("id", id)
    //         .fetch()
    //     return client
    // }

    async store({ request, response }) {
        const { client_id, user_id, visit_date } = request.all()

        const visit = await Visit.create({
            client_id,
            user_id,
            visit_date: visit_date,
            done: "0"
        });

        const visitAlert = await VisitAlert.query()
            .where("client_id", client_id)
            .update({
                client_id: client_id,
                pending: "yes"
            })
        if (visitAlert === 0) {
            const visitAlert = await VisitAlert.create({
                client_id: client_id,
                pending: "yes"
            });
        }

        const status = response.response.statusCode === 200 ?
            {
                error: "false", status: response.response.statusCode,
                data: visit, visitAlert: visitAlert
            }
            :
            { error: "true", status: response.response.statusCode }
        return status
    }

    async show({ request }) {
        const { user_id, done } = request.all();
        const visit = await Visit.query()
            .where("user_id", user_id)
            .andWhere("done", 0)
            .with("client")
            .with("user")
            .fetch()

        return visit
    }

    async showAllVisitByClient({ request }) {
        const { client_id } = request.all();
        const visit = await Visit.query()
            .where("client_id", client_id)
            .fetch()

        return visit
    }

    async update({ request }) {
        const { id, client_id } = request.all();
        const visit = await Visit.query()
            .where("id", id)
            .update({
                done: "1"
            })

        const visitAlert = await VisitAlert.query()
            .where("client_id", client_id)
            .update({
                pending: "no"
            })

        return { error: false, visit: visit, visitAlert: visitAlert }
    }

}

module.exports = VisitController
