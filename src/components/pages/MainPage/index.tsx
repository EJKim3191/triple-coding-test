import React from 'react';
import MainTemplate from '../../templates/MainTemplate';

import { useScrollY } from '../../../hooks/useScrollY';

const MainPage: React.FC = () => {
	const scrollY = useScrollY();
	console.log(scrollY);
	return <MainTemplate />
}

export default MainPage;