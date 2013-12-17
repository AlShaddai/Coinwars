$(document).ready(function() {
    var socket = io.connect('http://localhost');
    $('.register>.send').on('click', function() {
        console.log('register');
        var username = $('.register>.username').val();
        var password = $('.register>.password').val();
        socket.emit('register', {
            username: username,
            password: password
        });
    });
});