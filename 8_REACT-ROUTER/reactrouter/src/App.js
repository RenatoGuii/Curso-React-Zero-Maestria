import './App.css';

// 1° Config React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';

// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2° Links com React Router */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4° Rota Dinâmica */}
          <Route path='/products/:id' element={<Product />} />
          <Route path='/products/:id/info' element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
