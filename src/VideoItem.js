import React, { PropTypes, Component } from 'react'


class VideoItem extends Component{

    render(){
        const {name, url} = this.props
        console.log(url)
        return(
            <div>
            {name} {url}
            </div>

        )
    }
}
export default VideoItem