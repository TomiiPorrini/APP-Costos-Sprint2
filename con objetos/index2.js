let lista = [];

const nombre = document.getElementById("nombre");
const pago = document.getElementById("pago");
const efectivo = document.getElementById("flexSwitchCheckDefault");

function ObtenerDatos() {
  if (nombre.value !== "" && pago.value !== "") {
    agregarPersona();
    imprimirLista();
    imprimirResult();
  } else {
    alert("Por favor, ingrese algún dato.");
  }
}

function agregarPersona() {
  lista.push({
    nombre: nombre.value,
    pago: pago.value,
    fecha: new Date().toLocaleString(),
    efectivo: efectivo.checked ? "uso efectivo" : "no uso efectivo",
  });
}

const ul = document.getElementById("list-group");

function imprimirLista() {
  const li = document.createElement("li");
  li.classList.add("list-group");
  li.classList.add("mx-5");
  li.classList.add("my-1");
  let ultPer = lista[lista.length - 1];
  // console.log(ultPer.fecha);
  li.innerHTML = `<b>${ultPer.nombre}: </b>gastó $${ultPer.pago}<br>fecha: ${ultPer.fecha}<br>${ultPer.efectivo} <hr>`;
  ul.append(li);
}

const total = document.getElementById("total");

function imprimirResult() {
  let gasto_total = suma();
  let promedio = gasto_total / lista.length;
  total.innerHTML = `<h3>Total: $${gasto_total}, a pagar cada uno: $${promedio}</h3>`;
}

function suma() {
  let suma = 0;
  for (const persona of lista) {
    suma += parseFloat(persona.pago);
  }
  return suma;
}

function descargar() {
  if (nombre.value !== "" && pago.value !== "") {
    const a = document.createElement('a');
    const file = new Blob([JSON.stringify(lista)], {type: 'text/plain'});
    a.href = URL.createObjectURL(file);
    a.download = 'sesion.json';
    a.click();
  } else {
    alert("Por favor, ingrese algún dato.");
  }
}
