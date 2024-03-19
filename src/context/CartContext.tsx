import { ReactNode, createContext, useContext } from "react";
import useCart from "../hooks/useCart"; // Importe o hook useCart
import { CartContextType } from "../types/cart-context";
import { Product } from "../types/product";

const initialContext: CartContextType = {
    amount: 0,
    total: 0,
    getCartItem: (id: number) => null,
    addCartItem: (product: Product) => {return {...product, amount: 1}},
    removeCartItem: (id: number) => [],
};

const CartContext = createContext<CartContextType>(initialContext);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cart = useCart();

    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    );
};
