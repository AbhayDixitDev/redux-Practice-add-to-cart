import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Home from './Home';
import Cart from './Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;