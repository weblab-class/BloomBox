import React from "react";
import "./DarkBackground.css";


const DarkBackground = () => {
    return (
        <div className="dark-bg">
            <div className="gradient-bg">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <div className="gradients-container">
                <div className="gradient-1"></div>
                <div className="gradient-2"></div>
                <div className="gradient-3"></div>
                <div className="gradient-4"></div>
                <div className="gradient-5"></div>
                <div className="interactive"></div>
                </div>
            </div>
        </div>
   
    );
};

export default DarkBackground;