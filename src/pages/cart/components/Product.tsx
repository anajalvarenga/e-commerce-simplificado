import styled from "styled-components";

import ProductImage from "./ProductImage";
import { priceFormatter } from "../../../utils/price-formatter";

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    font-family: ${props => props.theme.fontFamily};
    font-size: 14px;
    line-height: 19.07px;
    font-weight: 700;
    color: ${props => props.theme.bgPrimary};
    margin: 0;
`;

const Title = styled.p`
    margin: 0;
`;

const Price = styled.p`
    font-size: 16px;
    line-height: 21.79px;
    margin: 0;
`;

interface ProductProps {
    img: string,
    title: string,
    price: number
}

const Product = ({ img, title, price }: ProductProps) => {
    return (
        <Container>
            <ProductImage src={img} alt={title} />
            <Description>
                <Title>{title}</Title>
                <Price>{priceFormatter(price)}</Price>
            </Description>
        </Container>
    );
}

export default Product;