import styled from "styled-components";

import { Product } from "../../../types/product";
import { priceFormatter } from "../../../utils/price-formatter";

const Container = styled.div`
    max-width: 306.67px;

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
    font-family: Open Sans;
    font-size: 12px;
    line-height: 16.34px;
    font-weight: 700;
    color: #333333;
    margin: 0;
`;

const Price = styled.b`
    font-family: Open Sans;
    font-size: 16px;
    line-height: 21.79px;
    font-weight: 700;
    color: #2F2E41;
    margin: 0;
`;

const MovieCard = ({ movie }: { movie: Product }) => {
    return (
        <Container>
            <Image src={movie.image} />
            <Title>{movie.title}</Title>
            <Price>{priceFormatter(movie.price)}</Price>
        </Container>
    );
}

export default MovieCard;