import Link from 'next/link'
import styled from 'styled-components'
import { FAB_SETTINGS } from '../utils'

const A = styled.a`
  color: inherit;
  margin-right: 1rem;

  &:hover {
    color: darkorange;
  }
`

const Header = () => (
  <div>
    <Link href="/" passHref>
      <A>{FAB_SETTINGS.TV_SHOW_NAME} Home</A>
    </Link>
    <Link href="/about" passHref>
      <A>About</A>
    </Link>
  </div>
)

export default Header
