import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Button from 'react-bootstrap/Button';
import Gallery from './Gallery.jsx'

function Video() {

    const [showNextButton, setShowNextButton] = React.useState(false)
    const [buttonPressed, setButtonPressed] = React.useState(false)

    return (
        <>
            {
                !buttonPressed &&
                <>
                    <h1>Happy Birthday Bukkake Bonanza Tom!!!!</h1>
                    <p>Watch it all</p>
                    <ReactPlayer
                        url={"./test.MP4"}
                        width="100%"
                        height="100%"

                        controls={true}
                        onEnded={() => setShowNextButton(true)} />

                    {
                        showNextButton &&
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() => setButtonPressed(true)}>Click Here 4 More Bukkake</Button>

                    }
                </>
            }
            {
                buttonPressed && <Gallery />
            }
        </>
    );
}

export default Video;