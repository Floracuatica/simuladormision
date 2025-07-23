# 🚀 Simulador de Misión Galáctica

**Desarrollado por:** Rommy Bejar  
**Lenguaje:** JavaScript  

## 🌌 Descripción del proyecto

Este simulador fue desarrollado como parte de una evaluación de módulo, y tiene como objetivo representar una **misión de exploración galáctica** mediante código estructurado, limpio y modular.

El usuario podrá visualizar cómo evoluciona la misión a través de eventos automáticos que afectan los recursos de la nave y la salud de los tripulantes, generando reportes precisos en consola.

## 🎯 Objetivos cumplidos

- Declaración y uso de variables (`string`, `number`, `boolean`, `object`)
- Creación y uso de un objeto principal `nave` con métodos como `mostrarEstado()` y `reportarRecursos()`
- Generación aleatoria de recursos iniciales con `Math.random()`
- Registro de tripulantes usando objetos y un arreglo dinámico
- Simulación de eventos por consola con estructuras `switch`, `while` y condicionales
- Implementación de lógica para modificar recursos y salud por evento
- Control de condiciones de borde (mínimos y máximos de valores)
- Reportes detallados de:
  - Promedio de salud de la tripulación
  - Cantidad de tripulantes en estado crítico (salud < 50)
  - Estado final de recursos disponibles
- Uso de métodos de string (`toUpperCase`, `padEnd`, `charAt`) para mejorar la presentación en consola
- Código organizado, comentado y siguiendo buenas prácticas de programación

## 🛠️ Cómo ejecutar el proyecto

1. Asegúrate de tener Node.js instalado.
2. Descarga o clona este repositorio.
3. Abre una terminal en la carpeta del proyecto.
4. Ejecuta el archivo con:  node simuladorMision.js

✨ Ejemplo de salida


Tripulante Rommy agregado como Comandante.

Tripulante Auren agregado como Ingeniero de Recursos.

Tripulante Aurelia agregado como Médica Estelar.

🪐 Día 1 de misión:
Actividad: Alimentación.
  Rommy recupera 5 de salud.
  Auren recupera 5 de salud.
  Aurelia recupera 5 de salud.

🪐 Día 2 de misión:
Actividad: Exploración.
  Rommy pierde 10 de salud.
  Auren pierde 10 de salud.
  Aurelia pierde 10 de salud.

🪐 Día 3 de misión:
Actividad: Alimentación.
  Rommy recupera 5 de salud.
  Auren recupera 5 de salud.
  Aurelia recupera 5 de salud.

🪐 Día 4 de misión:
Actividad: Reporte de estado.

--- ESTADO DE LA MISIÓN ---
Nave: Estrella Valiente
Modelo: Astra-X
Misión activa: true

--- RECURSOS DISPONIBLES ---
Agua       : 69
Comida     : 69
Energia    : 123

--- TRIPULACIÓN ACTUAL ---
1   | Rommy      | Comandante           | Salud: 95
2   | Auren      | Ingeniero de Recursos | Salud: 95
3   | Aurelia    | Médica Estelar       | Salud: 95

🪐 Día 5 de misión:
Actividad: Descanso.
  Rommy recupera 10 de salud.
  Auren recupera 10 de salud.
  Aurelia recupera 10 de salud.

🧾 Promedio de salud: 100.00
Tripulantes con salud < 50: 0

--- REPORTE FINAL DE RECURSOS ---
Agua       : 64
Comida     : 69
Energia    : 133

--- TRIPULACIÓN ACTUAL ---
1   | Rommy      | Comandante           | Salud: 100
2   | Auren      | Ingeniero de Recursos | Salud: 100
3   | Aurelia    | Médica Estelar       | Salud: 100