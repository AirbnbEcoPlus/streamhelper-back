var bodyParser = require('body-parser')

modules.exports = function (app, prisma) {
    var jsonParser = bodyParser.json()

    app.get("/webitem/:id", async (req, res) => {

    });



}

