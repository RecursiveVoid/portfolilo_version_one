import React from "react";

import gsap from 'gsap';

import TitleConfig from "./TitleConfig";


import './TitleComponent.css';

class TitleComponent extends React.Component<TitleConfig> {

  constructor(props: TitleConfig) {
    super(props);
  }

  componentDidMount() {
    this._setFontSize();
    this._setTween();
  }

  _setFontSize() {
    const element = this._getElement();
    if (element) {
      const fontSize = this.props.size || '100px';
      element.style.setProperty('--font-size', fontSize);
    }
  }

  _getElement() {
    const id = this.props.id || 'title-text';
    return  document.getElementById(id);
  }

  _setTween() {
    const tweenConfig = this.props.tween;
    if(tweenConfig) {
      const element = this._getElement();
      const duration = tweenConfig.duration || 0.0;
      const delay = tweenConfig.delay || 0.0;
      const ease = tweenConfig.ease || 'linear.none';
      gsap.fromTo(
        element,
        {opacity: 0},
        {opacity: 1.0, duration , ease, delay}
      );
    }
  }

  render() {
    const id = this.props.id || 'title-text';
    return (
      <div className= 'title-text' id={id}>
        {this.props.text}
      </div>
  );
  }
}

export default TitleComponent;
