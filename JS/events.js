import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddTimer,
  buttonDecrement,
  buttonRain,
  buttonForest,
  buttonCoffee,
  buttonFireplace,
  buttonSet,
  btnDayMode,
  btndarckMode,
  bodyClass,
  muterButtonOff,
  muterButtonOn
} from './elements.js'
import sound from './sounds.js'

export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  buttonSet.addEventListener('click', function () {
    let newMinutes = controls.getMinutes()
    if (!newMinutes) {
      timer.reset()
      return
    }
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  //===================BUTTON-INCREMENT========================//
  buttonAddTimer.addEventListener('click', () => {
    timer.increment()
  })
  buttonDecrement.addEventListener('click', () => {
    timer.decrement()
  })
  //===================CARDS-SONS================================//
  buttonRain.addEventListener('click', function () {
    sound.Rain()
  })

  buttonForest.addEventListener('click', function () {
    sound.Forest()
  })

  buttonCoffee.addEventListener('click', function () {
    sound.Coffee()
  })
  buttonFireplace.addEventListener('click', function () {
    sound.Fireplace()
  })

  //===================DARK-MODE===============================//
  btnDayMode.addEventListener('click', () => {
    btndarckMode.classList.toggle('hide')
    btnDayMode.classList.toggle('hide')
    bodyClass.classList.toggle('dark')
  })

  btndarckMode.addEventListener('click', () => {
    btnDayMode.classList.toggle('hide')
    btndarckMode.classList.toggle('hide')
    bodyClass.classList.toggle('dark')
  })

  muterButtonOff.addEventListener('click', () => {
    muterButtonOn.classList.toggle('hide')
    muterButtonOff.classList.toggle('hide')
  })

  muterButtonOn.addEventListener('click', () => {
    muterButtonOn.classList.toggle('hide')
    muterButtonOff.classList.toggle('hide')
    sound.stopMusic()
  })
}
//==============Button-sond-off/on=============================//
