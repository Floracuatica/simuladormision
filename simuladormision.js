// === FASE 1: CONFIGURACIÓN DE MISIÓN ===

// Declaración de variables principales
let nombreNave = "Estrella Valiente";
let distanciaEstimada = 120000; // en kilómetros
let misionActiva = true;

// Recursos iniciales generados aleatoriamente
let recursos = {
  agua: Math.floor(Math.random() * 100) + 50,
  comida: Math.floor(Math.random() * 100) + 50,
  energia: Math.floor(Math.random() * 100) + 50
};

// Objeto nave con propiedades generales
let nave = {
  nombre: nombreNave,
  modelo: "Astra-X",
  tripulacion: [],
  estado: misionActiva,

  // Método para mostrar el estado de la misión
  mostrarEstado: function () {
    console.log(`\n--- ESTADO DE LA MISIÓN ---`);
    console.log(`Nave: ${this.nombre}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Misión activa: ${this.estado}`);
  },

  // Método para reportar los recursos disponibles
  reportarRecursos: function () {
    console.log(`\n--- RECURSOS DISPONIBLES ---`);
    for (let tipo in recursos) {
      console.log(`${tipo.charAt(0).toUpperCase() + tipo.slice(1).padEnd(10)}: ${recursos[tipo]}`);
    }
  }
};

// === FASE 2: REGISTRO DE TRIPULANTES ===

// Arreglo de tripulación
let tripulacion = [];

// Función para agregar un tripulante
function agregarTripulante(nombre, rol) {
  let nuevoTripulante = {
    nombre: nombre,
    rol: rol,
    salud: 100
  };
  tripulacion.push(nuevoTripulante);
  nave.tripulacion = tripulacion;
  console.log(`\nTripulante ${nombre} agregado como ${rol}.`);
}

// Función para mostrar a toda la tripulación
function mostrarTripulacion() {
  console.log(`\n--- TRIPULACIÓN ACTUAL ---`);
  if (tripulacion.length === 0) {
    console.log("No hay tripulantes registrados.");
  } else {
    tripulacion.forEach((t, i) => {
      console.log(`${(i + 1).toString().padEnd(3)} | ${t.nombre.padEnd(10)} | ${t.rol.padEnd(20)} | Salud: ${t.salud}`);
    });
  }
}

// Agregar tripulantes iniciales
agregarTripulante("Rommy", "Comandante");
agregarTripulante("Auren", "Ingeniero de Recursos");
agregarTripulante("Aurelia", "Médica Estelar");

// === FASE 3: SIMULACIÓN DE EVENTOS ===

let dias = 5;
let dia = 1;

while (dia <= dias) {
  console.log(`\n🪐 Día ${dia} de misión:`);

  // Simulación automática (puede ser prompt)
  let opcion = Math.floor(Math.random() * 4) + 1;

  switch (opcion) {
    case 1: // Explorar
      console.log("Actividad: Exploración.");
      recursos.energia -= 15;
      recursos.comida -= 10;
      recursos.agua -= 5;
      tripulacion.forEach((t) => {
        t.salud -= 10;
        console.log(`  ${t.nombre} pierde 10 de salud.`);
      });
      break;

    case 2: // Comer
      console.log("Actividad: Alimentación.");
      recursos.comida -= 20;
      tripulacion.forEach((t) => {
        t.salud += 5;
        console.log(`  ${t.nombre} recupera 5 de salud.`);
      });
      break;

    case 3: // Descansar
      console.log("Actividad: Descanso.");
      recursos.agua -= 5;
      recursos.energia += 10;
      tripulacion.forEach((t) => {
        t.salud += 10;
        console.log(`  ${t.nombre} recupera 10 de salud.`);
      });
      break;

    case 4: // Reportar
      console.log("Actividad: Reporte de estado.");
      nave.mostrarEstado();
      nave.reportarRecursos();
      mostrarTripulacion();
      break;
  }

  // Condiciones de borde
  recursos.agua = Math.max(recursos.agua, 0);
  recursos.comida = Math.max(recursos.comida, 0);
  recursos.energia = Math.max(recursos.energia, 0);

  tripulacion.forEach((t) => {
    t.salud = Math.max(0, Math.min(100, t.salud));
  });

  dia++;
}

// === FASE 4: REPORTES Y LÓGICA AVANZADA ===

// Función para calcular el promedio de salud
function promedioSalud() {
  let total = 0;
  tripulacion.forEach((t) => (total += t.salud));
  return tripulacion.length ? (total / tripulacion.length).toFixed(2) : 0;
}

// Función para contar los tripulantes con salud crítica
function tripulantesCriticos() {
  return tripulacion.filter((t) => t.salud < 50).length;
}

// Función para mostrar estado final de recursos
function estadoRecursos() {
  console.log(`\n--- REPORTE FINAL DE RECURSOS ---`);
  for (let tipo in recursos) {
    console.log(`${tipo.charAt(0).toUpperCase() + tipo.slice(1).padEnd(10)}: ${recursos[tipo]}`);
  }
}

// === FASE 5: CIERRE Y BUENAS PRÁCTICAS ===

console.log(`\n🧾 Promedio de salud: ${promedioSalud()}`);
console.log(`Tripulantes con salud < 50: ${tripulantesCriticos()}`);
estadoRecursos();
mostrarTripulacion();
