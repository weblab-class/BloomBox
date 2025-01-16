import React from "react";
import "./Loading.css";
import { GridLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="loading-container">
            <GridLoader color="white" size={50} />
            <h1>LOADING . . .</h1>
        </div>
    );
};

export default Loading;