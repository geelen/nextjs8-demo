import Link from 'next/link'
import { FAB_SETTINGS } from '../utils'
import { A } from './Elements'

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
