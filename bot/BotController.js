const twitchBot = require("./TwitchBot")
const youtubeBot = require("./YoutubeBot")

class BotController {

    constructor() {
        this.list = [new twitchBot(), new youtubeBot()]
    }

    async init() {
        for (const bot of this.list) {
            console.log(bot.referer)
            const commands = await this.prisma.command.findMany({
                where: {
                    referer: bot.referer
                }
            })
            for (const command of commands) {
                bot.addCommand(command.actionCommand, command.responseText)
            }
        }
    }


    setPrisma(prisma) {
        this.prisma = prisma;
    }

    getServiceSupported() {
        let s = []
        for (const bot of this.list) {
            s.push(bot.getService())
        }
        return s
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new BotController();
        }
        return this.instance;
    }


}

module.exports = BotController