import styled from "styled-components";

const Button = styled.button<{ $secondary?: boolean; }>`
    width: 100%;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.$secondary ? props.theme.btnSecondary : props.theme.btnPrimary};
    color: ${props => props.theme.onPrimary};
    border-radius: ${props => props.theme.radius};
    border: none;

    padding: 8px;
    gap: 12px;
    cursor: pointer;
    
    font-family: ${props => props.theme.fontFamily};
    text-transform: uppercase;
    font-size: 12px;
    line-height: 16.34px;
    font-weight: 700;
`;

export default Button;