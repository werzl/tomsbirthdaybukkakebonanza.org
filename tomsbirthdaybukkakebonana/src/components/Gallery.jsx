import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Gallery() {

    return (
        <>
            <h1>Money Shots!!!</h1>
            <AwesomeSlider>
                <div data-src="test.png" />
            </AwesomeSlider>

        </>
    );
}

export default Gallery;