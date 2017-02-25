import React, { PropTypes, Component } from 'react'
class PlayPauseExtButton extends Component{
    state={
        play:false
    }
    handleClick=(ev)=>{
        ev.preventDefault()
        this.setState({
            play:!this.state.play
        })
        this.props.togglePlay()
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            play:nextProps.elem
        })
    }
    render(){
        const res = (!this.state.play) ? 'Play' : 'Pause'
        return(
            <div><a type='button' onClick={this.handleClick}>{res}</a></div>
        )
    }
}
export default PlayPauseExtButton