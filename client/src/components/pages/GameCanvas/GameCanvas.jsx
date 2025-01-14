import React from "react";
import "./GameCanvas.css";
import Lobby from "../Lobby/Lobby";

const GameCanvas = () => {
    return (
        <div>
            <div className="main-game-container">
                <div className="game-canvas-container">
                    <div className="game-canvas">
                        <Lobby/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCanvas;