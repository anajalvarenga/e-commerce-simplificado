import { useEffect, useState } from "react";

import { Cart } from "../types/cart";
import { Product } from "../types/product";

const useCart = () => {
    const [cart, setCart] = useState<Cart[]>([]);
    const [amount, setAmount] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        setCart(getCartItems());
    }, []);
    
    useEffect(() => {
        setAmount(cart.reduce((acc, curr) => acc + curr.amount, 0));
        setTotal(cart.reduce((acc, curr) => acc + (curr.amount * curr.price), 0));
    }, [cart]);

    function getCartItems(): Cart[] {
        const items = localStorage.getItem('cart');
        if (items !== null) {
            return JSON.parse(items);
        }
        return [];
    }

    function getCartItem(id: number): Cart | null {
        return cart.find(item => item.id === id) || null;
    }

    function addCartItem(product: Product): Cart {
        const cart = getCartItems(); //evitar erros de sincronização
        const existingItem = getCartItem(product.id);
    
        if (existingItem) {
            existingItem.amount++;
            const updatedCart = cart.map(item =>
                item.id === existingItem.id ? existingItem : item
            );
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return existingItem;
        } else {
            const newCartItem: Cart = { ...product, amount: 1 };
            const updatedCart = [...cart, newCartItem];
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return newCartItem;
        }
    }

    function removeCartItem(id: number): Cart[] {
        const itemToRemove = getCartItem(id);
        if (!itemToRemove) return cart;
        
        if (itemToRemove.amount > 1) {
            const updatedCart = cart.map(item =>
                item.id === id ? { ...item, amount: item.amount - 1 } : item
            );
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        } else {
            const updatedCart = cart.filter(item => item.id !== id);
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        }
    }
    

    return {
        amount,
        total,
        getCartItem,
        addCartItem,
        removeCartItem
    };
}

export default useCart;