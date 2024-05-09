// ? Esto agrega a la pantalla el valor que recibe

function agregar(valor) {
    document.getElementById('pantalla').value += valor
}

// ? Esta función borra todo lo que este en la pantalla

function borrar() {
    document.getElementById('pantalla').value = ''
}

// ? Esta función calcula todo lo que este en la pantalla

function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado
}