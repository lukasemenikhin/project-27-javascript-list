$(document).ready(function () {

    let left = true;

    let login = $('#login');

    login.on('mouseover', function () {

        let uname = $('#uname').val();
        let pass = $('#pass').val();

        if (uname.length == 0 || pass.length == 0) {

            if (left) {
                login.css('left', '212px');
                left = false;
            } else {
                login.css('left', '0');
                left = true;
            }
        }

    })

})