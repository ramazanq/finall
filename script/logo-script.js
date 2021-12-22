$(document).ready(function () {
    
    $('body').on('click', '.password-checkbox', function () {
        if ($(this).is(':checked')) {
            $('.pass').attr('type', 'text');
        } else {
            $('.pass').attr('type', 'password');
        }
    }); 
    $('body').on('click', '.password-checkbox2', function () {
        if ($(this).is(':checked')) {
            $('.pass2').attr('type', 'text');
        } else {
            $('.pass2').attr('type', 'password');
        }
    }); 
})