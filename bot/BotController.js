const twitchBot = require("./TwitchBot")
const youtubeBot = require("./YoutubeBot")

class BotController {

    /**
     * Creates an instance of BotController.
     * @param {Map<string, BotBase>} botList
     * @memberof BotController
     */
    constructor(botList) {
        this.botList = botList ?? new Map([["twitch", new twitchBot()], ["youtube", new youtubeBot()]])
    }

    async loadBotsCommands(botServiceList) {
        for (const [service, bot] of this.botList.entries()) {
            bot.loadCommands(await this.prisma.command.findMany())
        }
    }

    async reloadBotsCommands(botServiceList) {
        for (const [service, bot] of this.botList.entries()) {
            bot.reloadCommands(await this.prisma.command.findMany())
        }
    }

    getBot(service){
        return this.botList.get(service)
    }

    //
    setPrisma(prisma) {
        this.prisma = prisma;
    }

    getServiceSupported() {
        let s = []
        for (const bot of this.botList.entries()) {
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