'use strict'

const User = use("App/Models/User");
const Hash = use('Hash')

class UserController {

    async store({ request, response, auth }) {
        const { full_name, email, password, phone } = request.all()

        const user = await User.create({
            full_name: full_name,
            email: email,
            password: password,
            phone: phone,
        });

        const token = await auth.authenticator('jwt').attempt(email, password)

        const status = response.response.statusCode === 200 ?
            { error: "false", status: response.response.statusCode, token: token }
            :
            { error: "true", status: response.response.statusCode }
        return status
    }

    async login({ request, auth, response }) {
        const { email, password } = request.all();

        try {

            const user = await User
                .findByOrFail("email", email)

            const authenticate = await auth.attempt(email, password)

            const status = {
                error: "false",
                status: response.response.statusCode,
                user_id: user.id,
                full_name: user.full_name,
                email: user.email,
                phone: user.phone,
                data: authenticate
            }
            // if (user.length === 0) {
            //     return error = response.send({ message: "User no registred" })
            // } else {
            //     return status
            // }
            return status

        } catch (error) {

            return { error: true, status: 403, message: 'incorrect e-mail or password' }

        }

        // if (response.response.statusCode === 200) {
        //     const user = await User
        //         .findByOrFail("email", email)

        //     const status = {
        //         error: "false",
        //         status: response.response.statusCode,
        //         user_id: user.id,
        //         full_name: user.full_name,
        //         data: authenticate
        //     }
        //     return status
        // } else {

        //     const status = {
        //         error: "true",
        //         status: 401
        //     }
        //     return status
        // }

        // .query()
        // .where("email", email)
        // .fetch()
        // .andWhere("password", password)

        // if (user.length !== 0) {

        //     const authenticate = await auth.attempt(email, password)
        //     const status = response.response.statusCode === 200 ?
        //         {
        //             error: "false",
        //             status: response.response.statusCode,
        //             user_id: user.id,
        //             full_name: user.full_name,
        //             data: authenticate
        //         }
        //         :
        //         {
        //             error: "true",
        //             status: response.response.statusCode
        //         }
        //     return status
        // } else {
        //     const status =
        //     {
        //         error: "true",

        //     }
        //     return status
        // }

        // const authenticate = await auth.attempt(email, password)

        // const status = response.response.statusCode === 200 ?
        //     {
        //         error: "false", 
        //         status: response.response.statusCode,
        //         user_id: user.id,
        //         full_name: user.full_name,
        //         data: authenticate
        //     }
        //     :
        //     {
        //         error: "true",
        //         status: response.response.statusCode 
        //     }

        // return response.response.statusCode
    }

    // async show({ request }) {
    //     const { user_id } = request.all();
    //     const client = await Client
    //         .find('user_id', user_id)
    //         // .query()
    //         .fetch()

    //     return client
    // }

}

module.exports = UserController
