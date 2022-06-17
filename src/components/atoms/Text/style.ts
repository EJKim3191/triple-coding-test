import styled from 'styled-components';

export const Text = styled.span< { strong : boolean } >`
    font-weight: ${props => props.strong ? 'bold' : 'normal' }
`;