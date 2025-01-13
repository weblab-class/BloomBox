import React from "react";
import "./AlbumGrid.css";
import { mainTracks } from "../../assets/data/mainTracks";

const NUM_TRACKS = 9;

const AlbumGrid = () => {
    const chooseTracks = () => {
        const tracks = [];
        let counter = 0;

        while (counter < NUM_TRACKS){
            const track = mainTracks[Math.floor(Math.random() * mainTracks.length)];
            if (!tracks.some(element => element.song === track.song)) {
                tracks.push(track);
                counter++;
            }
        }
        return tracks;
    }

    const displayTracks = chooseTracks().map(track =>
        <div className="album-cover">
            <img src={track.image}/>
        </div>
    );
    // const playAudio = (track) => {

    // }; 

    return (
        <div className="album-grid">
            {displayTracks}
        </div>
    );
};

{/* <audio autoplay id="audio-1">
    <source src={mainTracks[0].audio} type="audio/mpeg"/>
</audio> */}

export default AlbumGrid;