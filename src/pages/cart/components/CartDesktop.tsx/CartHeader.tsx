import styled from "styled-components";

const CartHeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 280px 180px auto 24px;
    margin-bottom: 24px;

    @media(min-width: 768px) {
        grid-template-columns: 280px 348px auto 24px;
    }
`;

const ColumnName = styled.h3`
    font-family: ${props => props.theme.fontFamily};
    font-size: 14px;
    line-height: 19.07px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme.lightGray};
    margin: 0;
`;

const CartHeader = () => {
    return (
        <CartHeaderContainer>
            <ColumnName>Produto</ColumnName>
            <ColumnName>Qtd</ColumnName>
            <ColumnName>Subtotal</ColumnName>
        </CartHeaderContainer>
    );
}

export default CartHeader;