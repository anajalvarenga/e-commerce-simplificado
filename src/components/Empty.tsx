import styled from "styled-components";

import Button from "./Button";
import LinkStyled from "./LinkStyled";
import empty from "../assets/images/empty.png";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 24px;
    padding: 64px;

    background-color: ${props => props.theme.bgSecondary};
    border-radius: ${props => props.theme.radius};

    @media(min-width: 768px) {
        padding: 64px 64px 143.64px 64px;
    }
`;

const Title = styled.div`
    font-family: ${props => props.theme.fontFamily};
    font-size: 20px;
    line-height: 27.24px;
    font-weight: 700;
    text-align: center;
    color: ${props => props.theme.bgPrimary};
    margin: 0;
`;

const Image = styled.img`
    width: 178.63px;
    height: 264px;
    border-bottom: 1px solid #3F3D56;

    @media(min-width: 768px) {
        width: 447px;
        object-fit: contain;
    }
`;

const ButtonStyled = styled(Button)`
    width: 173px;
    padding: 11px 8px;
    text-transform: none;
`;

const Empty = ({ action }: { action: 'reload' | 'goHome' }) => {
    function refreshPage() {
        window.location.reload();
    }

    return (
        <Container>
            <Title>Parece que não há nada por aqui :(</Title>
            <Image
                src={empty}
                alt="Compra realizada com sucesso!"
            />
            {action === 'reload' && (
                <ButtonStyled onClick={refreshPage}>
                    Recarregar página
                </ButtonStyled>
            )}
            {action === 'goHome' && (
                <LinkStyled to="/">
                    <ButtonStyled>Voltar</ButtonStyled>
                </LinkStyled>
            )}
        </Container>
    );
}

export default Empty