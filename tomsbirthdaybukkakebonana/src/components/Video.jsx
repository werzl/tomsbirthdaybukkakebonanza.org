import React, { useRef } from 'react'
import { findDOMNode } from 'react-dom'
import screenfull from 'screenfull'
import ReactPlayer from 'react-player'
import Button from 'react-bootstrap/Button';
import Gallery from './Gallery.jsx'

const playerConfig = {
    youtube: {
        playerVars: {
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1
        }
    }
};

function Video() {
    const [buttonPressed, setButtonPressed] = React.useState(false);

    const player = useRef(null);

    const onClickFullscreen = () => {
        screenfull.request(findDOMNode(player.current));
    }

    return (
        <>
            {
                !buttonPressed &&
                <>
                    <h1>Happy Birthday Bukkake Bonanza Tom!!!!</h1>

                    <p>Watch it all</p>

                    <Button
                        style={{ marginTop: "10px", marginBottom: "25px" }}
                        variant="secondary"
                        size="lg"
                        onClick={() => onClickFullscreen()}>Fullscreen</Button>

                    <ReactPlayer
                        ref={player}
                        url="https://www.youtube.com/embed/Q1GLMsDZE8o"
                        width="100%"
                        height="100%"
                        config={playerConfig}
                        controls={true}
                        onEnded={() => setButtonPressed(true)} />

                    <Button
                        style={{ marginTop: "10px", marginBottom: "25px" }}
                        variant="secondary"
                        size="lg"
                        onClick={() => setButtonPressed(true)}>Click Here 4 More Bukkake</Button>
                </>
            }
            {
                buttonPressed && <Gallery onGalleryClose={() => setButtonPressed(false)} />
            }
        </>
    );
}

export default Video;