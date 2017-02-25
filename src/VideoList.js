import React, { PropTypes, Component } from 'react'
import VideoItem from './VideoItem'
import {VIDEO_ITEM_NAME} from '../Constants'
import NextVideo from './NextVideo'
import PlayPauseExtButton from './PlayPauseExtButton'

class VideoList extends Component{

    componentDidMount(){
        this.props.onUrlChange(this.props.videos[0].url,this.props.videos[0].id, 0)
    }
    render(){
        const videoElements = this.props.videos.map((vid, index) => <li key={vid.id} id={VIDEO_ITEM_NAME+index}>
    <VideoItem onUrlChange={this.props.onUrlChange}
        name={vid.name}
        url={vid.url}
        id={vid.id}
        idVideo={index}
    />
    </li>)
        return(
            <div className="controls_container">

            <ul>


            <li>

            <NextVideo
            onUrlChange={this.props.onUrlChange}
            videoList={this.props.videos}
            currentVideoId={this.props.currentVideoId}/>
            </li>
            <li><a>Navigation</a>
            <ul className='sub-menu'>
        {videoElements}
            </ul>
        </li>
            <li><PlayPauseExtButton elem={this.props.elem} togglePlay={this.props.togglePlay}/></li>
        </ul>
        </div>


        )
    }
}
export default VideoList