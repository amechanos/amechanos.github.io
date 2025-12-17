import React from "react";
import "../styles/mediaPlayer.css"; 

export function Media() {
    return (
        <div className="media-player">
            <h3 className="caption">Latest Video</h3>
            <div className="video-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/og95-Yx43I0?si=The6bmjYkl3_Jwlo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}