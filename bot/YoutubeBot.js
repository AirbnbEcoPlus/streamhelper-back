const BotBase = require("./BotBase");

class YoutubeBot extends BotBase {

    constructor(){
        super()
        this.service = "youtube"
    }

    getService(){
        return this.service
    }
}

module.exports = YoutubeBot;