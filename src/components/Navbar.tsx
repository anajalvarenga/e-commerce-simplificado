import styled from 'styled-components';

import BagIcon from '../assets/icons/BagIcon';
import Container from './Container';

const Title = styled.h1`
    font-family: ${props => props.theme.fontFamily};
    font-size: 20px;
    line-height: 27.24px;
    font-weight: 700;
    color: ${props => props.theme.onPrimary};
    margin: 0;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CartContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

const CartContent = styled.div`
    text-align: end;
    margin-right: 8px;
`;

const CartTitle = styled.h2`
    font-family: ${props => props.theme.fontFamily};
    font-size: 14px;
    line-height: 19.07px;
    font-weight: 600;
    color: ${props => props.theme.onPrimary};
    margin: 0;
    display: none;

    @media(min-width: 768px) {
        display: block;
    }
`;

const CartItems = styled.span`
    font-family: ${props => props.theme.fontFamily};
    font-size: 12px;
    line-height: 16.34px;
    font-weight: 600;
    color: ${props => props.theme.lightGray};
    margin: 0;
`;

const Navbar = () => {
    return (
        <Container isNavbar>
            <Content>
                <Title>WeMovies</Title>
                <CartContainer>
                    <CartContent>
                        <CartTitle>Meu Carrinho</CartTitle>
                        <CartItems>0 itens</CartItems>
                    </CartContent>
                    <BagIcon />
                </CartContainer>
            </Content>
        </Container>
    );
}

export default Navbar