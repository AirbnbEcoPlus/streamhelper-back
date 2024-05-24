const express = require("express");
const { PrismaClient } = require('@prisma/client')
const app = express();
const prisma = new PrismaClient()

require('./routes/config')(app, prisma)




const server = app.listen(3000) 