import React from "react";
import "./Loading.css";
import { GridLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="loading-container">
            <GridLoader color="white" size={50} />

        </div>
    );
};

export default Loading;