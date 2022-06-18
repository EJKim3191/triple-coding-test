import styled from 'styled-components';
import playstore2x from '../../../assets/img/play-store2x.png';
import badgeapple4x from '../../../assets/img/badge-apple4x.png';

export const AwardsContainer = styled.div`
    @media screen and (min-width: 1142px) {
        margin: 50px 0px 140px 623px;
    }
    white-space: nowrap;
`;

export const AwardsItem = styled.div<{ bgImg : string }>`
    @media screen and (min-width: 1142px) {
        background-size: 54px 54px;
        height: 54px;
        padding: 5px 0px 5px 62px;
        font-size: 14px;
        line-height: 22px;
        margin-right: 39px;
    }   
    display: inline-block;
    font-family: sans-serif;
    background-image: ${prop => prop.bgImg === 'playstore2x' ? `url(${playstore2x})` : `url(${badgeapple4x})`};
    background-position: left top;
    background-repeat: no-repeat;
    color: rgba(58, 58, 58, 0.8);
    font-weight: bold;
`
