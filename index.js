const { Client, Collection } = require('discord.js'); //define
const { TOKEN, PREFIX } = require('./config.json'); //token and prefix
const client = new Client({ //client intents
    intents: 32767
});
client.on('messageCreate', async message => {
   if (message.content === "!ping") {
    message.channel.send(`⏱| **${client.ws.ping}ms** Latency!`)
}
})

client.login(config.token);
