import styled from "styled-components";

import Button from "../../../components/Button";
import { useCartContext } from "../../../context/CartContext";
import { priceFormatter } from "../../../utils/price-formatter";

const CardActionsContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 16px;

    @media(min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const CartButton = styled(Button)`
    width: inherit;
    padding: 8px 32px;
`;

const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
`;

const PriceLabel = styled.h3`
    width: 61.47px;
    font-family: ${props => props.theme.fontFamily};
    font-size: 14px;
    line-height: 19.07px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.theme.lightGray};
    margin: 0;
`;

const Price = styled.b`
    width: 130.79px;
    font-family: ${props => props.theme.fontFamily};
    font-size: 24px;
    line-height: 32.68px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.theme.bgPrimary};
    margin: 0;
`;

const CartActions = () => {
    const { total } = useCartContext();

    return (
        <CardActionsContainer>
            <CartButton>Finalizar Pedido</CartButton>
            <PriceContainer>
                <PriceLabel>total</PriceLabel>
                <Price>{priceFormatter(total)}</Price>
            </PriceContainer>
        </CardActionsContainer>
    );
}

export default CartActions;