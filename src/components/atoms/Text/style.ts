import styled from 'styled-components';

export const Text = styled.span< { bold : boolean } >`
    font-weight: ${props => props.bold ? 'bold' : 'normal' }
`;