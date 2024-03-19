import styled from "styled-components";

import MinusIcon from "../../../assets/icons/MinusIcon";
import PlusIcon from "../../../assets/icons/PlusIcon";
import { ButtonIcon } from "../../../components/ButtonIcon";
import { useCartContext } from "../../../context/CartContext";
import { Cart } from "../../../types/cart";

const Container = styled.div`
    display: flex;
    gap: 11px;
    margin: auto 0;
`;

const InputStyled = styled.input`
    width: 62px;
    height: 26px;

    border-radius: ${props => props.theme.radius};
    border: 1px solid #D9D9D9;

    text-align: center;

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    &[type=number] {
    -moz-appearance: textfield;
    }
`;

const Quantity = ({ item }: { item: Cart }) => {
    const { addCartItem, removeCartItem } = useCartContext();
    const {amount, ...product} = item;

    return (
        <Container>
            <ButtonIcon onClick={() => removeCartItem(product.id)}>
                <MinusIcon />
            </ButtonIcon>
            <InputStyled
                disabled
                type="number"
                value={amount}
            />
            <ButtonIcon onClick={() => addCartItem(product)}>
                <PlusIcon />
            </ButtonIcon>
        </Container>
    );
}

export default Quantity