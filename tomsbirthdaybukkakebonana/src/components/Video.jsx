import React from 'react'
import ReactPlayer from 'react-player'
import Button from 'react-bootstrap/Button';
import Gallery from './Gallery.jsx'

function Video() {

    const [showNextButton, setShowNextButton] = React.useState(false)
    const [buttonPressed, setButtonPressed] = React.useState(true)

    return (
        <>
            {
                !buttonPressed &&
                <>
                    <h1>Happy Birthday Bukkake Bonanza Tom!!!!</h1>
                    <p>Watch it all</p>
                    <ReactPlayer
                        url={"https://youtu.be/Q1GLMsDZE8o?rel=0"}
                        width="100%"
                        height="100%"
                        controls={true}
                        onEnded={() => setShowNextButton(true)} />

                    {
                        showNextButton &&
                        <Button
                            style={{marginTop: "10px"}}
                            variant="secondary"
                            size="lg"
                            onClick={() => setButtonPressed(true)}>Click Here 4 More Bukkake</Button>

                    }
                </>
            }
            {
                buttonPressed && <Gallery onGalleryClose={() => setButtonPressed(false)} />
            }
        </>
    );
}

export default Video;