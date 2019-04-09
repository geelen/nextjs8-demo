import Header from './Header'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2rem;
  max-width: 960px;
  margin: 0 auto;
  font-family: Source Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  background-color: #FFFFFFE;
`

const Layout = (props) => (
  <Container>
    <Header />
    {props.children}
  </Container>
)

export default Layout
