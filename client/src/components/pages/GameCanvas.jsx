import React from "react";
import "./GameCanvas.css";
import Lobby from "./Lobby";

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

/*
<div className="avatars">
                            <div className="avatar-container">
                                <div className="avatar-pic">
                                    <img src={mainTracks[9].image} />
                                </div>
                                <div className="avatar-name">Player 1</div>
                                <div className="avatar-sound">
                                    <img src={audioBar} />
                                </div>
                            </div>
                            <div className="avatar-container">
                                <div className="avatar-pic">
                                    <img src={mainTracks[10].image} />
                                </div>
                                <div className="avatar-name">Player 2</div>
                                <div className="avatar-sound">
                                    <img src={audioBar} />
                                </div>
                            </div>
                            <div className="avatar-container">
                                <div className="avatar-pic">
                                    <img src={mainTracks[11].image} />
                                </div>
                                <div className="avatar-name">Player 3</div>
                                <div className="avatar-sound">
                                    <img src={audioBar} />
                                </div>
                            </div>
                            <div className="avatar-container">
                                <div className="avatar-pic">
                                    <img src={mainTracks[12].image} />
                                </div>
                                <div className="avatar-name">Player 4</div>
                                <div className="avatar-sound">
                                    <img src={audioBar} />
                                </div>
                            </div>
                        </div>
*/

export default GameCanvas;