import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Conatct/Contact';
import Themes from './Components/Themes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Themes />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='About' element={<About />}></Route>
          <Route path='Portfolio' element={<Portfolio />}></Route>
          <Route path='Contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
