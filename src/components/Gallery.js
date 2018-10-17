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

  singleImage = (url, info, i) => {
    return (
      <div className="galleryImage-container" key={i}>
        <img src={url} alt={`${info}`} />
      </div>
    )
  }

  render() {
    return (
      <div className="gallery-container">
        <h2>Gallery</h2>
        {
          images.map((member, index) => {
            return this.singleImage(member.img, "Pic of Good Therapy", index);
          })
        }
      </div>
    )
  }
}

export default Gallery;