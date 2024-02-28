$(document).ready(function() {
    $('#signup-form').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: '/api/signup',
            method: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('#message').text('User signed up successfully!');
            },
            error: function(xhr) {
                $('#message').text('Error: ' + xhr.responseText);
            }
        });
    });
});
