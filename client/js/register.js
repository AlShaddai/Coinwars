$(document).ready(function() {
    var socket = io.connect(location.host);
    $('.reg-send').on('click', function() {
        console.log('register');
        var username = $('.reg-username').val();
        var password = $('.reg-password').val();
        var email = $('.reg-email').val();
        socket.emit('register', {
            username: username,
            password: password,
            email: email
        });
    });
});
