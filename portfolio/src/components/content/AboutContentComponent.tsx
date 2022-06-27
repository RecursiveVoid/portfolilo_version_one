import React from "react";

import AboutContentConfig from './AboutContentConfig';

import './AboutContentComponent.css';

class AboutContentComponent extends React.Component<AboutContentConfig> {

  constructor(props: AboutContentConfig) {
    super(props);
  }

  componentDidMount() {
    // tweening will come later
  }

  render() {
    const title = this.props.title || '';
    const description = this.props.description || '';
    const id = this.props.id || 'about-content';
    if(this.props.img) {
      return(
          <div className='about-content' id = {id}>
            <div className='about-content-title' id = {id+'-title'}>
              {title}
            </div>
            <img className='about-content-img'  id = {id+'-image'} src={this.props.img} />
            <div className='about-content-description' id = {id+'-description'}>
              {description}
            </div>
          </div>
      );
    } else {
      return(
          <div className='about-content'>
            <div className='about-content-title'>
              {title}
            </div>
            <div className='about-content-desctiption'>
              {description}
            </div>
          </div>
      );
    }
  }
}

export default AboutContentComponent;