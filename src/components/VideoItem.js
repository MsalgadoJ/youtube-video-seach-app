import './VideoItem.css';
import React from 'react';
import {format} from 'timeago.js'
import Slide from 'react-reveal/Slide';

const VideoItem = ({ video, onVideoSelect }) => {
    
    return (
        <div onClick={() => onVideoSelect(video) } className="video-item" >
            <Slide top cascade>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className="video-item-info">
                <h6>{video.snippet.title}</h6>
                <p className="video-item-title"> {video.snippet.channelTitle} </p>
                <p className="video-item-pub"> {format(video.snippet.publishedAt)} </p>
            </div>
            </Slide>
        </div>
    )
};

export default VideoItem;