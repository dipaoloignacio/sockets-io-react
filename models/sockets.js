class Sockets {

    constructor(io){
        this.io = io;
        this.socketsEvents();
    }

    socketsEvents(){
        this.io.on('connection', (socket) => {
        
            socket.on('enviando', (data) => {
                console.log(data);
                this.io.emit('recivido',data);
            })
        });
    }
}

module.exports = Sockets