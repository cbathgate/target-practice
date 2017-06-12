import React from 'react';

class Buttons extends React.Component {

  render() {
    return (
      <div className="buttons">
        <div className="green" onClick={this.props.play}>Play</div>
        <div className="red" onClick={this.props.stop}>Stop</div>
        <div className="blue" onClick={this.props.reset}>Reset</div>
      </div>
    )
  }
}

export default Buttons;