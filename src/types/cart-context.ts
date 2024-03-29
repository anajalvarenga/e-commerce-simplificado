import { Cart } from "./cart";
import { Product } from "./product";

export interface CartContextType {
    cart: Cart[];
    amount: number;
    total: number;
    getCartItem: (id: number) => Cart | null;
    addCartItem: (product: Product) => Cart;
    removeCartItem: (id: number) => Cart[];
    removeAllCartItem: (id: number) => Cart[];
    clearCart: () => [];
}