import React from "react";
import "./SongCarousel.css";


const SongCarousel = ({ songs, icon, title, setSong }) => {
    const displaySongs = songs.map((song, index) => 
        <div className="carousel-card">
            <img src={song.image} key={index} onClick={() => handleImageClick(index)}/>
        </div>
    );

    const handleImageClick = (index) => {
        setSong(songs[index]);
    }

    return (
        <div className="carousel-container">
            <div className="carousel-header-card">
                <img src={icon} />
                <h2>{title}</h2>
            </div>
            <div className="carousel-card-grid">
                {displaySongs}
            </div>
        </div>
    );
};

export default SongCarousel;