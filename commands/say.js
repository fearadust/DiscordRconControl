module.exports = {
    name: 'say',
    description: "Communicate with the players in game",
    execute(server, args){
        server.execute('say' + " " + args)
        .then(console.log);
    }
}