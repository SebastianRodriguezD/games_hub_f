export const footer = document.createElement('footer')

const ulSR = document.createElement('p')
ulSR.className = 'p-Footer'
ulSR.textContent = 'By Sebastian Rodriguez'
footer.appendChild(ulSR)

const body = document.getElementsByTagName('body')[0]

body.querySelector('main').insertAdjacentElement('afterend', footer)
