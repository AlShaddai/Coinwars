$(document).ready(function() {
    var socket = io.connect(location.host);
    socket.on('news', function(data) {
        console.log(data);
        socket.emit('my other event', {
            my: 'world'
        });
    });


})
