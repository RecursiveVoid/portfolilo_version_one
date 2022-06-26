import React from "react";

import CategoryButtonConfig from './CategoryButtonConfig';

import './CategoryButtonComponent.css';

class CategoryButtonComponent extends React.Component<CategoryButtonConfig> {
  constructor(props: CategoryButtonConfig) {
    super(props);
  }

  componentDidMount() {
    //
  }

  render() {
      const id = this.props.id || 'category-button';
      if(this.props.img) {
        return (
            <div className='category-text-div'>
              {this.props.text}
              <img className='category-img' id = {id} src = {this.props.img}/>
            </div>
        );
      } else {
        return (
            <div className='category-text-div'>
              {this.props.text}
              <button className='category-button' id = {id}></button>
            </div>
        );
      }

  }
}

export default CategoryButtonComponent;