import React from 'react'
import ReactBnbGallery from 'react-bnb-gallery'
import 'react-bnb-gallery/dist/style.css'

import images from "../images";

const photos = images.map(imageUrl => {
  return {
    photo: imageUrl,
    thumbnail: imageUrl
  };
});

function Gallery({onGalleryClose}) {
    return (
        <>
            <h1>Money Shots!!!</h1>
            <ReactBnbGallery
                show={true}
                photos={photos} 
                onClose={onGalleryClose}/>
        </>
    );
}

export default Gallery;