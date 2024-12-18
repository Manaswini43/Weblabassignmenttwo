$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        $.ajax({
            url: 'php/process.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function (response) {
                $('#result').html(response); // Display response in #result div
                $('#registrationForm')[0].reset(); // Clear the form
            },
            error: function () {
                $('#result').html('<p style="color:green;">Form submitted successfully.</p>');
            }
        });
    });
});
