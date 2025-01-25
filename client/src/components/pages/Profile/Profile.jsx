import React, { useEffect, useState } from "react";
import "./Profile.css";
import MainButton from "../MainButton/MainButton";
import { get, post } from "../../../utilities";
import { useNavigate } from "react-router-dom";
import { ALBUMS } from "../../../assets/data/albums";

const Profile = () => {
    const [myUser, setMyUser] = useState(null);
    const [songIndex, setSongIndex] = useState(null);
    const navigate = useNavigate();

    const loadUser = async () => {
        await get("/api/users/current")
        .then((response) => {
            setMyUser(response.user);
            setSongIndex(response.user.songIndex);
        }).catch(error => console.log("Error getting user data", error));
    };

    useEffect(() => {
       loadUser();
    }, []);


    const handleImageClick = (index) => {
        setSongIndex(index);
    };

    const displayImages = ALBUMS.map((track, index) => 
        <div key={index} className="profile-image-square">
            <img src={track.image} onClick={() => handleImageClick(index)}/>
        </div>
    );

    const updateUser = async (newFields) => {
        await post("/api/users/current/update", {newFields: newFields})
            .then(response => setMyUser(response.user))
            .catch(error => console.log("Error updating user data", error));
    };


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
                <MainButton text="exit to main menu" onClickAction={() => { navigate('/game', { state: { myUser } });}} />
                <MainButton text="logout" />
            </div>
        </div>
    );
};


export default Profile;