import './style.css'
import { insertarTriqui } from './src/pages/tres_en_raya/html.js'
import { triqui } from './src/pages/tres_en_raya/index.js'
import { insertarMemoria } from './src/pages/memoria/insertarMemoria.js'
import { memory } from './src/pages/memoria/script.js'
import { adivina } from './src/pages/adivina/adivina.js'
import { footer } from './src/components/footer.js'

let juegoActual = null

// Función para ocultar todos los juegos
function ocultarTodosLosJuegos() {
  ocultarTriqui()
  ocultarMemoria()
  ocultarAdivina()
}

// Función para limpiar los elementos y scripts del juego anterior
function limpiarJuegoAnterior() {
  const main = document.querySelector('main')

  // Eliminar todos los elementos hijos de main excepto los botones en la sección principal
  const childNodes = main.childNodes
  for (let i = childNodes.length - 1; i >= 0; i--) {
    const node = childNodes[i]
    if (node.nodeName !== 'SECTION' || node.id !== 'hero') {
      main.removeChild(node)
    }
  }

  // Detener cualquier script en ejecución del juego anterior, si es necesario
}

// Función para mostrar un juego específico y ejecutarlo si es necesario
function mostrarJuego(juego, juegoCallback) {
  limpiarJuegoAnterior() // Limpiar juego anterior antes de mostrar el nuevo juego
  juego()
  juegoCallback()
}

// Función para ocultar el juego de triqui
function ocultarTriqui() {
  const container = document.querySelector('.container-triqui')
  if (container) {
    container.classList.add('oculto')
  }
}

// Función para mostrar el juego de triqui
function mostrarTriqui() {
  const container = document.querySelector('.container-triqui')
  if (container) {
    container.classList.remove('oculto')
  }
}

// Función para ocultar el juego de memoria
function ocultarMemoria() {
  const container = document.querySelector('.container-memoria')
  if (container) {
    container.classList.add('oculto')
  }
}

// Función para mostrar el juego de memoria
function mostrarMemoria() {
  const container = document.querySelector('.container-memoria')
  if (container) {
    container.classList.remove('oculto')
  }
}

// Función para ocultar el juego de adivina
function ocultarAdivina() {
  const container = document.querySelector('.container-adivina')
  if (container) {
    container.classList.add('oculto')
  }
}

// Función para mostrar el juego de adivina
function mostrarAdivina() {
  const container = document.querySelector('.container-adivina')
  if (container) {
    container.classList.remove('oculto')
  }
}

document
  .getElementById('btnTresEnRaya')
  .addEventListener('click', function handleClick() {
    if (juegoActual !== 'triqui') {
      juegoActual = 'triqui'
      mostrarJuego(mostrarTriqui, () => {
        insertarTriqui()
        triqui()
      })
    }
  })

document
  .getElementById('btnMemoria')
  .addEventListener('click', function handleClick() {
    if (juegoActual !== 'memoria') {
      juegoActual = 'memoria'
      mostrarJuego(mostrarMemoria, () => {
        insertarMemoria()
        memory()
      })
    }
  })

document
  .getElementById('btnAdivinaElNumero')
  .addEventListener('click', function handleClick() {
    if (juegoActual !== 'adivina') {
      juegoActual = 'adivina'
      mostrarJuego(mostrarAdivina, () => {
        adivina()
      })
    }
  })
