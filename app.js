$(function calc () {

    // used to store the nums & operators in the equation
    let arr = [];

    // adds the nums to the array (0-9)
    $('.calc-num').on('click', function() {
    
        $('#current-num').html($(this).attr("value"));
        let num = $(this).attr("value");
        arr.push(num);
        console.log(arr);

    });

    // adds decimal point
    $('#decimal-point').on('click', function() {
    
        //$('#current-num').html($(this).attr("value"));
        let decimalPoint = $(this).attr("value");
        arr.push(decimalPoint);
        console.log(arr);

    });

    // adds the operator buttons to the array (+, -, /, *)
    $('.calc-operator').on('click', function() {
    
        let operator = $(this).attr("value");
        arr.push(operator);

        if (arr[arr.length-2] === ("+" || "-" || "/" || "*")) {
            if (arr[arr.length-1] === ("+" || "-" || "/" || "*")) {
                arr.pop();
            } 
        }

        console.log(arr)

        // console.log(arr[arr.length-1]);

        // console.log(arr[arr.length-1]);


    });

    // joins & evaluates array; clears arr and adds answer; displays answer in answer div
    $('#equals').on('click', function() {


        $('#answer').html(Math.round(1000*eval(arr.join('')))/1000);

        //IMMEDIATE EXECUTION LOGIC
        //****** need to handle second operator used; when to clear arr or use next opperator
        //if ()
         arr = [eval(arr.join(''))]

         

    });

    // clears the array with the "C" button; clears the answer div
    $('#clear').on('click', function() {   
        arr = [];
        console.log("clear");
        $('#answer').html(arr);
    });


})