var bodyParser = require('body-parser')
module.exports = function (app, prisma) {
    var jsonParser = bodyParser.json()

    app.get("/settings", async (req, res) => {
        const users = await prisma.config.findMany()
        res.json(users)
    });

    app.post("/setsettings", jsonParser, async (req, res) => {
        const { name, value } = req.body
        const response = await prisma.config.create({
            data: {
                name,
                value
            }
        })
        res.json(response)
    });
}