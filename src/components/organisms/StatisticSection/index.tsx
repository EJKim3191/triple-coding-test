import React from 'react';
import * as Styled from './style';

import Text from '../../atoms/Text';
import MetricsContainer from '../../molecules/MetricsContainer'
import AwardsContainer from '../../molecules/AwardsContainer';

function StatisticSection(): React.ReactElement {
    return (
        <Styled.ResponsiveSection>
            <Styled.ContentLogo>
                <Text content={"2021년 12월 기준"} bold={false} />
            </Styled.ContentLogo>
            <MetricsContainer count={{ travelerCount: 700, reviewCount: 100, planCount: 470}} />
            <AwardsContainer />
        </Styled.ResponsiveSection>
    );
}

export default StatisticSection;