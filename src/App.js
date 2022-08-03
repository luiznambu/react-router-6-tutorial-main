import { BrowserRouter, Routes, Route } from 'react-router-dom'; //para fazer aplicacoes com mais de uma pagina
import { Link } from 'react-router-dom'; //para navegar entre as paginas INTERNAMENTE! para link externo ainda usar 'a ref'

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}> {/* nested pages ficam dentro do seu 'Route' */}
          <Route index element={<Home />} /> {/* index eh igual ao pai*/}
          <Route path="about" element={<About />} />
          <Route path="Products" element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
