import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect, term }) => {

    const renderedList = videos.map(video => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    });

    return (
        <div className="video-list">
            <h4>Results for: <span style={{fontStyle: 'italic', textDecoration: 'underline', fontWeight:'normal'}}>{term}</span></h4>
            {renderedList}
        </div>
    )
}

export default VideoList;