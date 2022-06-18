import styled, { keyframes } from 'styled-components';

const SmoothAppearFromBottom = keyframes`
    from {
        opacity: 0;
        transform: translateY(20%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const MetricsContainer = styled.div`
    @media screen and (min-width: 1142px) {
        margin-left: 623px;
        padding-top: 150px;
    }
    animation: ${SmoothAppearFromBottom} 0.7s;
    animation-delay: 0.1s;
`

export const MetricsItem = styled.div`
    @media screen and (min-width: 1142px) {
        font-size: 36px;
        letter-spacing: -1px;
        margin-bottom: 20px;
    }   
    color: rgb(58, 58, 58);
    font-family: sans-serif;
`