const randomWord = document.getElementById('randomWord')
const input = document.getElementById('text')
const timeSpan = document.getElementById('timeSpan')
const scoreText = document.getElementById('score')
const endGame = document.getElementById('end-game-container')
const div = document.querySelector('.main')
const backButton = document.querySelector('.back-btn')

const words = [
  'example',
  'computer',
  'javascript',
  'function',
  'variable',
  'internet',
  'database',
  'software',
  'hardware',
  'keyboard',
  'monitor',
  'network',
  'programming',
  'algorithm',
  'debugging',
  'framework',
  'interface',
  'protocol',
  'compiler',
  'encryption',
  'iteration',
  'recursion',
  'scripting',
  'terminal',
  'repository',
  'middleware',
  'virtualization',
  'container',
  'microservice',
  'architecture',
  'deployment',
  'scalability',
  'optimization',
  'synchronization',
  'asynchronous',
  'concurrency',
  'parallelism',
  'abstraction',
  'inheritance',
  'polymorphism',
  'encapsulation',
  'modularity',
  'refactoring',
  'dependency',
  'integration',
  'continuous',
  'automation',
  'orchestration',
  'configuration',
  'provisioning',
  'monitoring',
  'observability',
  'telemetry',
  'instrumentation',
  'logging',
  'tracing',
  'alerting',
  'dashboard',
  'visualization',
  'analytics',
  'metrics',
  'performance',
  'latency',
  'throughput',
  'bandwidth',
  'availability',
  'reliability',
  'resilience',
  'redundancy',
  'backup',
  'recovery',
  'disaster',
  'failover',
  'replication',
  'snapshot',
  'versioning',
  'branching',
  'merging',
  'conflict',
  'resolution',
  'rollback',
  'commit',
  'push',
  'pull',
  'clone',
  'fork',
  'issue',
  'ticket',
  'milestone',
  'sprint',
  'kanban',
  'scrum',
  'agile',
  'waterfall',
  'devops',
  'ci/cd',
  'pipeline',
  'artifact',
  'release',
  'deployment',
  'staging',
  'production',
  'debug',
  'test',
  'build'
];

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
