function saludo() {
    return console.log('Hola');
}
saludo()//crean las funciones para restar, multiplicar
//y dividir dos numeros
function suma(num1, num2) {
    return console.log(num1 + num2)
}
//funcion de orden superior = funcion(otraFuncion)
function calculadora(num1, num2, computo) {
    //callback = funcion de orden superior, que invoca a su parametro
    return computo(num1, num2)
}

calculadora(98, 16, suma)
