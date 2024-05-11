export function insertarMemoria() {
  const container = document.createElement('div')
  container.className = 'container-memoria'

  // Crea el HTML dentro del contenedor
  container.innerHTML = `

<div id="stats">Memoria</div>
<div id="wrapper">
  <div id="game"></div>
  </div> `

  const mainElement = document.querySelector('main')
  mainElement.appendChild(container)
}
