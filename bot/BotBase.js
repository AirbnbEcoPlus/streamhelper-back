class BotBase {

    constructor() {
        this.service;
        this.client;
        this.commands = new Map()
    }

    init() {
        console.log(`le bot n'a pas d'init`)
    }

    getService() {
        return this.service
    }

    //commands
    loadCommands(commandSet){
        commandSet.forEach(command => {
            this.addCommand(command.actionCommand, command.responseText)
        })
    }

    addCommand(actionCommand, responseText) {
        this.commands.set(actionCommand, responseText)
    }
    
    getCommands() {
        return this.commands ?? 'pas de commandes'
    }

    clearCommands() {
        this.commands.clear()
    }

    reloadCommands(commandSet) {
        if (!commandSet) return console.log("aucun set de commandes fourni")
        this.clearCommands()
        this.loadCommands(commandSet)
    }
}

module.exports = BotBase