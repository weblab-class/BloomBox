import React from "react";
import "./Welcome.css";
import { get } from "../../utilities";
import AlbumGrid from "./AlbumGrid";
import MainButton from "./MainButton";

const Welcome = () => {
    return (
        <div>
            <div className="main-content">
                <div className="column">
                    <div className="written-content">
                        <div className="tagline">
                            <h1>Branch Out of Your Comfort Zone</h1>
                        </div>
                        <div className="description">
                            BloomBox is the ultimate online multiplayer karaoke game where you can sing your heart out with friends and fellow music lovers. 
                            Whether you are a seasoned performer or just want to have fun, BloomBox brings everyone together and out of their comfort zone.
                        </div>
                        <MainButton text="Login With Spotify" onClickAction={() => {get("api/login")}}/>
                    </div>
                </div>
                <div className="column">
                    <AlbumGrid />
                </div>
            </div>
        </div>
    );
};

export default Welcome;