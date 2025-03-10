import React from "react";
import "./Marquee.css";
import { ALBUMS } from "../../../assets/data/albums";

const Marquee = () => {
    // FISHER-YATES ALG: https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    const displayTracks = shuffle(ALBUMS).map((track, index) =>
        <img key={index} className="marquee-item" src={track.image} />
    );

    return (
        <div className="marquee">
            {displayTracks}
        </div>
    );
};

export default Marquee;