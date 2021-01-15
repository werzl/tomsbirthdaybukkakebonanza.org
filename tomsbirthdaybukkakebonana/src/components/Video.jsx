import React from 'react';
import Button from 'react-bootstrap/Button';
import Gallery from './Gallery.jsx';
import YouTube from 'react-youtube';

const playerOptions = {
    playerVars: {
        showinfo: 0,
        rel: 0,
        modestbranding: 1,
        showcontrols: 1
    }
};

function Video() {
    const [buttonPressed, setButtonPressed] = React.useState(false);

    return (
        <>
            {
                !buttonPressed &&
                <>
                    <h1>Happy Birthday Bukkake Bonanza Tom!!!!</h1>

                    <p>Watch it all</p>

                    <YouTube
                        containerClassName="playerContainer"
                        className="player"
                        videoId="Q1GLMsDZE8o"
                        opts={playerOptions}
                        onEnd={() => setButtonPressed(true)} />

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