import React from "react";
import "./Welcome.css";
import { mainTracks } from "../../assets/data/mainTracks";
import { get } from "../../utilities";

const SPOTIFY_CLIENT_ID = "95cd44000f4c4fcc8e52ebe419beaefa";

function generateImages(){
    const min = 0;
    const max = mainTracks.length;
    
}

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
                        <div className="login-button-container">
                            <button onClick={() => {get("/api/login")}} className="btn-76">
                                Login With Spotify
                                <span className="top"></span>
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <span className="left"></span>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="column">
                    <div className="album-grid">
                        <div className="album-cover">
                            <img src={mainTracks[0].image} />
                        </div>
                        <div className="album-cover">
                            <img src={mainTracks[1].image} />
                        </div>
                        <div className="album-cover">
                            <img src={mainTracks[2].image} />
                        </div>
                        <div className="album-cover">
                            <img src={mainTracks[3].image} />
                        </div>
                        <div className="album-cover">
                            <img src={mainTracks[4].image} />
                        </div>
                        <div className="album-cover">
                            <img src={mainTracks[5].image} />
                        </div>
                        <div className="album-cover">
                            <img src={mainTracks[6].image} />
                        </div>
                        <div className="album-cover">
                            <img src={mainTracks[7].image} />
                        </div>
                        <div className="album-cover">
                            <img src={mainTracks[8].image} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
/* <audio controls autoplay>
<source src="/client/src/assets/audios" type="audio/mpeg" />

</audio> */
/* <audio autoplay controls>
<source src={mainTracks[0].audio} type="audio/mpeg"/>
</audio> */
export default Welcome;