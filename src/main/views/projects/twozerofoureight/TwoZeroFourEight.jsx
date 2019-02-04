import React, { Component } from 'react';
import Typist from 'react-typist';
import Card from '../../../../generic_components//components/Card';

class TwoZeroFourEight extends Component {
	render() { 
		return (  
			<div className="spacing main_container">
				<Card className="g-col-6 center_text">
					<Typist
						className="typist"
						avgTypingSpeed={50}
						startDelay={300}
					>
						<span>2048</span>
					</Typist>
				</Card>
				<br/>
				<Card className="g-col-6 center_text">
					Stuff
				</Card>
			</div>
		);
	}
}
 
export default TwoZeroFourEight;