import styled from "styled-components";
import Product from "./Product";
import { Cart } from "../../../types/cart";
import Quantity from "./Quantity";
import { priceFormatter } from "../../../utils/price-formatter";

const CartItemContainer = styled.div`
    display: grid;
    grid-template-columns: 280px auto auto 24px;
`;

const SubTotal = styled.p`
    font-family: ${props => props.theme.fontFamily};
    font-size: 16px;
    line-height: 21.79px;
    font-weight: 700;
    color: ${props => props.theme.bgPrimary};
    margin: auto 0;
`;

const CartItem = ({ item }: { item: Cart }) => {
    return (
        <CartItemContainer>
            <Product
                img={item.image}
                title={item.title}
                price={item.price}
            />
            <Quantity item={item} />
            <SubTotal>{priceFormatter(item.price * item.amount)}</SubTotal>
            <span>teste</span>
        </CartItemContainer>
    );
}

export default CartItem;