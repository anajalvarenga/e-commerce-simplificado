import { Cart } from "./cart";
import { Product } from "./product";

export interface CartContextType {
    amount: number;
    subtotal: number;
    getCartItem: (id: number) => Cart | null;
    addCartItem: (product: Product) => Cart;
    removeCartItem: (id: number) => Cart[];
}