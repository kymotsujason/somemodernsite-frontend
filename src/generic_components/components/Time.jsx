import React, { Component } from 'react';

class Time extends Component {
	state = {  }

	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.TimerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() { 
		return (  
			<div>
				{this.state.date.toLocaleTimeString()}
			</div>
		);
	}
}
 
export default Time;