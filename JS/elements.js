const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonAddTimer = document.querySelector('.add-timer')
const buttonSet = document.querySelector('.set')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
//===================Button-DarkMode==============================//
const bodyClass = document.querySelector('body')
const btnDayMode = document.querySelector('.svg-day')
const btndarckMode = document.querySelector('.svg-dark')

//===================Button-Sonds==============================//
const buttonDecrement = document.querySelector('.subtration')
const buttonRain = document.querySelector('.sond-rain')
const buttonForest = document.querySelector('.sond-forest')
const buttonCoffee = document.querySelector('.sond-coffee ')
const buttonFireplace = document.querySelector('.sond-fireplace')
const muterButtonOn = document.querySelector('.sound-on')
const muterButtonOff = document.querySelector('.sound-off')
//======================INPUTS-RANGER===========================//

export {
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
  secondsDisplay,
  minutesDisplay,
  btndarckMode,
  btnDayMode,
  bodyClass,
  muterButtonOff,
  muterButtonOn
}
