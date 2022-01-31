const { Client, Collection , Discord } = require('discord.js'); //define
const { TOKEN, PREFIX } = require('./config.json'); //token and prefix
const client = new Client({ intents: 32767 }); //all intents

client.on('messageCreate', async message => { //create message
   if (message.content === `${PREFIX}ping`) { //create command
    message.channel.send(`⏱| **${client.ws.ping}ms** Latency!`) //command response
}
})
client.login(config.token); // Bot login through config.json

