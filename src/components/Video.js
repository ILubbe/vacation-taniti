import React from "react";
import '../App.css';
import './Video.css';
import { Link } from 'react-router-dom';

function Video() {
    return (
        <div className="video-container">
            <video src="videos/beach.mp4" autoPlay loop muted />
            <div className="overlay-content">
                <div className="text">Paradise Awaits</div>
                <Link to='/BookNow'>
                    <button className="cta-button">Take me There!</button>
                </Link>
            </div>
        </div>
    );
}

export default Video;
