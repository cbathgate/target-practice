import React from 'react';

class Square extends React.Component {

  handleChange = () => {
    console.log('I was clicked!');
  }

  render() {
    return (
      <div className="square" onClick={this.handleChange} >
        <img src="../../assets/arrow.svg" width="60" />
      </div>
    )
  }
}

export default Square;