export function triqui() {
  const cells = document.querySelectorAll('.cell')
  const restartButton = document.getElementById('restart')
  const playerXButton = document.getElementById('playerX')
  const playerOButton = document.getElementById('playerO')
  const winsX = document.getElementById('winsX')
  const winsO = document.getElementById('winsO')

  let currentPlayer = ''
  let gameBoard = ['', '', '', '', '', '', '', '', '']
  let gameActive = false
  let countWinsX = 0
  let countWinsO = 0

  function checkWinner() {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let condition of winningConditions) {
      const [a, b, c] = condition
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        return gameBoard[a]
      }
    }

    if (gameBoard.includes('')) {
      return null
    } else {
      return 'Empate'
    }
  }

  function handleCellClick(e) {
    const index = e.target.id
    if (gameBoard[index] === '' && gameActive) {
      gameBoard[index] = currentPlayer
      e.target.textContent = currentPlayer

      const winner = checkWinner()
      if (winner) {
        gameActive = false
        if (winner === 'Empate') {
          alert('¡Empate!')
        } else {
          alert(`¡${winner} ha ganado!`)
          if (winner === 'X') {
            countWinsX++
            winsX.textContent = `Victorias X: ${countWinsX}`
          } else {
            countWinsO++
            winsO.textContent = `Victorias O: ${countWinsO}`
          }
        }
        restartButton.style.display = 'block'
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
      }
    }
  }

  function restartGame() {
    currentPlayer = ''
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameActive = false
    cells.forEach((cell) => {
      cell.textContent = ''
    })
    playerXButton.style.display = 'block'
    playerOButton.style.display = 'block'
    restartButton.style.display = 'none'
  }

  function selectPlayer(player) {
    currentPlayer = player
    playerXButton.style.display = 'none'
    playerOButton.style.display = 'none'
    gameActive = true
  }

  cells.forEach((cell) => {
    cell.addEventListener('click', handleCellClick)
  })

  playerXButton.addEventListener('click', () => selectPlayer('X'))
  playerOButton.addEventListener('click', () => selectPlayer('O'))
  restartButton.addEventListener('click', restartGame)
}
