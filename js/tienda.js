'use strict';

const tiendas = [];

function Tiendas(name, direccion, horario, telefono, email, aforo) {
    this.name = name;
    this.direccion = direccion;
    this.horario = horario;
    this.telefono = telefono;
    this.email = email;
    this.aforo = aforo;
}

const seatle = new Tiendas("Seatle", "Av. Azángaro 341", "6am-7pm", "1-54321", "seatle@salmoncookie.com", "15");
const tokyo = new Tiendas("Tokyo", "Av. Azángaro 341", "6am-7pm", "1-54322", "tokyo@salmoncookie.com", "20");
const dubai = new Tiendas("Dubai", "Av. Azángaro 341", "6am-7pm", "1-54323", "dubai@salmoncookie.com", "25");
const paris = new Tiendas("Paris", "Av. Azángaro 341", "6am-7pm", "1-54324", "paris@salmoncookie.com", "30");
const lima = new Tiendas("Lima", "Av. Azángaro 341", "6am-7pm", "1-54325", "lima@salmoncookie.com", "35");

tiendas.push(seatle, tokyo, dubai, paris, lima);

function mostrarTiendas(store) {
    const sucursales = document.getElementById('sucursales');
    
    // Crear una sección para cada tienda
    const local = document.createElement('section');
    local.classList.add('store'); // Añadir una clase CSS opcional
    
    // Añadir nombre de la tienda
    const nombreTienda = document.createElement('h2');
    nombreTienda.textContent = store.name;
    local.appendChild(nombreTienda);

    // Añadir dirección
    const direccionTienda = document.createElement('p');
    direccionTienda.textContent = "Dirección: " + store.direccion;
    local.appendChild(direccionTienda);

    // Añadir horario
    const horarioTienda = document.createElement('p');
    horarioTienda.textContent = "Horario: " + store.horario;
    local.appendChild(horarioTienda);

    // Añadir teléfono
    const telefonoTienda = document.createElement('p');
    telefonoTienda.textContent = "Teléfono: " + store.telefono;
    local.appendChild(telefonoTienda);

    // Añadir email
    const emailTienda = document.createElement('p');
    emailTienda.textContent = "Email: " + store.email;
    local.appendChild(emailTienda);

    // Añadir aforo
    const aforoTienda = document.createElement('p');
    aforoTienda.textContent = "Aforo: " + store.aforo;
    local.appendChild(aforoTienda);

    // Añadir la tienda al contenedor principal
    sucursales.appendChild(local);
}


function ejecutar() {
    for (let i = 0; i < tiendas.length; i++) {
        mostrarTiendas(tiendas[i]);
    }
}


ejecutar();
