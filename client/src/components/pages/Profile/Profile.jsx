import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import MainButton from "../MainButton/MainButton";
import { useNavigate } from "react-router-dom";
import { ALBUMS } from "../../../assets/data/albums";
import { UserContext } from "../../../context/UserContext";

const Profile = () => {
    const { myUser, loadUser, updateUser } = useContext(UserContext);
    const [songIndex, setSongIndex] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
       loadUser();
    }, []);

    useEffect(() => {
        setSongIndex(myUser?.songIndex);
    }, [myUser]);

    const handleImageClick = (index) => {
        setSongIndex(index);
    };

    const displayImages = ALBUMS.map((track, index) => 
        <div key={index} className="profile-image-square">
            <img src={track.image} onClick={() => handleImageClick(index)}/>
        </div>
    );

    return (
        <div className="profile-container">
            <div className="profile-display">
                <img src={(songIndex ? ALBUMS[songIndex] : ALBUMS[0]).image}/>
                <div className="profile-display-name">
                    <span className="profile-display-name-1">Display Name</span>
                    <span className="profile-display-name-2">{myUser?.displayName || "loading"}</span>
                </div>
                <MainButton text="Save" onClickAction={() => {updateUser({songIndex: songIndex});}}/>
            </div>
            <div className="profile-image-container">
                {displayImages}
            </div>
            <div className="profile-button-container">
                <MainButton text="exit to main menu" onClickAction={() => { navigate('/game');}} />
                <MainButton text="logout" />
            </div>
        </div>
    );
};


export default Profile;