const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Bot online'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
); // for hosting 

const { Client, Collection } = require('discord.js'); //define
const { TOKEN, PREFIX } = require('./config.json'); //token and prefix
const fs = require('fs') //define
const ms = require("ms") //define
const fetch = require('node-fetch') //define
const client = new Client({
    intents: 32767
});

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./Commands");
client.events = new Collection();

module.exports = client;

["Command", "Event"].forEach(handler => {
  require(`./Structures/${handler}`)(client);
});

client.once('ready', () => {
  console.log(`[READY]: ${client.user.tag} is ready`)
})

process.on('beforeExit', async () => {
    console.log(figlet(chalk.redBright('Shutting down...')));
    await client.destroy();
});
 
process.on('exit', async () => {
    console.log(figlet(chalk.redBright('Shut down.')));
});

client.login(config.token);
