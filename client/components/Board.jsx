import React from 'react';
import Square from './Square.jsx';

// u
import shortid from 'shortid';

class Board extends React.Component {

  render() {

    let boardSize = (this.props.size * 100) + 2;

    let style = {
      width: boardSize,
      height: boardSize
    };

    return (
      <div style={style} className="board">
        <Square />
      </div>
    ) 
  }
}

export default Board;