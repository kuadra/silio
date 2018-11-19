import React, { Component } from 'react'
import Gallery from './Gallery/Gallery.js';

class ModelView extends Component {
  constructor(props) {

    super(props);
    this.state = {
      images: [
        {image: ''}
      ]
    }
  }

  render() {


    return(
        <Gallery images={this.state.images}/>
    );
  }
}

export default ModelView;
