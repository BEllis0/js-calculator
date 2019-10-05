$(function calc () {

    let arr = []; // used to store the nums & operators in the equation
    let reference = false; // used to test if = sign was clicked
    let referenceArr = []; // if = was used, tests if next item is an operator or num

    // initial display state
    $('#display').html('0');
    
    // adds the nums to the array (0-9)
    $('.calc-num').on('click', function() {
    
        //$('#display').html($(this).attr("value"));
        
        let num = $(this).attr("value");
        arr.push(num);

        if (arr[0] === "0") {
            $('#display').html('0');
            arr.pop();
        }
        else {$('#display').html(arr.join(''));}
        // after an =, if a num is used, clears the array
        if (reference) {
            referenceArr.push(num);
            if (referenceArr[1] === "0" || "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9") {
                arr = [num];
                referenceArr = [];
            }
            reference = false;
        }
        console.log(arr);

        // display current equation
        
    });


    //**** adds decimal point ****//
    $('#decimal').on('click', function() {
    
        //$('#display').html($(this).attr("value"));
        let decimalPoint = $(this).attr("value");
        arr.push(decimalPoint);

        
        //removes multiple decimals used in a row
        if (arr[arr.length-2] === (".")) {
            if (arr[arr.length-1] === (".")) {
                arr.pop();
            } 
        }

        // looks for duplicate decimals in arr, doesn't allow second decimal
        function checkForDecimal(arr) {
            return arr.length === new Set(arr).size;
        }

        checkForDecimal(arr)

        if (checkForDecimal(arr) === false) {
            arr.pop()
        }

        if (reference) {
            referenceArr.push(decimalPoint);
            if (referenceArr[1] === ".") {
                arr = [decimalPoint];
                reference = false;
                referenceArr = []
            }
        }
        console.log(arr);

        // display current equation
        $('#display').html(arr.join(''));
    });



    //**** */ adds the operator buttons to the array (+, -, /, *) ****//
    $('.calc-operator').on('click', function() {
    
        let operator = $(this).attr("value");
        arr.push(operator);

        // if first click is operator, remove
        if ((arr[0] === "+" || arr[0] === "-" || arr[0] === "*" || arr[0] === "/")) {
            $('#display').html('0');
            arr.pop();
        }
        else {$('#display').html(arr.join(''));}

        console.log(arr);
        // handles multiple operators used in a row
        if ((arr[arr.length-2] === "+" || arr[arr.length-2] === "-" || arr[arr.length-2] === "*" || arr[arr.length-2] === "/")) {
            if ((arr[arr.length-1] === "+" || arr[arr.length-1] === "-" || arr[arr.length-1] === "*" || arr[arr.length-1] === "/")) {
                arr.splice(arr.length-2,1);
                console.log(arr);
            }
        }
        
        if (reference) {
            referenceArr.push(operator);
            reference = false;
        }

        // display current equation
        
    });

    // **** joins & evaluates array; clears arr and adds answer; displays answer in answer div ***//
    $('#equals').on('click', function() {

         arr = [eval(arr.join(''))];
         reference = true;
         referenceArr = [eval(arr.join(''))];

         if (arr[0] === undefined) {
             $('#display').html("0");
             arr.pop()
         }
         else {$('#display').html(Math.round(1000*eval(arr.join('')))/1000);}
         console.log(arr);
    });
    
    // *** clears the array with the "C" button; clears the answer div ***//
    $('#clear').on('click', function() {   
        arr = [];
        referenceArr = [];
        reference = false;

        console.log("clear");
        $('#display').html("0");
    });



    // *** executes equals function when spacebar is pressed ***//
    $( function() {
        $('html').bind("keypress keydown", function(e) {
           
            if (e.which == 32){
                
            $('#display').html(Math.round(1000*eval(arr.join('')))/1000);

            arr = [eval(arr.join(''))];
            reference = true;
            referenceArr = [eval(arr.join(''))];

            console.log(arr);
            }
        });
            
    });
});