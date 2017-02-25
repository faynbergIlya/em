import React, { PropTypes, Component } from 'react'


class VideoItem extends Component{

    handleCLick=(ev)=>{
        ev.preventDefault()
        this.props.onUrlChange(this.props.url, this.props.id, this.props.idVideo)
    }
    render(){
        const {name, url} = this.props

        return(
            <a onClick={this.handleCLick}>

            {name}

        </a>

        )
    }
}
export default VideoItem