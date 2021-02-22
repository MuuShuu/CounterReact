import React, { Component } from 'react';
import PlusMinus from './PlusMinus'

class App extends Component {
  render() {
    return(
      <div className='Counter'>
        <p>посчитаем</p>
        <PlusMinus />
      </div>
    )
  }
}

export default App