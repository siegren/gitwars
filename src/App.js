import React, { Component } from 'react';
import './App.css';
import PlayerProfile from './PlayerProfile';
import Judging from './Judging';
import { Button, Row, Col } from 'react-materialize';

class App extends Component {
  // https://api.github.com/users/octocat
  constructor(props){
    super(props);
    this.state = {
      player1: [],
      player2: []
    }
    console.log('constructor');
  }

  // componentWillMount(){
  //   console.log('will mount');
  // }

  // componentDidMount(){
   
  //   console.log('did mount');
  // }

  // componentWillUnmount(){
  //   console.log('will unmount');
  // }

  lookupPlayer(player_num){
    console.log(player_num);

    var uname;

    if(player_num === 1){
      uname = this.player1Input.value;
    }else{
      uname = this.player2Input.value;
    }


     fetch(`https://api.github.com/users/${uname}`)
    .then(function(response){
      return response.json()
    })
    .then((response) => {
      if(player_num === 1){
              this.setState({player1: response})
            }else{
              this.setState({player2: response})
            }

    })
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>GitWars</h1>

        <Judging player1={this.state.player1} player2={this.state.player2}/>
        <Row>
          <Col s={12} m={6}>
      
                <input ref={(input) => {this.player1Input = input; }}/>
                <Button onClick={() => this.lookupPlayer(1)} waves='light'>Lookup</Button>

              <PlayerProfile player_data={this.state.player1}/>

          </Col>

          <Col s={12} m={6}>
      
                <input ref={(input) => {this.player2Input = input; }}/>
                <Button onClick={() => this.lookupPlayer(2)} waves='light'>Lookup</Button>

              <PlayerProfile player_data={this.state.player2}/>

          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
