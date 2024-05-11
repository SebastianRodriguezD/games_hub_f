export function adivina() {
  let randomNumber
  let minNumber = 1
  let maxNumber = 50
  let attempts = 0
  const maxAttempts = 10

  const contenedorFull = document.createElement('div')
  contenedorFull.classList.add('contenedor-full')

  const containerAdivina = document.createElement('div')
  containerAdivina.classList.add('container-adivina')

  contenedorFull.appendChild(containerAdivina)

  const h1 = document.createElement('h1')
  h1.textContent = 'Adivina el número'
  containerAdivina.appendChild(h1)

  const numberText = document.createElement('p') // Agregamos este elemento
  numberText.textContent = 'Adivina un número del 1 al 50'
  numberText.classList.add('p-adivina')
  containerAdivina.appendChild(numberText) // Agregamos este elemento

  const inputGuess = document.createElement('input')
  inputGuess.setAttribute('type', 'text')
  inputGuess.setAttribute('id', 'guessField')
  inputGuess.setAttribute('placeholder', 'Introduce número aquí')
  containerAdivina.appendChild(inputGuess)

  const guessButton = document.createElement('button')
  guessButton.textContent = 'Comprobar'
  guessButton.addEventListener('click', checkGuess)
  containerAdivina.appendChild(guessButton)

  const pResult = document.createElement('p')
  pResult.setAttribute('id', 'guessResult')
  containerAdivina.appendChild(pResult)

  const pAttempts = document.createElement('p')
  pAttempts.setAttribute('id', 'attemptsLeft')
  containerAdivina.appendChild(pAttempts)

  const restartButton = document.createElement('button')
  restartButton.textContent = 'Reiniciar Juego'
  restartButton.addEventListener('click', restartGame)
  containerAdivina.appendChild(restartButton)

  document.querySelector('main').appendChild(contenedorFull)

  function startGame() {
    randomNumber =
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
    attempts = 0
    inputGuess.disabled = false
    guessButton.disabled = false
    pResult.textContent = ''
    pAttempts.textContent = `Intentos restantes: ${maxAttempts}`
  }

  function checkGuess() {
    const userGuess = parseInt(inputGuess.value)
    attempts++
    pAttempts.textContent = `Intentos restantes: ${maxAttempts - attempts}`

    if (userGuess === randomNumber) {
      pResult.textContent = `¡Felicidades! ¡Adivinaste el número en ${attempts} intentos!`
      disableInputAndButton()
    } else if (attempts >= maxAttempts) {
      pResult.textContent = `¡Agotaste tus intentos! El número era ${randomNumber}.`
      disableInputAndButton()
    } else if (userGuess < randomNumber) {
      pResult.textContent = 'El número es mayor. Inténtalo de nuevo.'
    } else {
      pResult.textContent = 'El número es menor. Inténtalo de nuevo.'
    }
  }

  function disableInputAndButton() {
    inputGuess.disabled = true
    guessButton.disabled = true
  }

  function restartGame() {
    startGame()
  }

  inputGuess.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      checkGuess()
    }
  })

  // Inicia el juego al cargar la página
  startGame()
}
