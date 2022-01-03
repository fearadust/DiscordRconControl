module.exports = {
    name: 'pass',
    description: "Communicate with the players in game",
    execute(message, server, rand){
        server.execute('sv_password' + " " + rand)
        .then(console.log);
        message.author.send('Your server password is: ' + rand);
    }
}