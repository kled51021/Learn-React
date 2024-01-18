
import { Button } from 'bootstrap';
import './App.scss';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';
const App = () => {
  return (
    <div className='App-container'>
      <Header />
      <div>
        Test Link
      </div>
      <div>
        <button>
          <Link to="/users">go to User </Link>
        </button>
        <button>
          <Link to="/admins">go to Admin </Link>
        </button>
      </div>
    </div>
  )
}
export default App

