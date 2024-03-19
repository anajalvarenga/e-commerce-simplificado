import styled from "styled-components";

import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import { Cart } from "../../../../types/cart";

const DisplayDesktop = styled.div`
    display: none;

    @media(min-width: 768px) {
        display: block;
    }
`;

const CartDesktop = ({ cartItems }: { cartItems: Cart[]}) => {
    return (
        <DisplayDesktop>
            <CartHeader />
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
        </DisplayDesktop>
    );
}

export default CartDesktop;