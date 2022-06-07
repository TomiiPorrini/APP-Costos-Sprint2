let nombres = [];
let gastos = [];

function obtenerDatos(){
    if(document.getElementById('InputNombre').value !== "" && document.getElementById('InputGasto').value !== ""){
        let nombre = document.getElementById('InputNombre').value;
        let gasto = document.getElementById('InputGasto').value;
    //imprimimos los datos en pantalla
        imprimirContribuyente(nombre, gasto);
    //guardamos los datos
        nombres.push(nombre);
        gastos.push(gasto);
    //actualizamos datos
        precios();
    }else{
        alert("Por favor, ingresar algun dato.")
    }
    
}

const registro = document.getElementById('registro');

function imprimirContribuyente(nom, precio){
    let text = (nom+": $"+precio);
    const h4 = document.createElement('h4');
    h4.innerText = text;
    registro.append(h4);
}

let totales = document.getElementById('totales');
let promedio = document.getElementById('promedio');

function precios(){
    let suma = total(gastos);
    let resultado = suma/(gastos.length);
    totales.innerText = 'Total: $'+suma;
    promedio.innerText = 'A cada uno le toca aportar: $'+resultado;
}

function total(array){
    let suma = 0;
    for (const elemento of array) {
        suma +=parseInt(elemento);
    }
    return suma;
}