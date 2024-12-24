import './App.css';
import Project from './components/Project';
import Home from './components/Home';
import Contactme from './components/Contactme';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/projects" className='nav-item'>Projects</Link>
        <Link to="/Contact" className='nav-item'>Contact me</Link>
      </div>
      <div className='main'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Project />}></Route>
        <Route path='/Contact' element={<Contactme />}></Route>
      </Routes>
      </div>
      <div className='footer'>
        <a href='https://github.com/neha0193' target='_blank'className='nav-items'>github</a>
        <a href='https://x.com/JuneExplorer' target='_blank'className='nav-items'>twitter</a>
        <a href='https://www.reddit.com/user/Mundane-Mine2399/' target='_blank'className='nav-items'>reddit</a>
        <a href='mailto:neha031919@gmail.com' target='_blank'className='nav-items'>mail me</a>
      </div>

    </div>
  );
}

export default App;
// make a nav bar and footer bar that gives links to my social
// set a simple background or dark color
// make it simple and do it

