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
        $('.calc-num').css('backgroundColor', '#7DA9C2');
        $('.calc-operator').css('backgroundColor', '#7DA9C2');
        $('#decimal').css('backgroundColor', '#7DA9C2');
        $('#equals').css('backgroundColor', '#78D5D7');
        $('#clear').css('backgroundColor', '#BED8D4');
        $('#display').css('backgroundColor', '#08415C');
        $('#clear').css('color', '#08415C');
        $('#equals').css('color', '#08415C');
        $('#app').css('color', '#F8F4E3');
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
        $('.calc-num').css('backgroundColor', '#7DA9C2');
        $('.calc-operator').css('backgroundColor', '#7DA9C2');
        $('#decimal').css('backgroundColor', '#7DA9C2');
        $('#equals').css('backgroundColor', '#78D5D7');
        $('#clear').css('backgroundColor', '#BED8D4');
        $('#display').css('backgroundColor', '#08415C');
        $('#clear').css('color', '#08415C');
        $('#equals').css('color', '#08415C');
        $('#app').css('color', '#F8F4E3');
    })

    $('#evergreen-forest').click(function() {
        $('.calc-num').css('backgroundColor', '#7DA9C2');
        $('.calc-operator').css('backgroundColor', '#7DA9C2');
        $('#decimal').css('backgroundColor', '#7DA9C2');
        $('#equals').css('backgroundColor', '#78D5D7');
        $('#clear').css('backgroundColor', '#BED8D4');
        $('#display').css('backgroundColor', '#08415C');
        $('#clear').css('color', '#08415C');
        $('#equals').css('color', '#08415C');
        $('#app').css('color', '#F8F4E3');
    })

    
})