import React from 'react';
import Board from './Board.jsx';
import Buttons from './Buttons.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: 5,
      checkerLocation: null,
      checkerMessage: 'Click a square!',
      target: null
    }
  };

  play = () => {
    console.log('Play!');
  };

  stop = () => {
    console.log('Stop!');
  };

  reset = () => {
    console.log('Reset!')
  };

  render() {
    return (
      <div>
        <h1 className="title">Target Practice</h1>
        <h1>{this.state.checkerMessage}</h1>
        <Board size={this.state.size} 
               checkerLocation={this.state.checkerLocation}/>
        <Buttons play={this.play} 
                 stop={this.stop} 
                 reset={this.reset}/>
      </div>
    )
  }
}

export default App;