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
                <div className="column">
                    <img className="track" src="" />
                    <img className="track" src="" />
                    <img className="track" src="" />
                </div>
                <div className="column">
                    <img className="track" src="" />
                    <img className="track" src="" />
                    <img className="track" src="" />
                </div>
                <div className="column">
                    <img className="track" src="" />
                    <img className="track" src="" />
                    <img className="track" src="" />  
                </div>
            </div>
        </div>
    );
};
/* <audio controls autoplay>
<source src="/client/src/assets/audios" type="audio/mpeg" />

</audio> */
export default Landing;