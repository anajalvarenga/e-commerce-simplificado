import { Cart } from "./cart";
import { Product } from "./product";

export interface CartContextType {
    amount: number;
    total: number;
    getCartItem: (id: number) => Cart | null;
    addCartItem: (product: Product) => Cart;
    removeCartItem: (id: number) => Cart[];
}