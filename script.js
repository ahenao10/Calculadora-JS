let mainScreen = document.getElementById('main-display');
let secScreen = document.getElementById('sec-display')
let num1 = 0
let num2 = 0
let resultado = 0
let operador = ''

const buttonsNum = document.querySelectorAll('#teclado-numerico button');
const buttonsOp = document.querySelectorAll('#operaciones button');
const buttonEqual = document.getElementById('igual')
const buttonCe = document.getElementById('borrar')

buttonsNum.forEach(button =>{

    button.addEventListener('click', e =>{
        mainScreen.textContent += e.target.value;
        secScreen.textContent += e.target.value;
    })
    
})

buttonsOp.forEach(button => {
    button.addEventListener('click', () => {
        operador = button.textContent
        secScreen.textContent += operador

        if (mainScreen.textContent != '') {
            if (num1 === 0) {
                num1 = parseInt(mainScreen.textContent)
            } else if (num1 !== 0 && num2 !== 0) {
                operacion(num1, num2, operador)
                num1 = resultado
                num2 = 0
            }
        }
        mainScreen.textContent = ''
    })
})

buttonEqual.addEventListener('click', () => {

    if(mainScreen.textContent != '' && num1 != 0){
        num2 = parseInt(mainScreen.textContent)
        mainScreen.textContent = '' 
        operacion(num1, num2, operador)
        console.log('asigNum1', num1)
        console.log(operador)
        console.log('asigNum2', num2)
        console.log('asigResulltado', resultado)
        mainScreen.textContent = resultado;
    }

    else {
        alert('Debes ingresar minimo dos numeros antes de ejecutar la operacion')
    }
    
});

function operacion(num1, num2, operador){

    if (operador === '+') {
        resultado = num1 + num2
    }
    else if(operador === '-') {
        resultado = num1 - num2
    }
    else if(operador === 'x') {
        resultado = num1 * num2
    }
    else if(operador === '÷') {
        resultado = num1 / num2
    }
    return resultado
}

function resetCalculator() {
    num1 = 0
    num2 = 0
    mainScreen.textContent = ''
    secScreen.textContent = ''
}

/*let num1 = 0;
let num2 = 0;
let resultado = 0;
let mostrarOperaciones = document.getElementById('display1')

const buttonsNum = document.querySelectorAll('#teclado-numerico button');
buttonsNum.forEach(button =>{
    button.addEventListener('click', () =>{
        const num = parseInt(button.textContent);
        if (num1 === 0){
            num1 = num;
            mostrarOperaciones.innerHTML = num1
        }
        else {
            num2 = num
            mostrarOperaciones.innerHTML = num2
        }
        console.log(num1)
        console.log(num2)
    })
})



function ftSuma(){
    resultado = valorPresionado1 + valorPresionado2;
}

function ftIgual(resultado){
    console.log(resultado)
}*/