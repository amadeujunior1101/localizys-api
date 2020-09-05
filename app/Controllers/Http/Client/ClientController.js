'use strict'

const Client = use("App/Models/Client");

class ClientController {

    async index({ request }) {
        const { id } = request.get()
        const client = await Client.query()
            .where("id", id)
            .fetch()
        return client
    }

    async store({ request, response }) {
        const { full_name, company_name, latitude, longitude, UF, city, user_id } = request.all()

        const client = await Client.create({
            full_name: full_name,
            company_name: company_name,
            latitude: latitude === "" ? "0" : latitude,
            longitude: longitude === "" ? "0" : longitude,
            UF: UF === "" ? "" : UF,
            city: city === "" ? "" : city,
            user_id: user_id
        });
        const status = response.response.statusCode === 200 ?
            { error: "false", status: response.response.statusCode, data: client }
            :
            { error: "true", status: response.response.statusCode }
        return status
    }

    async show({ request }) {
        const count = []
        const { user_id } = request.get();
        const client = await Client.query()
            .where("user_id", user_id)
            .with("visit")
            .with("visit_alert")
            .fetch()

        // client.visit.foreach(item => (
        //     item.done === 0 ?
        //         count.push(0)
        //         :
        //         count.push(1)
        // ))
        // let d = client.teste = 2;
        // let status = { client: client, count: 1 }
        return client
    }

}

module.exports = ClientController
