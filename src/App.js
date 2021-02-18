import React, { Component } from 'react';

class App extends Component {
  plusClick(e){
    const number = Number(document.getElementById('number').innerHTML)
    const newNumber = number + 1;
    document.getElementById('number').innerHTML = newNumber;
  }

  minusClick(e){
    const number = Number(document.getElementById('number').innerHTML)
    const newNumber = number - 1;
    document.getElementById('number').innerHTML = newNumber;
  }

  render() {
    return(
      <div className='Counter'>
        <p>посчитаем</p>
        <button onClick={this.plusClick}>plus</button>
        <span id='number'>4</span>
        <button onClick={this.minusClick}>minus</button>
      </div>
    )
  }
}

export default App