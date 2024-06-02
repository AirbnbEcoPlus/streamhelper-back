var bodyParser = require('body-parser');
const BotController = require('../bot/BotController');

module.exports = function (app, prisma) {
    var jsonParser = bodyParser.json()
    let botControl = BotController.getInstance()



    app.get("/bot/status", async (req, res) => {
        const users = await prisma.config.findMany()
        res.json(users)
    });

    app.post("/bot/add_bot", jsonParser, async (req, res) => {
        const { bot_name, bot_referer, login_info } = req.body
        const response = await prisma.bot.create({
            data: {
                bot_name,
                bot_referer,
                login_info
            }
        })
    });

    app.get("/bot/get_service", jsonParser, async(req, res) =>{
        res.json(botControl.getServiceSupported()) 
    });

    app.post("/bot/add_command", jsonParser, async (req, res) => {
        const { name, action_command,text } = req.body
        const response = await prisma.command.create({
            data: {
                name: name,
                actionCommand: action_command,
                responseText: text,
                active: true  
            }
        })
        res.json(response)
    });

    app.get("/bot/restart", async (req, res) => {
        botControl.init()
    })
}