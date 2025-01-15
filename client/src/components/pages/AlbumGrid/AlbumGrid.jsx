import React from "react";
import "./AlbumGrid.css";
import { mainTracks } from "../../../assets/data/mainTracks";

const NUM_TRACKS = 9;
// Weird Auto Reload Glitch: Image & Audio not matching

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

    const handleMouseOver = (event) => {
        const audio = event.target.parentElement.getElementsByTagName("audio")[0];
        audio.play();
    };

    const handleMouseLeave = (event) => {
        const audio = event.target.parentElement.getElementsByTagName("audio")[0];
        audio.pause();
    }

    const displayTracks = chooseTracks().map((track, index) =>
        <div key={index} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className="album-cover">
            <img src={track.image}/>
            <audio autoPlay>
                <source src={track.audio} type="audio/mpeg"/>
            </audio>
        </div>
    );

    return (
        <div className="album-grid">
            {displayTracks}
        </div>
    );
};

export default AlbumGrid;