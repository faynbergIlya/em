import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
//import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video'
import VideoList from './VideoList'

import {clips as videos} from '../data/fixtures'

const videoRef = 'videoPlayer'
class VideoContainer extends Component{
    state={
        url:'',
        key:'',
        play:true,
        currentVideoId:0
    }

    changeUrl(u, key, id){
        this.setState({
            url:u,
            key:key,
            currentVideoId:id,
            play:false
        })

    }
    getPlay=()=>{
        this.setState({
            play:!this.state.play
        })
    }
    playPauseVideo=()=>{
        !this.state.play?this.refs.videoPlayer.play():this.refs.videoPlayer.pause()
    }

    render(){
        return (

            <div>
            <video autoPlay ref='videoPlayer' key={this.state.key} controls muted onPlay={this.getPlay} onPause={this.getPlay}>
            <source src={this.state.url} type="video/webm" />
            //autoPlay loop
            </video>
            <VideoList
        onUrlChange={this.changeUrl.bind(this)}
        videos={videos} currentVideoId={this.state.currentVideoId}
        elem={this.state.play}
        togglePlay={this.playPauseVideo.bind(this)}/>
            </div>
        )
    }

}

export default VideoContainer