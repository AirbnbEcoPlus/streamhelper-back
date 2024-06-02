const express = require("express");
const { PrismaClient } = require('@prisma/client');
const BotController = require("./bot/BotController");
const app = express();
const prisma = new PrismaClient()
require('dotenv').config({path: "../secrets/.secrets"})

require('./routes/config')(app, prisma)
require('./routes/bot')(app, prisma)


let botController = BotController.getInstance()
botController.setPrisma(prisma)



const server = app.listen(3000) 