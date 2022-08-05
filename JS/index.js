import Controls from './controls.js'
import Timer from './timer.js'
import Events from './events.js'
import Sound from './sounds.js'
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  secondsDisplay,
  minutesDisplay
} from './elements.js'

const sound = Sound()

//========CONTROLS=============//
const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

Events({ controls, timer, sound })
