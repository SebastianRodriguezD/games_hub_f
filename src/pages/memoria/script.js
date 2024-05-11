export function memory() {
  const totalCards = 12
  const availableCards = ['A', 'K', 'Q', 'J']
  let cards = []
  let selectedCards = []
  let valuesUsed = []
  let currentMove = 0
  let currentAttempts = 0
  let matchedPairs = 0 // Nuevo contador para las parejas coincidentes

  let cardTemplate =
    '<div class="card"><div class="back"></div><div class="face"></div></div>'

  function activate(e) {
    if (currentMove < 2) {
      if (
        (!selectedCards[0] || selectedCards[0] !== e.target) &&
        !e.target.classList.contains('active')
      ) {
        e.target.classList.add('active')
        selectedCards.push(e.target)

        if (++currentMove == 2) {
          currentAttempts++
          document.querySelector('#stats').innerHTML =
            currentAttempts + ' intentos'

          if (
            selectedCards[0].querySelectorAll('.face')[0].innerHTML ==
            selectedCards[1].querySelectorAll('.face')[0].innerHTML
          ) {
            selectedCards = []
            currentMove = 0
            matchedPairs++ // Incrementa el contador de parejas coincidentes

            // Si todas las parejas han sido encontradas
            if (matchedPairs === totalCards / 2) {
              setTimeout(() => {
                congratulatePlayer() // Felicita al jugador
                resetGame() // Reinicia el juego
                startGame() // Inicia el juego nuevamente
              }, 500) // Espera un segundo antes de mostrar la alerta
            }
          } else {
            setTimeout(() => {
              selectedCards[0].classList.remove('active')
              selectedCards[1].classList.remove('active')
              selectedCards = []
              currentMove = 0
            }, 600)
          }
        }
      }
    }
  }

  function randomValue() {
    let rnd = Math.floor(Math.random() * totalCards * 0.5)
    let values = valuesUsed.filter((value) => value === rnd)
    if (values.length < 2) {
      valuesUsed.push(rnd)
    } else {
      randomValue()
    }
  }

  function getFaceValue(value) {
    let rtn = value
    if (value < availableCards.length) {
      rtn = availableCards[value]
    }
    return rtn
  }

  function congratulatePlayer() {
    alert(`¡Felicidades! Has completado el juego.`)
    currentAttempts = 0 // Reinicia el contador de intentos
    document.querySelector('#stats').innerHTML = '0 intentos' // Actualiza el contador de intentos en el DOM
  }

  function resetGame() {
    cards = []
    selectedCards = []
    valuesUsed = []
    currentMove = 0
    currentAttempts = 0
    matchedPairs = 0 // Reinicia el contador de parejas coincidentes
    document.querySelector('#game').innerHTML = ''
  }

  function startGame() {
    for (let i = 0; i < totalCards; i++) {
      let div = document.createElement('div')
      div.innerHTML = cardTemplate
      cards.push(div)
      document.querySelector('#game').append(cards[i])
      randomValue()
      cards[i].querySelectorAll('.face')[0].innerHTML = getFaceValue(
        valuesUsed[i]
      )
      cards[i].querySelectorAll('.card')[0].addEventListener('click', activate)
    }
  }

  startGame()
}
