'use strict'

let display = document.querySelector('input');
let operators = document.querySelectorAll('#button_operator');
let numbers = document.querySelectorAll('.button')
let solve = document.querySelector('.button_solver');
let sub_display = document.querySelector('.sub_display');





let array = [];

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        display.value += number.value
        
        
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        // array.push(display.value);
        if (display.value !== '') {
            array.push(display.value);
            display.value += operator.value;
            array.push(operator.value)
            display.value = '';
            
            
        } else if (array.length > 0) {
            display.value = operator.value
            array.pop();
            array.push(display.value)
            display.value = ''
        }


        if (array.length > 0) {
            sub_display.innerText = array.map(item => {
               return item
            }).join(' ')
        }

       
    })
})


 


solve.addEventListener('click', (e) => {
    array.push(display.value)
    display.value = ''
    console.log(evaluate(array[0], array[2]))
    display.value = evaluate(array[0], array[2])
    array.length = 0;
    sub_display.innerText = ''
    
    
    
})



function evaluate(a, b) {

    for (let i = 0; i < array.length; i++){
        let result = 0;
        if (array[i] == '+') {
            return result = Number(a) + Number(b);
        }

        if (array[i] == '-') {
            return result = Number(a) - Number(b);
        }

        if (array[i] == '*') {
           return  result = Number(a) * Number(b);
        }

        if (array[i] == '/' && array[2] !== '0') {
            return result = Number(a)  / Number(b);
        }

          
    }

   
    
}

function cleaner() {
    if (array.length > 0) {
        array.pop()
       
    } else {
        display.value = '';
        sub_display.innerText = '';
    }
    // display.value = ''
    // array.length = 0
}

