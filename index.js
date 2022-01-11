

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

client.login(config.token);
