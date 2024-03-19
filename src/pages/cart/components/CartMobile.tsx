import styled from "styled-components";

import ProductImage from "./ProductImage";
import { Cart } from "../../../types/cart";
import { priceFormatter } from "../../../utils/price-formatter";
import TrashButton from "./TrashButton";
import Quantity from "./Quantity";

const DisplayMobile = styled.div`
    display: block;

    @media(min-width: 768px) {
        display: none;
    }
`;

const CartContainer = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 21px;
`;

const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
`;

const RowEnd = styled(Row)`
    width: auto;
    justify-content: flex-end;
    gap: 16px;
`;

const Title = styled.h3`
    font-family: ${props => props.theme.fontFamily};
    font-size: 14px;
    line-height: 19.07px;
    font-weight: 700;
    color: ${props => props.theme.bgPrimary};
    margin: 0;
`;

const Price = styled.h3`
    font-family: ${props => props.theme.fontFamily};
    font-size: 16px;
    line-height: 21.79px;
    font-weight: 700;
    color: ${props => props.theme.bgPrimary};
    margin: 0;
`;

const SubTotalContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SubTotalTitle = styled.span`
    font-family: ${props => props.theme.fontFamily};
    font-size: 12px;
    line-height: 16.34px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme.lightGray};
    margin: 0;
`;

const CartMobile = ({ cartItems }: { cartItems: Cart[]}) => {
    return (
        <DisplayMobile>
            {cartItems.map(item => (
                <CartContainer key={item.id}>
                    <ProductImage src={item.image} alt={item.title} />
                    <Column>
                        <Row>
                            <Title>{item.title}</Title>
                            <RowEnd>
                                <Price>{priceFormatter(item.price)}</Price>
                                <TrashButton id={item.id}/>
                            </RowEnd>
                        </Row>
                        <Row>
                            <Quantity item={item} />
                            <SubTotalContainer>
                                <SubTotalTitle>subtotal</SubTotalTitle>
                                <Price>{priceFormatter(item.price * item.amount)}</Price>
                            </SubTotalContainer>
                        </Row>
                    </Column>
                </CartContainer>
            ))}
        </DisplayMobile>
    );
}

export default CartMobile;