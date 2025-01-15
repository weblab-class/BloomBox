import React from "react";
import "./GameCanvas.css";
import Room from "../Room/Room";
import MainMenu from "../MainMenu/MainMenu";
import { Outlet } from "react-router-dom";

const GameCanvas = () => {
    return (
        <div>
            <div className="main-game-container">
                <div className="game-canvas-container">
                    <div className="game-canvas">
                        <Outlet/>
                        {/* <Room /> */}
                        {/* <MainMenu/> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCanvas;