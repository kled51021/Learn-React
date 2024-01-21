
import { Button } from 'bootstrap';
import './App.scss';
import Header from './components/Header/Header';
import { NavLink, Outlet } from 'react-router-dom';
const App = () => {
  return (
    <div className='App-container'>
      <div className='Header-container'>
        <Header />
      </div>
      <div className='Main-container'>

      </div>
      <div className='sidenav-container'>

      </div>
      <div className='App-content'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
export default App

