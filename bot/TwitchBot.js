const tmi = require('tmi.js');
const config = require('./config')
const BotBase = require('./BotBase')

class TwitchBot extends BotBase {

    constructor(botname, login_info) {
        super();
        this.service = "twitch";
        this.client = new tmi.Client({
            options: { debug: true },
            identity: {
                username: config.twitch.username,
                password: `oauth:${process.env.ACCESS_TOKEN}`,
            },
            connection: {
                reconnect: true,
                secure: true
            },
            channels: config.twitch.channels
        });
        this.init()
    }

    init() {
        this.client.connect().catch(err => console.error(err)).then(() => {
            this.client.on('message', (channel, tags, message, self) => {
                if (self) return
                if (this.commands.has(message.toLowerCase())) {
                    this.client.say(channel, this.commands.get(message.toLowerCase()))
                }
            })
        })
    }    
    
}

module.exports = TwitchBot