import styled from "styled-components";
import Product from "./Product";
import { Cart } from "../../../types/cart";

const CartItemContainer = styled.div`
    display: grid;
    grid-template-columns: 280px auto auto 24px;
`;

const CartItem = ({ item }: { item: Cart }) => {
    return (
        <CartItemContainer>
            <Product
                img={item.image}
                title={item.title}
                price={item.price}
            />
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
        </CartItemContainer>
    );
}

export default CartItem;