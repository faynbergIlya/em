import React, { PropTypes, Component } from 'react'
class PlayPauseExtButton extends Component{
    state={
        play:true
    }
    handleClick=(ev)=>{
        ev.preventDefault()
        this.setState({
            play:!this.state.play
        })
        this.props.togglePlay()
    }
    render(){
        const res = (!this.state.play) ? 'Play' : 'Pause'
        return(
            <div><input type='button' onClick={this.handleClick} value={res}/></div>
        )
    }
}
export default PlayPauseExtButton