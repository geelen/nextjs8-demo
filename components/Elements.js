import styled from 'styled-components'

export const A = styled.a`
  color: inherit;
  margin-right: 1rem;

  &:hover {
    color: darkorange;
  }
  
  ${ props => props.bare && 'text-decoration: none' };
`
