'use strict';

function Tienda(location, minConsumidoresPorHora, maxConsumidoresPorHora, promedioGalletasPorPersona) {
    this.location = location;
    this.minConsumidoresPorHora = minConsumidoresPorHora;
    this.maxConsumidoresPorHora = maxConsumidoresPorHora;
    this.promedioGalletasPorPersona = promedioGalletasPorPersona;
    this.galletasVendidasPorHora = [];
}

Tienda.prototype.vender = function () {
    this.galletasVendidasPorHora = estimarVentas(this);
};

const horasAtencion = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const tiendas = [
    new Tienda('seattle', 23, 65, 6.3),
    new Tienda('tokyo', 3, 24, 1.2),
    new Tienda('dubai', 11, 38, 3.7),
    new Tienda('paris', 20, 38, 2.3),
    new Tienda('lima', 2, 16, 4.6)
];
const formElement = document.getElementById("add-location");
const footerTabla = document.createElement('tfoot');

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function estimarVentas(tienda) {
    const sale = [];
    for (let i = 0; i < horasAtencion.length; i++) {
        const numeroConsumidores = random(tienda.minConsumidoresPorHora, tienda.maxConsumidoresPorHora);
        const ventaPorHora = Math.ceil(numeroConsumidores * tienda.promedioGalletasPorPersona);
        sale.push(ventaPorHora);
    }
    return sale;
}

function mostrarTablaVentas(tiendas) {
    const root = document.getElementById('root');
    const table = document.createElement('table');
    root.appendChild(table);

    const encabezado = document.createElement('tr');
    table.appendChild(encabezado);

    const encabeVacio = document.createElement('th');
    encabezado.appendChild(encabeVacio);

    horasAtencion.forEach(hora => {
        const horaHeader = document.createElement('th');
        horaHeader.textContent = hora;
        encabezado.appendChild(horaHeader);
    });

    const totalHeader = document.createElement('th');
    totalHeader.textContent = 'Total del día';
    encabezado.appendChild(totalHeader);

    tiendas.forEach(tienda => {
        const contentTienda = document.createElement('tr');
        table.appendChild(contentTienda);

        const locationGalletas = document.createElement('td');
        locationGalletas.textContent = tienda.location;
        contentTienda.appendChild(locationGalletas);

        let totalGalletasDelDia = 0;

        tienda.galletasVendidasPorHora.forEach(venta => {
            const ventasGalletas = document.createElement('td');
            ventasGalletas.textContent = venta;
            contentTienda.appendChild(ventasGalletas);
            totalGalletasDelDia += venta;
        });

        const totalGalletas = document.createElement('td');
        totalGalletas.textContent = totalGalletasDelDia;
        contentTienda.appendChild(totalGalletas);
    });
}
function hadleForm(e) {
    e.preventDefault();
    const loc = e.target.location.value;
    const min = parseInt(e.target.minConsumidoresPorHora.value);
    const max = parseInt(e.target.maxConsumidoresPorHora.value);
    const prom = parseFloat(e.target.promedioGalletasPorPersona.value);
    console.log(e);
    console.log(loc);
    console.log(min);
    console.log(max);
    console.log(prom);
    const newTienda = new Tienda (loc, min, max, prom);
    tiendas.push(newTienda);
    console.log(tiendas);

    e.target.location.value=null;
    e.target.minConsumidoresPorHora.value=null;
    e.target.maxConsumidoresPorHora.value=null;
    e.target.promedioGalletasPorPersona.value=null;

    footerTabla.innerHTML=' ';
    newTienda.vender();
    mostrarTablaVentas(tiendas);  
}
function EjecTabla() {
    tiendas.forEach(tienda => {
        tienda.vender();
    });
    mostrarTablaVentas(tiendas);
}

EjecTabla();
formElement.addEventListener('submit', hadleForm);