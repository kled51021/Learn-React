import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponets';
import React from 'react';
class App extends React.Component {
  render() {
    return (
      <div>Hello word
        <MyComponent></MyComponent>
      </div>
    )
  }
}
export default App
/* { <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <div>Count = {count}</div>
    <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
  </header>
</div> } */
