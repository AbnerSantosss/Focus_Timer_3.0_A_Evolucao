import Sounds from './sounds.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes

    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0 //Aqui estou dizendo: quando minutes for  menor ou igual a zero e seconds for menor e igual a zero retorne verdadeiro ( uma especie de validação)//

      updateDisplay(minutes, 0)
      if (isFinished) {
        resetControls()
        updateDisplay()
        Sounds().timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        //Aqui estamos dizendo que seconds vai ser igual a 60, e a baixo estamos dizendo que a cada interação vamos reduzir -1 na variavel minutes!
        --minutes
      }
      updateDisplay(minutes, String(seconds - 1))
      countdown()
    }, 1000)
  }
  //Função para incrementar o contador//
  function increment() {
    minutes = Number(minutes) + 5
    updateDisplay(minutes)
  }
  //Função para decrementar o contador//
  //Aqui criei uma condicional para que: se o contador for menor que 5 eu quero que ele não faça nada, não decremente! se for maior pode decrementar!
  function decrement() {
    if (Number(minutes) <= 5) {
      minutes = Number(minutes)
      updateDisplay(minutes)
    } else {
      minutes = Number(minutes) - 5
      updateDisplay(minutes)
    }
  }

  function hold() {
    clearTimeout(timerTimeOut) //Função para Pausar o temporizador//
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
    increment,
    decrement
  }
}
