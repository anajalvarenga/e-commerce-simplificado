import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Cart from './pages/cart';
import PurchaseCompleted from './pages/purchase-completed';

const AppRoutes = () => {
    return (  
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/compra-realizada" element={<PurchaseCompleted />} />
        </Routes>
    );
}

export default AppRoutes;