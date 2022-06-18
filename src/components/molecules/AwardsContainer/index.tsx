import React from 'react';
import Text from '../../atoms/Text';
import * as Styled from './style';

function AwardContainer(): React.ReactElement {
    return (
        <Styled.AwardsContainer>
            <Styled.AwardsItem bgImg={'playstore2x'}>
                <Text content='2018 구글 플레이스토어' bold={true}/>
                <br/>
                <Text content='올해의 앱 최우수상 수상' bold={true}/>
            </Styled.AwardsItem>
            <Styled.AwardsItem bgImg={'badgeapple4x'}>
                <Text content='2018 애플 앱스토어' bold={true}/>
                <br/>
                <Text content='오늘의 여행앱 선정' bold={true}/>
            </Styled.AwardsItem>
        </Styled.AwardsContainer>
    );
}

export default AwardContainer;