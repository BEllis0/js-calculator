$(document).ready(function() {

    // show/remove dropdown menu
    function showDropdown() {
        $('#custom-colors').toggleClass('show');

        if ($('#custom-colors').hasClass('show')) {
            $('body').click(function(evt){    
                if($(evt.target).is('body')) {
                    $('#custom-colors').removeClass('show');
                }
            });
        }
    }
    $('#button').click(showDropdown);

    


    $('#winter-fresh').click(function() {
        $('.calc-num').css('backgroundColor', '#BED8D4');
        $('.calc-operator').css('backgroundColor', '#7DA9C2');
        $('#decimal').css('backgroundColor', '#BED8D4');
        $('#equals').css('backgroundColor', '#78D5D7');
        $('#clear').css('backgroundColor', '#BED8D4');
        $('#display').css('backgroundColor', '#08415C');
        $('#clear').css('color', '#08415C');
        $('#equals').css('color', '#08415C');
        $('#app').css('color', '#F8F4E3');
        $('#display').css('color', '#F8F4E3');
    })

    $('#sunset').click(function() {
        $('.calc-num').css('backgroundColor', '#E89005');
        $('.calc-operator').css('backgroundColor', '#FFAE03');
        $('#decimal').css('backgroundColor', '#E89005');
        $('#equals').css('backgroundColor', '#680500');
        $('#clear').css('backgroundColor', '#EA5900');
        $('#display').css('backgroundColor', '#FFF589');
        $('#clear').css('color', '#680500');
        $('#equals').css('color', '#F8F4E3');
        $('#app').css('color', '#F8F4E3');
        $('#display').css('color', '#EA5900');
    })

    $('#rose-gold').click(function() {
        $('.calc-num').css('backgroundColor', '#F4E3D0');
        $('.calc-operator').css('backgroundColor', '#F4E3D0');
        $('#decimal').css('backgroundColor', '#F4E3D0');
        $('#equals').css('backgroundColor', '#FCFCFC');
        $('#clear').css('backgroundColor', '#E895C8');
        $('#display').css('backgroundColor', '#EABF93');
        $('#display').css('color', '#CE31BA');
        $('#clear').css('color', '#CE31BA');
        $('#equals').css('color', '#CE31BA');
        $('#app').css('color', '#E895C8');
    })

    $('#evergreen-forest').click(function() {
        $('.calc-num').css('backgroundColor', '#BBDB9B');
        $('.calc-operator').css('backgroundColor', '#95A78D');
        $('#decimal').css('backgroundColor', '#BBDB9B');
        $('#equals').css('backgroundColor', '#558B6E');
        $('#clear').css('backgroundColor', '#558B6E');
        $('#display').css('backgroundColor', '#BBDB9B');
        $('#display').css('color', '#558B6E');    
        $('#clear').css('color', '#BBDB9B');
        $('#equals').css('color', '#BBDB9B');
        $('#app').css('color', '#558B6E');
    })

    $('#colorado').click(function() {
        $('.calc-num').css('backgroundColor', '#255957');
        $('.calc-operator').css('backgroundColor', '#A98743');
        $('#decimal').css('backgroundColor', '#255957');
        $('#equals').css('backgroundColor', '#F7C548');
        $('#clear').css('backgroundColor', '#F7C548');
        $('#display').css('backgroundColor', '#EEEBD3');
        $('#display').css('color', '#255957');
        $('#clear').css('color', '#08415C');
        $('#equals').css('color', '#08415C');
        $('#app').css('color', '#EEEBD3');
    })

    $('#reset').click(function() {
        $('.calc-num').css('backgroundColor', '');
        $('.calc-operator').css('backgroundColor', '');
        $('#decimal').css('backgroundColor', '');
        $('#equals').css('backgroundColor', '');
        $('#clear').css('backgroundColor', '');
        $('#display').css('backgroundColor', '');
        $('#clear').css('color', 'red');
        $('#equals').css('color', 'black');
        $('#app').css('color', 'black');
        $('#display').css('color', 'black');
    })

    
})