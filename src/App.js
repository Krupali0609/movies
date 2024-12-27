import logo from './logo.svg';
import './App.css';
import Moviecards from './components/Moviecards';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom"
import Fav from './pages/Fav';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
    <main className="maincontent">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Fav" element={<Fav/>}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
