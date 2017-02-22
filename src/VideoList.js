import React, { PropTypes, Component } from 'react'
import {clips as videos} from '../data/fixtures'
import VideoItem from './VideoItem'


class VideoList extends Component{

    componentDidMount(){
        this.props.onUrlChange(videos[0].url,videos[0].id)
    }
    render(){

        const videoElements = videos.map((vid) => <li key={vid.id}>
    <VideoItem onUrlChange={this.props.onUrlChange}
        name={vid.name}
        url={vid.url}
        id={vid.id}
    />
    </li>)
        return(
            <div className="controls_container">

            <ul>
            {videoElements}
            </ul>
            </div>


        )
    }
}
export default VideoList