import styled, { keyframes } from 'styled-components';
import triple2x from '../../../assets/img/triple2x.png';

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


export const ResponsiveSection = styled.div`
    @media screen and (min-width: 1142px) {
        width: 1040px;
        height: auto;
    }
    margin: 0px auto;
    position: relative;
`;

export const ContentLogo = styled.div`
    @media screen and (min-width: 1142px) {
        position: absolute;
        top: 150px;
        width: 400px;
        height: 338px;
        background-size: 400px 338px;
        padding-top: 280px;
        font-size: 15px;
    }
    box-sizing: border-box;
    background-image: url(${triple2x});
    background-repeat: no-repeat;
    text-align: center;
    font-family: sans-serif;
    color: rgba(58, 58, 58, 0.7);
    animation: ${SmoothAppearFromBottom} 0.7s;
`

