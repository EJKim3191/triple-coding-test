import React from 'react';
import * as Styled from './style';
import Text from '../../atoms/Text'
import { useCountup } from '../../../hooks/useCountup'

/**
 * TODO: 숫자가 변함에 따라 text의 크기가 변함 -> 같은 줄 (바로 옆)에 있는 텍스트가 영향을 받아 같이 흔들리는 효과가 발생
 * Try: 적당한 거리에 나머지 text들은 absolute 로 고정
 * 
 * Solved
 */
interface Props {
    count: {
        travelerCount: number;
        reviewCount: number;
        planCount: number;
    },
}

function MetricsContainer({ count }: Props): React.ReactElement {
	const travelerCount = useCountup(0, count.travelerCount, 2000);
    const reviewCount = useCountup(0, count.reviewCount, 2000);
    const planCount = useCountup(0, count.planCount, 2000);
    return (
        <Styled.MetricsContainer>
            <Styled.MetricsItem>
                <Styled.CountingItem>
                    <Text content={travelerCount.toString()} bold={true} />
                </Styled.CountingItem>
                <Styled.CountingItemContent>
                    <Text content='만 명' bold={true} />
                    <Text content='의 여행자' bold={false} /> 
                </Styled.CountingItemContent>
            </Styled.MetricsItem>
            <Styled.MetricsItem>
                <Styled.CountingItem>
                    <Text content={reviewCount.toString()} bold={true} /> 
                </Styled.CountingItem>
                <Styled.CountingItemContent>
                    <Text content='만 개' bold={true} /> 
                    <Text content='의 여행 리뷰' bold={false} /> 
                </Styled.CountingItemContent>
            </Styled.MetricsItem>
            <Styled.MetricsItem>
                <Styled.CountingItem>
                    <Text content={planCount.toString()} bold={true} /> 
                </Styled.CountingItem>
                <Styled.CountingItemContent>
                    <Text content='만 개' bold={true} /> 
                    <Text content='의 여행 일정' bold={false} /> 
                </Styled.CountingItemContent>
            </Styled.MetricsItem>
        </Styled.MetricsContainer>
    );
}

export default MetricsContainer;