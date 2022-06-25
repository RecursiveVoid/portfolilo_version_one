import React from "react";

import gsap from 'gsap';

import ScrollDownConfig from "./ScrollDownConfig";

import './ScrollDownComponent.css';

class ScrollDownComponent extends React.Component<ScrollDownConfig> {
  constructor(props: ScrollDownConfig) {
    super(props);
  }

  componentDidMount() {
    this._setImageTween();
    this._setTextTween();
  }

  _getTextElement() {
    const id = this.props.id + '-text' || 'title-text';
    return  document.getElementById(id);
  }

  _setImageMargin(val: number) {
    const element = this._getImageElement();
    if (element) {
      element.style.setProperty('--font-size', val+'px');
    }
  }


  _getImageElement() {
    const id = this.props.id + '-image' || 'title-text';
    return  document.getElementById(id);
  }

  _setImageTween() {
    const tweenConfig = this.props.imageTweenConfig;
    if(tweenConfig) {
      const element = this._getImageElement();
      const duration = tweenConfig.duration || 0.0;
      const delay = tweenConfig.delay || 0.0;
      const ease = tweenConfig.ease || 'linear.none';
      gsap.fromTo(
        element,
        {opacity: 0},
        {opacity: 1.0, duration: duration * 0.5 , ease, delay: delay * 0.5}
      );
      gsap.fromTo(
          element,
          {marginRight: -100},
          {marginRight: 0, duration , ease, delay},
      );
    }
  }

    _setTextTween() {
      const tweenConfig = this.props.textTweenConfig;
      if(tweenConfig) {
        const element = this._getTextElement();
        const duration = tweenConfig.duration || 0.0;
        const delay = tweenConfig.delay || 0.0;
        const ease = tweenConfig.ease || 'linear.none';
        const tween = gsap.fromTo(
          element,
          {opacity: 0},
            {opacity: 1.0, duration , ease, delay}
        );
        // TODO this is funny to implement but i will create timeout intervals in future
        tween.repeat(9999);
      }
    }

  render() {
    const id = this.props.id || 'scroll-down';
    const image = this.props.img || '';
    return (
      <div className={'scroll-down'} id = {id}>
        <img className={'scroll-down-image'}  id = {id+'-image'} src={image} />
        <p className={'scroll-down-text'}  id = {id+'-text'}>
          {this.props.text}
        </p>
      </div>
    );
  }
}

export default ScrollDownComponent;