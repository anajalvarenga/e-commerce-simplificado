import styled from 'styled-components';

import Container from './Container';
import LinkStyled from './LinkStyled';
import BagIcon from '../assets/icons/BagIcon';
import { useCartContext } from '../context/CartContext';

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
    const { amount } = useCartContext();

    return (
        <Container isNavbar>
            <Content>
                <LinkStyled to="/">
                    <Title>WeMovies</Title>
                </LinkStyled>
                <CartContainer>
                    <CartContent>
                        <CartTitle>Meu Carrinho</CartTitle>
                        <CartItems>{amount} itens</CartItems>
                    </CartContent>
                    <LinkStyled to="/carrinho/">
                        <BagIcon />
                    </LinkStyled>
                </CartContainer>
            </Content>
        </Container>
    );
}

export default Navbar