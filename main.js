$(document).ready(function() {


    if (prompt('אנא הקש סיסמה') === 'keter') {
        $('body').css('display', 'flex');
    } else {
        $('body').css('display', 'none');
    }




    document.onkeypress = function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
        }

    };

    window.onbeforeunload = confirmExit;

    function confirmExit() {
        return "You have attempted to leave this page.  If you have made any changes to the fields without clicking the Save button, your changes will be lost.  Are you sure you want to exit this page?";
    }



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

            $(this).html(day + '/' + month + '/' + year);
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

    $('table tr td:nth-child(3) div').on('keyup', function() {
        if ($(this).html() == 'פאדי') {

            $(this).parent().next().html('2611639');

        } else if ($(this).html() == 'ולדימיר') {
            $(this).parent().next().html('1601612');

        } else if ($(this).html() == 'רבאח') {
            $(this).parent().next().html('1095333');

        } else if ($(this).html() == 'זכריה' || $(this).html() == 'זכר') {
            $(this).parent().next().html('2175870');

        } else if ($(this).html() == 'נור') {
            $(this).parent().next().html('5682069');

        } else if ($(this).html() == 'סרגיי') {
            $(this).parent().next().html('2611439');

        } else if ($(this).html() == 'ודים') {
            $(this).parent().next().html('1534558');

        } else if ($(this).html() == 'קובי') {
            $(this).parent().next().html('8595652');




        } else {
            $(this).parent().next().html('').attr('contenteditable', 'true');
        }
    });








});
