const tmi = require('tmi.js');

class TwitchBot {

    constructor(botname, login_info){
        this.service = "twitch"
        this.client = new tmi.Client({
            options: { debug: true },
            identity: {
                username: 'TestBot',
                password: `oauth:${process.env.ACCESS_TOKEN}`
            },
            channels: [ 'endide' ]
        });
        this.client.connect().catch(console.error);
        
    }


    addCommand(actionCommand, responseText){
        this.client.on('message', (channel, tags, message, self) => {
            if(self) return;
            if(message.toLowerCase() === actionCommand) {
                this.client.say(channel, responseText);
            }
        });
    }

    getService() {
        return this.service
    }
    
}

module.exports = TwitchBot