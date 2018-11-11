import React, { Component } from 'react';

class CardFront extends Component {
	state = {  }
	render() { 
		return (  
			<div className='card-side side-front'>
				<img border="0" alt="Placeholder" src={this.props.image} width="100%"></img>
				<div className='side-front-content remove_space'>
					<h2 className="remove_space">{this.props.title}</h2>
					<p className="remove_space"><small>{this.props.date}</small></p>
				</div>
			</div>
		);
	}
}
 
export default CardFront;