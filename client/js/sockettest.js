$(document).ready(function() {
    var socket = io.connect('http://www.craftingen.de');
    socket.on('news', function(data) {
        console.log(data);
        socket.emit('my other event', {
            my: 'world'
        });
    });


})