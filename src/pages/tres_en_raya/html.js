export function insertarTriqui() {
  let currentPlayer // Variable global para almacenar el jugador actual
  let gameActive // Variable global para indicar si el juego está activo
  // Crea un div contenedor
  const container = document.createElement('div')
  container.className = 'container container-triqui'

  // Crea el HTML dentro del contenedor
  container.innerHTML = `
    <h1>TRES EN RAYA</h1>
    <div class="contenedor_x">
      <button id="playerX">Jugador X</button>
      <span id="winsX">Victorias X: 0</span>
    </div>
    <div class="contenedor_o">
      <button id="playerO">Jugador O</button>
      <span id="winsO">Victorias O: 0</span>
    </div>
    <div class="board">
      <div class="cell" id="0"></div>
      <div class="cell" id="1"></div>
      <div class="cell" id="2"></div>
      <div class="cell" id="3"></div>
      <div class="cell" id="4"></div>
      <div class="cell" id="5"></div>
      <div class="cell" id="6"></div>
      <div class="cell" id="7"></div>
      <div class="cell" id="8"></div>
    </div>
    <button id="restart" style="display: none">Volver a Empezar</button>
  `

  // Agrega un mensaje para que el usuario seleccione un jugador antes de comenzar
  const message = document.createElement('div')
  message.textContent = 'Por favor, seleccione un jugador para comenzar.'
  container.insertBefore(message, container.querySelector('h1').nextSibling)

  const mainElement = document.querySelector('main')
  mainElement.appendChild(container)

  const playerXButton = document.getElementById('playerX')
  const playerOButton = document.getElementById('playerO')

  // Controlar la visibilidad del mensaje cuando se seleccione un jugador
  playerXButton.addEventListener('click', () => {
    currentPlayer = 'X'
    playerXButton.style.display = 'none'
    playerOButton.style.display = 'none'
    message.style.display = 'none'
    gameActive = true
  })

  playerOButton.addEventListener('click', () => {
    currentPlayer = 'O'
    playerXButton.style.display = 'none'
    playerOButton.style.display = 'none'
    message.style.display = 'none'
    gameActive = true
  })

  function restartGame() {
    currentPlayer = '' // Reinicia el jugador actual
    gameActive = false // Indica que el juego está inactivo
    message.style.display = 'block' // Muestra el mensaje para seleccionar un jugador
  }

  // Asignar la función restartGame al botón de reinicio
  const restartButton = document.getElementById('restart')
  restartButton.addEventListener('click', restartGame)
}
