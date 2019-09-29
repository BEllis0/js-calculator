$(function calc () {

    // used to store the nums & operators in the equation
    let arr = [];
    let reference = false; // used to test if = sign was pushed
    let referenceArr = []; // if = was used, tests if next item is an operator or num

    // adds the nums to the array (0-9)
    $('.calc-num').on('click', function() {
    
        $('#display').html($(this).attr("value"));
        let num = $(this).attr("value");
        arr.push(num);

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

        console.log(arr);

        if (reference) {
            referenceArr.push(decimalPoint);
            if (referenceArr[1] === ".") {
                arr = [decimalPoint];
                reference = false;
                referenceArr = []
            }
        }
        console.log(arr);

    });



    //**** */ adds the operator buttons to the array (+, -, /, *) ****//
    $('.calc-operator').on('click', function() {
    
        let operator = $(this).attr("value");
        arr.push(operator);

        // handles multiple operators used in a row
        if (arr[arr.length-2] === ("+" || "-" || "/" || "*")) {
            if (arr[arr.length-1] === ("+" || "-" || "/" || "*")) {
                // arr.slice(arr.length-2,arr.length-2);
                arr.pop();
            } 
        }

        if (reference) {
            referenceArr.push(operator);
            reference = false;
        }

        //****need to remove operators except for the last one used; pop will not work
        console.log(arr)


    });

    // **** joins & evaluates array; clears arr and adds answer; displays answer in answer div ***//
    $('#equals').on('click', function() {


        $('#answer').html(Math.round(1000*eval(arr.join('')))/1000);

         arr = [eval(arr.join(''))];
         reference = true;
         referenceArr = [eval(arr.join(''))];

         console.log(arr);

         //if num after click, reset arr and add it to the arr

    });

    
    
    // *** clears the array with the "C" button; clears the answer div ***//
    $('#clear').on('click', function() {   
        arr = [];
        referenceArr = [];
        reference = false;

        console.log("clear");
        $('#answer').html(arr);
    });
})