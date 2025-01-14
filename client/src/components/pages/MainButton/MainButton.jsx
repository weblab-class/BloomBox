import React from "react";
import "./MainButton.css";


const MainButton = ({ text , onClickAction }) => {
    return (
        <div onClick={onClickAction} className="button-container">
            <button className="btn-76">
                {text}
                <span className="top"></span>
                <span className="right"></span>
                <span className="bottom"></span>
                <span className="left"></span>
            </button>
        </div>
    );
};

// border: 1px solid #d4d4d4;
export default MainButton;