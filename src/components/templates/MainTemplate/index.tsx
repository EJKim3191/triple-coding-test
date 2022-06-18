import React from 'react'
import * as Styled from './style'
import StatisticSection from '../../organisms/StatisticSection'
/**
 * 구현 해야하는 내용 외의 내용은 간단하게 표현하였습니다 (hardCoding)
 * 
 */
import bgImg from '../../../assets/img/img-01-bg.png';
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
	return (
		<Styled.MainTemplate >
			<Styled.SectionContainer style={{height: '860px', backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
				1
			</Styled.SectionContainer >
            <Styled.SectionContainer>
				<StatisticSection />
			</Styled.SectionContainer>
			<Styled.SectionContainer style={styles.gray_bg_1}>
				2
			</Styled.SectionContainer>
			<Styled.SectionContainer style={styles.gray_bg_2}>
				3
			</Styled.SectionContainer>
			<Styled.SectionContainer style={styles.gray_bg_1}>
				4
			</Styled.SectionContainer>
		</Styled.MainTemplate>
	)
}

export default MainTemplate;