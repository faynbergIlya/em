import React, { PropTypes, Component } from 'react'


class VideoItem extends Component{

    handleCLick=(ev)=>{
        ev.preventDefault()
        //this.props.onUrlChange("dasdasdasd")
        this.props.onUrlChange(this.props.url, this.props.id)

    }
    render(){
        const {name, url} = this.props

        return(
            <a href="#" onClick={this.handleCLick}>

            {name}

        </a>

        )
    }
}
export default VideoItem