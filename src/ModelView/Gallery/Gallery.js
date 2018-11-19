'use strict'
import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';
import './image-gallery.css';

/*Per REST si deve fare richiesta a server per ottenere le immagini */
class Gallery extends Component {

  render() {
    const imagesArray = [
      {
        original: 'http://localhost:3000/img/models/model1.jpg',
      },
      {
        original: 'http://localhost:3000/img/models/model2.jpg',
      },
      {
        original: 'http://localhost:3000/img/models/model3.jpg',

      },
      {
        original: 'http://localhost:3000/img/models/model4.jpg',

      },
      {
        original: 'http://localhost:3000/img/models/model5.jpg',
      }
    ]

    return (
      <ImageGallery items={imagesArray} />
    );
  }
}

export default Gallery;
