import React from "react";
import "./Avatar.css";
import { mainTracks } from "../../assets/data/mainTracks";
import soundIndicator from "../../assets/images/white-audio.svg";

const Avatar = () => {
    return (
        <div className="avatar-container">
            <div className="avatar-pic">
                <img src={mainTracks[0].image} />
            </div>
            <div className="avatar-name">Player Name</div>
            <div className="avatar-speak-indicator">
                <img src={soundIndicator} />
            </div>
        </div>
    );
};

// .avatars {
//     /* outline: 1px solid red; */
//     width: 70%;
//     height: 50%;
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     grid-gap: 1em;
//     justify-content: center;
//     padding: 15px;
// }

// .avatar-container {
//     /* outline: 1px solid yellow; */
//     background-color: transparent;
//     backdrop-filter: blur(10px) brightness(125%);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding-top: 10px;
//     border-radius: 8px;
//     border: 1px solid #d4d4d4;
//     box-sizing: border-box;

// }

// .avatar-pic {
//     /* outline: 1px solid green; */
//     display: grid;
//     place-items: center;
//     margin-bottom: 20px;
// }

// .avatar-pic img {
//     /* height: 100%; */
//     width: 75%;
//     object-fit: cover;
//     display: block;
//     box-sizing: border-box;
//     border-radius: 8px;
//     border: 1px solid #d4d4d4;
//     box-sizing: border-box;
// }
// .avatar-name {
//     margin-bottom: 20px;
//     font-weight: 400;
// }

// .avatar-sound {
//     /* outline: 1px solid purple; */
//     display: grid;
//     place-items: center;
// }
// .avatar-sound img {
//     width: 50%;
//     object-fit: cover;
//     display: block;
// }
export default Avatar;