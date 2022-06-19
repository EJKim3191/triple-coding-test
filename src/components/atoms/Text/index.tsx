import React from 'react';
import * as Styled from './style'
interface Props {
    // 글 내용
    content: string,
    // 글씨 볼드
    bold: boolean,
}

function Text({ content, bold }: Props): React.ReactElement {

    if(bold) return <Styled.StrongText>{content}</Styled.StrongText>;
    else return <Styled.Text>{content}</Styled.Text>;
}

export default Text;