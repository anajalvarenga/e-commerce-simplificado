import styled from "styled-components";

import CartActions from "./components/CartActions";
import Line from "../../components/Line";
import CartDesktop from "./components/CartDesktop.tsx";
import CartMobile from "./components/CartMobile";
import Empty from "../../components/Empty";
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
        padding: 24px;
    }
`;

const Cart = () => {
    const { cart: cartItems } = useCartContext();

    return (
        <>  
            {cartItems.length > 0 ? (
                <CardContainer>
                    <CartDesktop cartItems={cartItems} />
                    <CartMobile cartItems={cartItems} />
                    <Line />
                    <CartActions />
                </CardContainer>
            ):(
                <Empty action="goHome" />
            )}
        </>
    );
}

export default Cart;