import React, {Component} from 'react';

class Judging extends Component{



	render(){
		var isPlayer1Ready = !!Object.keys(this.props.player1).length;
		var isPlayer2Ready = !!Object.keys(this.props.player2).length;
		var playersReady = isPlayer1Ready && isPlayer2Ready;

		var result;
		if(this.props.player1.followers > this.props.player2.followers){
			result= 'Player 1';
		}else if(this.props.player1.followers < this.props.player2.followers){
			result = 'Player 2';
		}else{
			result = "It's a Draw!";
		}


		return(

				<p>{playersReady ? result : null}</p>
		);
	}
}

export default Judging;
