import React from 'react';
import * as Styled from './style'
export interface Props {
    // 글 내용
    content: string,
    // 글씨 볼드
    bold: boolean,
}

function Text({ content, bold }: Props): React.ReactElement {
    return <Styled.Text bold={bold}>{content}</Styled.Text>;
}

export default Text;