import styled from "styled-components";

import CartIcon from "../../../assets/icons/CartIcon";
import Button from "../../../components/Button";
import { Product } from "../../../types/product";
import { priceFormatter } from "../../../utils/price-formatter";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 16px;
    gap: 8px;

    background-color: ${props => props.theme.bgSecondary};
    border-radius: ${props => props.theme.radius};
`;

const Image = styled.img`
    width: 147px; 
    height: 188px;
`;

const Title = styled.h3`
    font-family: ${props => props.theme.fontFamily};
    font-size: 12px;
    line-height: 16.34px;
    font-weight: 700;
    color: #333333;
    margin: 0;
`;

const Price = styled.b`
    font-family: ${props => props.theme.fontFamily};
    font-size: 16px;
    line-height: 21.79px;
    font-weight: 700;
    color: #2F2E41;
    margin: 0;
`;

const CartInfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3.4px;
`;

const MovieCard = ({ movie }: { movie: Product }) => {
    return (
        <Container>
            <Image src={movie.image} />
            <Title>{movie.title}</Title>
            <Price>{priceFormatter(movie.price)}</Price>
            <Button>
                <CartInfoContainer>
                    <CartIcon />
                    <span>0</span>
                </CartInfoContainer>
                ADICIONAR AO CARRINHO
            </Button>
        </Container>
    );
}

export default MovieCard;