import React from "react";
import "./ScrollingMarquee.css";
import { mainTracks } from "../../../assets/data/mainTracks";
import { country, pop, rap, rock} from "../../../assets/data/setList";

const ALBUMS = mainTracks.concat(country, pop, rap, rock);

const ScrollingMarquee = () => {
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

export default ScrollingMarquee;