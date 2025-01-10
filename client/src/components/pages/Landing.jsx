import React from "react";
import "./Landing.css";
import { mainTracks } from "../../assets/data/mainTracks";

function generateImages(){
    const min = 0;
    const max = mainTracks.length;
    
}

const Landing = () => {
    return (
        <div>
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
    );
};
/* <audio controls autoplay>
<source src="/client/src/assets/audios" type="audio/mpeg" />

</audio> */
export default Landing;