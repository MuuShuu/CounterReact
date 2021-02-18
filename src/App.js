import React, { Component } from 'react';

class App extends Component {
  state = {
    value: 4
  }
  plusClick = (e) => {
    const newValue = this.state.value + 1
    this.setState({
      value: newValue
    })
  }
  minusClick = (e) => {
    const newValue = this.state.value - 1
    this.setState({
      value: newValue
    })
  }
  render() {
    return(
      <div className='Counter'>
        <p>посчитаем</p>
        <button onClick={this.plusClick}>plus</button>
        <span id='number'>{ this.state.value }</span>
        <button onClick={this.minusClick}>minus</button>
      </div>
    )
  }
}

export default App