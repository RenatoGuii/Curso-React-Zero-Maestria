import './App.css';

// 1° Config React Router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

// Components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="app">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2° Links com React Router */}
        <Navbar />
        {/* 9° Search Params */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4° Rota Dinâmica */}
          <Route path='/products/:id' element={<Product />} />
          <Route path='/products/:id/info' element={<Info />} />
          {/* 9° Search Params */}
          <Route path='/search' element={<Search />} />
          {/* 10° Redirect */}
          <Route path='/company' element={<Navigate to='/about' />} />
          {/* 7° Erro 404 */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
