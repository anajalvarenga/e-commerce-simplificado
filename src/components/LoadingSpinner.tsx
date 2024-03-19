import styled, { keyframes } from 'styled-components';
import loadingImage from '../assets/images/loader.png';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.img`
    width: 83px;
    height: 83px;
    animation: ${rotate} 1s linear infinite;

    @media(min-width: 768px) {
        margin-top: 40px;
    }
`;

const LoadingSpinner = () => {
    return (
        <Container>
            <Spinner src={loadingImage} alt="Loading Spinner" />
        </Container>
    );
};

export default LoadingSpinner;
