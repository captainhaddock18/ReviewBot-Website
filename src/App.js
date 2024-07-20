import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Floater from './floater';
import Hero from './hero';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Hero/>} />
        <Route exact path='*' element={<NotFound/>}/>
      </Routes>
    <Floater />   
    </div>
    </Router>
  );
}

export default App;
