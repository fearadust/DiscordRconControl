module.exports = {
    name: 'schedule',
    description: 'Sets up a reaction role message',
    execute(message, args) {
            message.channel.send('Please include the start and finish time you want for your scrim in GMT');    
    }
}