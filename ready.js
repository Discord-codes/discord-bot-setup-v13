const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Bot online'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
); // for hosting 

const { Client, Collection } = require('discord.js'); //define
const { TOKEN, PREFIX } = require('./config.json'); //token and prefix
const chalk = require("chalk")


client.once('ready', () => {
  console.log(`[READY]: ${client.user.tag} is ready`)
}) // if client ready

process.on('beforeExit', async () => {
    console.log(figlet(chalk.redBright('Shutting down...')));
    await client.destroy(); // if bot gonna be down
});
 
process.on('exit', async () => {
    console.log(figlet(chalk.redBright('Shut down.')));
}); // bot down
