const database = require('../../models')


class LocaleController {

    static async postUserLocale(req, res) {
        const body = req.body
        try {
            const saveLocale = await database.Locale.create(body)
            return res.status(200).json(saveLocale)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getByIP(req, res) {
        const {ip} = req.params

        try {
            const fhui = await database.Locale.findAll({where:{ip: ip}})
            return res.status(200).json(fhui)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = LocaleController