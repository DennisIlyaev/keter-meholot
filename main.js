$(document).ready(function() {


  if (prompt('אנא הקש סיסמה') === 'keter') {
    $('body').css('display', 'flex');
  } else {
    return false;
  }


    document.onkeypress = function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
        }

    };



    $('div:gt(0)').focusin(function() {
        $(this).css("background-color", "#FFFFCC");

    });
    $('div:gt(0)').focusout(function() {
        $(this).css("background-color", "#FFFFFF");

    });


    $('table tr td:nth-child(2)', this).on('click', function() {


        if (confirm('להכניס תאריך?')) {
            var date = new Date(),
              
                year = date.getFullYear(),
                month = date.getUTCMonth() + 1,
                day = date.getUTCDate();

            if (day < 10) {
              day = '0' + day;
            }

            if (month < 10) {
              month = '0' + month;
            }

            $(this).html(day + '/' +month + '/' + year);
        } else {

            $(this).html('');

        }
    });





    $('table tr td:nth-child(7)', this).on('click', function() {


        if (confirm('להכניס שעת כניסה?')) {
            var date = new Date(),
                minute = date.getMinutes(),
                hour = date.getHours();

            if (hour < 10) {
                hour = '0' + hour;
            }

            if (minute < 10) {
                minute = '0' + minute;
            }


            $(this).html(hour + ':' + minute);
        } else {

            $(this).html('');

        }
    });

    $('table tr td:nth-child(8)', this).on('click', function() {


        if (confirm('להכניס שעת יציאה?')) {
            var date = new Date(),
                minute = date.getMinutes(),
                hour = date.getHours();

            if (hour < 10) {
                hour = '0' + hour;
            }

            if (minute < 10) {
                minute = '0' + minute;
            }


            $(this).html(hour + ':' + minute);
        } else {

            $(this).html('');

        }
    });


});
