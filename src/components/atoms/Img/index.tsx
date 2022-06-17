import React from 'react';
import * as Styled from './style'
export interface Props {
  // img alt
  alt: string;
  // img src
  src: string;
}

function Img({ alt, src }: Props): React.ReactElement {
  return <Styled.Img alt={alt} src={src}/>;
}

export default Img;