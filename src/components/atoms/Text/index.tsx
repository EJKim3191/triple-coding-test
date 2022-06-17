import React from 'react';
import * as Styled from './style'
export interface Props {
    // 글 내용
    content: string,
    // 글씨 볼드
    strong: boolean,
}

function Text({ content, strong }: Props): React.ReactElement {
    return <Styled.Text strong={strong}>{content}</Styled.Text>;
}

export default Text;