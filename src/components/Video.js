import React from "react";
import '../App.css';
import './Video.css';

function Video() {
    return (
        <div className="video-container">
            <video src="videos/beach.mp4" autoPlay loop muted/>
            <h1>Welcome to Taniti</h1>
        </div>
    )
}

export default Video;