import React, { PropTypes, Component } from 'react'
class NextVideo extends Component{
    handleClick=(ev)=>{
        ev.preventDefault()

        if(this.props.currentVideoId==this.props.videoList.length-1){
            this.props.onUrlChange(this.props.videoList[0].url,this.props.videoList[0].id, 0)
        }else{
            this.props.onUrlChange(this.props.videoList[this.props.currentVideoId+1].url,this.props.videoList[this.props.currentVideoId+1].id, this.props.currentVideoId+1)
        }

    }
    render(){
        return(
            <a onClick={this.handleClick}>Next</a>
        )
    }
}
export default NextVideo