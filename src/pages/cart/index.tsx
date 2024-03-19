import styled from "styled-components";
import CartActions from "./components/CartActions";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 16px;

    background-color: ${props => props.theme.bgSecondary};
    border-radius: ${props => props.theme.radius};
`;

const Line = styled.hr`
    width: 100%;
    margin: 21px 0;
    background-color: #999999;

    @media(min-width: 768px) {
        margin: 24px 0;
    }
`;

const Cart = () => {
    return (
        <CardContainer>
            <Line />
            <CartActions />
        </CardContainer>
    );
}

export default Cart;