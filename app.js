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

function precios(){
    let suma = total(gastos);
    let promedio = suma/(gastos.length);
    console.log(promedio, typeof(promedio))
    document.getElementById('totales').innerText = 'Total: $'+suma;
    document.getElementById('promedio').innerText = 'A cada uno le toca aportar: $'+promedio;
}

function total(array){
    let suma = 0;
    for (const elemento of array) {
        suma +=parseInt(elemento);
    }
    return suma;
    
}