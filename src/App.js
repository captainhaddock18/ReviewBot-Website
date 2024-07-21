import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Component from './Carousel';
import Floater from './floater';
import Hero from './hero';
import NotFound from './NotFound';
import Progress from './progress';
import Teampage from './teampage';
 
function App() {
  return (
    <Router>
    <div>
    <Header/>
    <Component/>
    
    
      <Routes>
        <Route exact path="/" element={<Hero/>} />
        <Route exact path='*' element={<NotFound/>}/>
      </Routes>
      <Teampage />
      <Progress />
    <Floater />   
    </div>
    </Router>
  );
}

export default App;
