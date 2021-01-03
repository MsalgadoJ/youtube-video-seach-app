import './VideoDetail.css'
import React from 'react';
import Fade from 'react-reveal/Fade';

const VideoDetail = ({ video }) => {
    if(!video){
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="video-detail">
            <Fade top>
                <div className="embed">
                    <iframe title="VideoPlayer" src={videoSrc} ></iframe>
                </div>
                <div className="video-detail-info">
                    <h4> {video.snippet.title} </h4>
                    <p className="channel-title">
                        {video.snippet.channelTitle} <i className="fas fa-check-circle"></i> 
                    </p>
                    <p className="channel-description"> {video.snippet.description} </p>
                </div>
            </Fade>
        </div>
    );
};

export default VideoDetail;