const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name:'ping',
    description: 'This is a ping command!',
    execute(message){
        message.channel.send('Pong!');
    }
}