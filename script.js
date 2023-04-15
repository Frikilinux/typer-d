const randomWord = document.getElementById('randomWord')
const input = document.getElementById('text')
const timeSpan = document.getElementById('timeSpan')
const scoreText = document.getElementById('score')
const endGame = document.getElementById('end-game-container')
const div = document.querySelector('.main')
const backButton = document.querySelector('.back-btn')

const words = [
  'californication',
  'plataforma5',
  'black',
  'summer',
  'flea',
  'aeroplane',
  'peppers',
  'unlimited',
  'arcadium',
  'love',
  'getaway',
  'stadium',
  'quixoticelixer',
  'quarter',
  'snow',
  'dylan',
  'zephyr',
  'funky',
  'chili',
]

let palabraAleatoria
let time = 10.0
let score = 0

const rndWord = (arr) =>
  (palabraAleatoria = arr[Math.floor(Math.random() * arr.length)])

const addToDOM = () => {
  rndWord(words)
  randomWord.textContent = palabraAleatoria
  timeSpan.textContent = `${time.toFixed(1).toString().padStart(4, '0')}`
}

const actualizarTiempo = () => {
  time -= 0.1
  time <= 0 && gameOver()
  timeSpan.textContent = `${time.toFixed(1).toString().padStart(4, '0')}`
  timeSpan.style.color = time <= 5 ? 'var(--btn)' : 'inherit'
}

const timeInterval = setInterval(actualizarTiempo, 100)

const updateScore = () => {
  score++
  scoreText.textContent = score
}

const gameOver = () => {
  clearInterval(timeInterval)

  div.style.display = 'none'
  endGame.style.display = 'flex'

  const h1 = document.createElement('h1')
  h1.textContent = 'Juego terminado'

  const p = document.createElement('p')
  p.textContent = `El puntaje final es ${score}`

  const button = document.createElement('button')
  button.setAttribute('onclick', 'location.reload()')
  button.textContent = 'Volvé a empezar'

  endGame.append(h1, p, button)

  button.focus()
}

const handleInput = (e) => {
  const palabraIngresada = e.target.value
  if (palabraAleatoria === palabraIngresada) {
    time += 3
    input.value = ''
    addToDOM()
    updateScore()
  }
}

const init = () => {
  input.addEventListener('input', handleInput)
  addToDOM()
  input.focus()
  backButton.onclick = () => window.history.back()
}

init()
