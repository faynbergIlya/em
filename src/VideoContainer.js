import React, { PropTypes, Component } from 'react'
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video'
import VideoList from './VideoList'

class VideoContainer extends Component{
    state={
        url:''
    }
    render(){
        return (
            <div>
            <Video controls autoPlay loop muted>
            <source src="https://cdn-dev.elasticmedia.io/video/48d0db58-f7a5-46df-a011-130cfac68cf2.mp4" type="video/webm" />
            </Video>
            <VideoList />
            </div>
        )
    }

}

export default VideoContainer