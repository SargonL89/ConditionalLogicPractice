function nuevaEntrada() {
    const enter1= document.querySelector(".enter1");
    enter1.addEventListener("click", ()=> {primerResultado()});
    const calcular= document.querySelector(".calcular");
    calcular.addEventListener("click", ()=> {segundoResultado()});
    const enter2= document.querySelector(".enter2");
    enter2.addEventListener("click", ()=> {tercerResultado()});
    const registrar= document.querySelector(".registrar");
    registrar.addEventListener("click", ()=> {cuartoResultado()});
}

function primerResultado() {
    const numero= document.querySelector(".number").value;
    const divUno= document.querySelector(".divUno")

    const resultado =    
    numero > "0" ? "El número es positivo: " + numero :
    numero < "0" ? "El número es negativo: " + numero :
    "El número es cero: " + "0";
    divUno.innerText = resultado
}

function segundoResultado() {
    const year= document.querySelector(".year").value;
    const div= document.querySelector(".divDos")

    const calculo =    
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 
    year + " es bisiesto" :
    year + " NO es bisiesto";
    div.innerText = calculo
}

function tercerResultado() {
    const parPos= document.querySelector(".parPos").value;
    const divTres= document.querySelector(".divTres")

    const resultado =    
    parPos % 2 === 0 && parPos >= 2 ? 
    "El número " + parPos + " es par y positivo" :
    parPos + " NO es un número par y positivo";
    divTres.innerText = resultado
}

function cuartoResultado() {

    const password= document.querySelector(".contraseña").value.split('');
    //La constante password selecciona la clase 'contraseña' del html, el método 'value' obtiene el valor ingresado por el usuario en el input, finalmente el método 'split' convierte la cadena de valores de la contraseña en un array de caracteres
    const divCuatro= document.querySelector(".divCuatro");

    const resultado= 
    (password.some(number => !isNaN(number)) && password.some(number => isNaN(number)) && password.length >= 8) ?
    //el método 'some' se utiliza para evaluar si alguno cualquiera de los caracteres del array password cumple, en primer lugar, con la condición de ser distinto de no ser un número (!isNaN) y, en segundo lugar, de que alguno de los elementos del array no sea un número (isNaN)
    "La contraseña se registró exitosamente!" :
    "La contraseña debe contar con al menos 8 caracteres y contener al menos una letra y un número"
    divCuatro.innerText = resultado
}


nuevaEntrada();