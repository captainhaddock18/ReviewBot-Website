import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        
        <Route exact path="/" element={<Home/>} />
        <Route exact path='*' element={<NotFound/>}/>
      </Routes>

      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
    </div>
    </Router>
  );
}

export default App;
