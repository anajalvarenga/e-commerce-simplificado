import styled from "styled-components";

import CartActions from "./components/CartActions";
import CartHeader from "./components/CartHeader";
import CartItem from "./components/CartItem";
import { useCartContext } from "../../context/CartContext";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 16px;
    gap: 21px;

    background-color: ${props => props.theme.bgSecondary};
    border-radius: ${props => props.theme.radius};

    @media(min-width: 768px) {
        gap: 24px;
    }
`;

const Line = styled.hr`
    width: 100%;
    background-color: #999999;
`;

const Cart = () => {
    const { cart: cartItems } = useCartContext();

    return (
        <CardContainer>
            <CartHeader />
            {cartItems && cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
            <Line />
            <CartActions />
        </CardContainer>
    );
}

export default Cart;