const { Client, Collection, Intents, Message, MessageEmbed, DiscordAPIError } = require('discord.js');

const client = new Client({intents : [Intents.FLAGS.GUILD_MESSAGES , Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILDS], partials : ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '.';

const { token } = require('./config.json');

const fs = require('fs');

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command)
}

const Rcon = require('./node_modules/rcon-srcds').default;
const server = new Rcon({ host: 'XXXXXXXX', port: XXXXXXX, password: 'XXXXXXXXX'})
//const rand = Math.random().toString(16).substr(2, 8);
//var rand = Math.random().toString(16).substr(2, 8);

server.authenticate('rcon pass here')
    .then(() => {
        console.log('authenticated');
        return server.execute('status');
    })
    .then(console.log)
    .catch(console.error);
//


client.once('ready', () => {
console.log('Bot is now online!')
})



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot || !message.channelId.match('XXXXXXXXXXXXXX')) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
       client.commands.get('ping').execute(message, args);
    }
    else if(command === 'info'){
        message.channel.send('Discord bot to help with scheduling scrims in the ScrimScheduler discord server made by fearadust')
    }
    else if(command === 'say'){
      client.commands.get('say').execute(server, args);
    }
    else if(command === 'pass'){
      var rand = Math.random().toString(16).substr(2, 8);
      client.commands.get('pass').execute(message, server, rand);
    }
    else if(command === 'schedule') {
      client.commands.get('schedule').execute(message, args);
    }
})



client.login(token);