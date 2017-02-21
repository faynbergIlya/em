import React, { PropTypes, Component } from 'react'
import {clips as videos} from '../data/fixtures'
import VideoItem from './VideoItem'

class VideoList extends Component{

    getFixtures(){
        return videos
    }
    render(){
        const videoElements = videos.map((vid) => <li key={vid.id}>
    <VideoItem
        name={vid.name}
        url={vid.url}
    />
    </li>)
        return(
            <ul>
            {videoElements}
            </ul>
        )
    }
}
export default VideoList