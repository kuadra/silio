import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';
import './image-gallery.css';

class Gallery extends Component {

  render() {
    //placeholder
    const imagesArray = [''];

    return (
      <ImageGallery items={imagesArray} />
    );
  }
}

export default Gallery;
