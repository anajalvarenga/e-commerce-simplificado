import styled from "styled-components";

import imagePurchaseCompleted from "../../assets/images/purchase-completed.png";
import Button from "../../components/Button";
import LinkStyled from "../../components/LinkStyled";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 24px;
    padding: 64px 45px;

    background-color: ${props => props.theme.bgSecondary};
    border-radius: ${props => props.theme.radius};

    @media(min-width: 768px) {
        padding: 64px 64px 102px 64px;
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
    width: 238px;
    height: 247.72px;

    @media(min-width: 768px) {
        width: 294.96px;
        height: 307px;
    }
`;

const ButtonStyled = styled(Button)`
    width: 157px;
    padding: 11px 8px;
`;

const PurchaseCompleted = () => {
    return (
        <Container>
            <Title>Compra realizada com sucesso!</Title>
            <Image
                src={imagePurchaseCompleted}
                alt="Compra realizada com sucesso!"
            />
            <LinkStyled to="/">
                <ButtonStyled>VOLTAR</ButtonStyled>
            </LinkStyled>
        </Container>
    );
}

export default PurchaseCompleted