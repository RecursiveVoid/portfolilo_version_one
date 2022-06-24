import React from 'react';
// @ts-ignore
import * as dat from 'dat.gui';
import './App.css';
import TitleComponent from "./components/title/TitleComponent";

const gui = new dat.GUI()
const canvas = document.querySelector('canvas');
// @ts-ignore
const c = canvas.getContext('2d');

// @ts-ignore
canvas.width = 1000;
// @ts-ignore
canvas.height = 1000;

const wave = {
  // @ts-ignore
  y: canvas.height / 2,
  length: 0.007,
  amplitude: -66,
  frequency: 0.1
}

const strokeColor = {
  h: 0,
  s: 0,
  l: 50
}

const backgroundColor = {
  r: 0,
  g: 0,
  b: 0,
  a: 1
}

const waveFolder = gui.addFolder('wave')
// @ts-ignore
waveFolder.add(wave, 'y', 0, canvas.height)
waveFolder.add(wave, 'length', -0.01, 0.01)
waveFolder.add(wave, 'amplitude', -300, 300)
waveFolder.add(wave, 'frequency', -0.01, 1)
waveFolder.open()

const strokeFolder = gui.addFolder('stroke')
strokeFolder.add(strokeColor, 'h', 0, 255)
strokeFolder.add(strokeColor, 's', 0, 100)
strokeFolder.add(strokeColor, 'l', 0, 100)
strokeFolder.open()

const backgroundFolder = gui.addFolder('background')
backgroundFolder.add(backgroundColor, 'r', 0, 255)
backgroundFolder.add(backgroundColor, 'g', 0, 255)
backgroundFolder.add(backgroundColor, 'b', 0, 255)
backgroundFolder.add(backgroundColor, 'a', 0, 1)
backgroundFolder.open()

let increment = wave.frequency
function animate() {
  requestAnimationFrame(animate)
  // @ts-ignore
  c.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${
    backgroundColor.b
  }, ${backgroundColor.a})`
  // @ts-ignore
  c.fillRect(0, 0, canvas.width, canvas.height)
// @ts-ignore
  c.beginPath()
  // @ts-ignore
  c.moveTo(0, canvas.height / 2)
// @ts-ignore
  for (let i = 0; i < canvas.width; i++) {
    // @ts-ignore
    c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude)
  }
// @ts-ignore
  c.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))}, ${
    strokeColor.s
  }%, ${strokeColor.l}%)`
  // @ts-ignore
  c.stroke()
  increment += wave.frequency
}

animate()


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title-name">
          <TitleComponent text={'Yasemin Turk'} size={'80px'} id={'name'} tween={{delay: 0.5, duration: 2.0, ease: 'sine.easeInOut'}}/>
          <TitleComponent text={'Sound Designer'} size={'30px'} id={'title'} tween={{delay: 1.0, duration: 2.0, ease: 'sine.easeInOut'}}/>
        </div>
      </header>
    </div>
  );
}

export default App;
