import React, {useRef, useEffect} from 'react';

import './App.css';
import TitleComponent from "./components/title/TitleComponent";
import {SineWave} from "./components/view/SineWave";
import ScrollDownComponent from "./components/scroll/ScrollDownComponent";

import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import scrollDownImage from './arrow-down.png';

gsap.registerPlugin(ScrollTrigger);

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

const sineWave = new SineWave({
  y: 700,
  length: 0.01,
  amplitude: 66,
  frequency: 0.3,
  strokeColorConfig: strokeColor,
  canvasBackgroundColorConfig: backgroundColor,
});

function animate() {
  sineWave.updateWave();
  requestAnimationFrame(animate)
}

animate()

function App() {
  const nameTitleRef = useRef(null);
  useEffect(() => {
    const nameTitle = nameTitleRef.current;
    gsap.to(nameTitle, {
      scrollTrigger: {
        trigger: nameTitle,
        start: 0,
        end: 300,
        scrub: true,
      },
      top: -100,
      right: -50,
      scale: 0.5,
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title" ref={nameTitleRef}>
          <div className="Title-name">
            <TitleComponent text={'Yasemin Turk'} size={'80px'} id={'name'} tween={{delay: 0.5, duration: 2.0, ease: 'sine.easeInOut'}}/>
          </div>
          <div className="Title-description">
            <TitleComponent text={'Sound Designer'} size={'30px'} id={'title'} tween={{delay: 1.0, duration: 2.0, ease: 'sine.easeInOut'}}/>
          </div>
        </div>
        <ScrollDownComponent text={'Scroll Down'}
                             id={'scroll-down'}
                             img={scrollDownImage}
                             textTweenConfig={{delay: 3.0, duration: 2.0, ease: 'sine.easeInOut'}}
                             imageTweenConfig={{delay: 2.0, duration: 2.0, ease: 'sine.easeInOut'}}
        />
      </header>
    </div>
  );
}

export default App;
