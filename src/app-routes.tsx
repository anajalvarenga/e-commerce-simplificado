import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Cart from './pages/cart';

const AppRoutes = () => {
    return (  
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Cart />} />
        </Routes>
    );
}

export default AppRoutes;