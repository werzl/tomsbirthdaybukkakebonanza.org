import React from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css';
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img4 from "../images/img4.jpg";



function Gallery({onGalleryClose}) {
    const photos = [
        {
            photo: img1,
            thumbnail: img1
        }, 
        {
            photo: img2,
            thumbnail: img2
        },
        {
            photo: img4,
            thumbnail: img4
        }
    ];

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