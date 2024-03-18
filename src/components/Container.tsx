import { HTMLAttributes } from "react";
import styled from "styled-components";

const Background = styled.div`
    width: 100%;
    background-color: ${props => props.theme.bgPrimary};
`;

const ContainerStyled = styled.main`
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 24px 40px 24px;

    @media(min-width: 768px) {
        padding: 0 16px 40px 16px;
    }
`;

const ContainerNavbarStyled = styled(ContainerStyled)`
    padding: 24px 16px;

    @media(min-width: 768px) {
        padding: 24px 16px;
    }
`;

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    isNavbar?: boolean
}

const Container = ({isNavbar = false, ...props}: ContainerProps) => {
    return (
        <Background>
            {isNavbar ? (
                <ContainerNavbarStyled as="header" {...props} />
            ):(
                <ContainerStyled {...props} />
            )}
        </Background>
    );
}

export default Container;