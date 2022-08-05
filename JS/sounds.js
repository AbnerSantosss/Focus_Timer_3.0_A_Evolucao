export default function () {
  const rain = new Audio('../Sons/Chuva.Wav')
  const forest = new Audio('../Sons/Floresta.Wav')
  const coffee = new Audio('../Sons/Cafeteria.Wav')
  const fireplace = new Audio('../Sons/Lareira.Wav')

  /*--Songs-Efects--*/
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  //=======================================SELETORES===============================//
  const rangerRain = document.querySelector('#ranger-rain')
  const rangerFlorest = document.querySelector('#ranger-forest')
  const rangerCoffe = document.querySelector('#ranger-coffee')
  const rangerFire = document.querySelector('#ranger-fireplace')

  //======================================EVENTOS===================================//
  rangerRain.addEventListener('change', () => {
    rain.volume = rangerRain.value / 100
  })

  rangerFlorest.addEventListener('change', () => {
    forest.volume = rangerRain.value / 100
  })
  rangerCoffe.addEventListener('change', () => {
    coffee.volume = rangerCoffe.value / 100
  })
  rangerFire.addEventListener('change', () => {
    fireplace.volume = rangerFire.value / 100
  })

  function Rain() {
    rain.play()
    forest.pause()
    coffee.pause()
    fireplace.pause()
    rain.loop = true
  }
  function Forest() {
    forest.play()
    rain.pause()
    coffee.pause()
    fireplace.pause()
  }
  function Coffee() {
    coffee.play()
    forest.pause()
    rain.pause()
    fireplace.pause()
  }

  function Fireplace() {
    fireplace.play()
    forest.pause()
    rain.pause()
    coffee.pause()
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }
  function stopMusic() {
    fireplace.pause()
    forest.pause()
    rain.pause()
    coffee.pause()
  }

  return {
    Rain,
    Forest,
    Coffee,
    Fireplace,
    pressButton,
    timeEnd,
    stopMusic
  }
}
