import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video'
import VideoList from './VideoList'


class VideoContainer extends Component{
    state={
        url:'',
        key:''
    }



    changeUrl(u, key){
        console.log(this.refs.video)
        this.setState({
            url:u,
            key:key
        })

    }


    render(){
        return (
            <div>
            <Video key={this.state.key} controls autoPlay loop muted>
            <source src={this.state.url} type="video/webm" />
            </Video>
            <VideoList onUrlChange={this.changeUrl.bind(this)}/>
            </div>
        )
    }

}

export default VideoContainer