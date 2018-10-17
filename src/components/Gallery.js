import React, { Component } from 'react';

import '../css/Gallery.css'

const images = [
  { img: require("../images/gallery/galleryGT (1).jpg") },
  { img: require("../images/gallery/galleryGT (2).jpg") },
  { img: require("../images/gallery/galleryGT (3).jpg") },
  { img: require("../images/gallery/galleryGT (4).jpg") },
  { img: require("../images/gallery/galleryGT (5).jpg") },
  { img: require("../images/gallery/galleryGT (6).jpg") },
  { img: require("../images/gallery/galleryGT (7).jpg") },
  { img: require("../images/gallery/galleryGT (8).jpg") },
  { img: require("../images/gallery/galleryGT (9).jpg") },
  { img: require("../images/gallery/galleryGT (10).jpg") },
  { img: require("../images/gallery/galleryGT (11).jpg") },
  { img: require("../images/gallery/galleryGT (12).jpg") },
  { img: require("../images/gallery/galleryGT (13).jpg") },
  { img: require("../images/gallery/galleryGT (14).jpg") },
  { img: require("../images/gallery/galleryGT (15).jpg") },
  { img: require("../images/gallery/galleryGT (16).jpg") },
  { img: require("../images/gallery/galleryGT (17).jpg") },
  { img: require("../images/gallery/galleryGT (18).jpg") },
  { img: require("../images/gallery/galleryGT (19).jpg") },
  { img: require("../images/gallery/galleryGT (20).jpg") },
]

class Gallery extends Component {

  constructor() {
    super();
    this.state = {
      displayModal: false,
      image: ""
    }
  }

  selectImage = (url) => {
    this.setState({
      displayModal: true,
      image: url
    })
    document.getElementById('lightbox-id').style.display = 'block';
  }

  deselectImage = () => {
    this.setState({
      displayModal: false,
      image: ""
    })
    document.getElementById('lightbox-id').style.display = 'none';
  }

  singleImage = (url, info, i) => {
    return (
      <div className="gallery-image-container" key={i}>
        
        <img src={url} alt={`${info}`} onClick={() => this.selectImage(url)}/>
      </div>
    )
  }

  render() {
    return (
      <div className="gallery-container">
        <div className="lightbox" id="lightbox-id" onClick={() => this.deselectImage()}>
          <span className="close-button">&times;</span>
          <img src={this.state.image} alt="Pic of Good Therapy"/>
        </div>
        <div className="gallery">
          <h2>Gallery</h2>
          {
            images.map((member, index) => {
              return this.singleImage(member.img, "Pic of Good Therapy", index);
            })
          }
        </div>
      </div>
    )
  }
}

export default Gallery;