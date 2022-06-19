import React from 'react'
import * as Styled from './style'
import StatisticSection from '../../organisms/StatisticSection'
import { useScrollY } from '../../../hooks/useScrollY';
import bgImg from '../../../assets/img/img-01-bg.png';

/**
 * 구현 해야하는 내용 외의 내용은 간단하게 표현하였습니다 (hardCoding)
 * 
 * TODO: 렌더링이 두번 일어나는 현상 고치기
 * 문제점: animation을 컨트롤하면 (styled-component의 css https://styled-components.com/docs/api#css 를 이용하여 부모 요소에 정의한 state를 prop으로 내려 animation을 컨트롤)
 * 		너무 많은 prop drilling이 일어난다... (animation 외에도 카운팅 모션 등 다양한 로직이 들어가있기 때문에)
 * 		따라서, Section의 가장 부모 div를 폯을 고정, 안의 contents는 스크롤로 랜더링 하면 좋을 것 같다
 * 		단순 jsx에 state 변화로 출력 시, 두번 렌더링 (깜빡임 현상)이 일어남
 * 
 * 리렌더링 방지 해결
 * 
 * 문제점 2: 리렌더링을 방지 했지만, 깜빡임 현상은 해결되지 않음 -> Maybe 컴포넌트 랜더링 시, opacity 설정 1 -> 애니메이션 opacity 설정? css문제일 가능성 
 * 
 * 문제점 : animation-delay 로 설정한 딜레이 값이 깜빡거림을 유발시킴
 * 
 * Solved: animation-fill-mode:forwards 으로 처음 해당 값 opacity를 0으로 설정, 애니메이션 이후 값을 유지하게 끔 설정
 * 			delay 이전은 opacity가 0으로 렌더링이 되고, 딜레이 된 애니메이션이 실행 된 이후 마지막 값인 opacity 1 을 유지함
 */

const commonStyle = {
	height: '1000px',
	position: 'relative',
	overflow: 'hidden',
	backgroundImage: 'initial',
	backgroundPositionX: 'center',
	backgroundPositionY: 'center',
	backgroundSize: 'cover',
	backgroundRepeatX: 'initial',
	backgroundRepeatY: 'initial',
	backgroundAttachment: 'initial',
	backgroundOrigin: 'initial',
	backgroundClip: 'initial',
} as const;

const styles = {
	gray_bg_1: {
		...commonStyle,
		background: 'center center / cover rgb(250, 250, 250)',
		backgroundColor: 'rgb(250, 250, 250)'
	},
	gray_bg_2: {
		...commonStyle,
		background: 'center center / cover rgb(245, 245, 245)',
		backgroundColor: 'rgb(245, 245, 245)'
	}
} as const;

const MainTemplate: React.FC = () => {
	const scrollY = useScrollY(350);

	return (
		<Styled.MainTemplate >
			<Styled.SectionContainer style={{height: '860px', backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
			</Styled.SectionContainer >
            <Styled.SectionContainer style={{height: '552px'}}>
					{scrollY && <StatisticSection />}
			</Styled.SectionContainer>
			<Styled.SectionContainer style={styles.gray_bg_1} />
			<Styled.SectionContainer style={styles.gray_bg_2} />
			<Styled.SectionContainer style={styles.gray_bg_1} />
		</Styled.MainTemplate>
	)
}

export default MainTemplate;