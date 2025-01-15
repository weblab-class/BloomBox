import React from "react";
import "./GameCanvas.css";
import Lobby from "../Lobby/Lobby";
import MainMenu from "../MainMenu/MainMenu";

const GameCanvas = () => {
    return (
        <div>
            <div className="main-game-container">
                <div className="game-canvas-container">
                    <div className="game-canvas">
                        <Lobby />
                        {/* <MainMenu/> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCanvas;