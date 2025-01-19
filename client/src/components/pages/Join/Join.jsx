import React, { useState } from "react";
import "./Join.css";
import { useNavigate } from "react-router-dom";

const Join = () => {
    const navigate = useNavigate();
    const [roomCode, setRoomCode] = useState("");
    const handleClick = (value) => {
        if (value === "Clear") {
            setRoomCode("");
        } else if (value === "Enter") {
            if (roomCode.length === 6) {
                navigate(`../room/${roomCode}`, { relative: 'path' });
            }
        } else if (roomCode.length < 6) {
            setRoomCode((prevRoomCode) => prevRoomCode + value);
        }
    };

    return (
        <div className="pinpad-container">
            <div className="pinpad-row">
                <div className="pinpad-display">
                    <h4 className="pinpad-code">{roomCode}</h4>
                </div>
            </div>
            <div className="pinpad-row">
                <div className="pinpad-button" onClick={() => {handleClick("1")}}>1</div>
                <div className="pinpad-button" onClick={() => {handleClick("2")}}>2</div>
                <div className="pinpad-button" onClick={() => {handleClick("3")}}>3</div>
            </div>
            <div className="pinpad-row">
                <div className="pinpad-button" onClick={() => {handleClick("4")}}>4</div>
                <div className="pinpad-button" onClick={() => {handleClick("5")}}>5</div>
                <div className="pinpad-button" onClick={() => {handleClick("6")}}>6</div>
            </div>
            <div className="pinpad-row">
                <div className="pinpad-button" onClick={() => {handleClick("7")}}>7</div>
                <div className="pinpad-button" onClick={() => {handleClick("8")}}>8</div>
                <div className="pinpad-button" onClick={() => {handleClick("9")}}>9</div>
            </div>
            <div className="pinpad-row">
                <div className="pinpad-button" onClick={() => {handleClick("Clear")}}>Clear</div>
                <div className="pinpad-button" onClick={() => {handleClick("0")}}>0</div>
                <div className="pinpad-button" onClick={() => {handleClick("Enter")}}>Enter</div>            </div>
        </div>
    );
};

export default Join;