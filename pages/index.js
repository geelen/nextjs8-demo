import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import { FAB_SETTINGS } from '../utils'

const Index = props => (
  <Layout>
    <h1>{props.tvShowName} TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const tvShowName = FAB_SETTINGS.TV_SHOW_NAME || 'Batman'

  const res = await fetch('https://api.tvmaze.com/search/shows?q=' + tvShowName)
  const data = await res.json()

  console.log(`Show data fetched! Count: ${data.length}`)
  console.log({ shows: data })

  return {
    tvShowName,
    shows: data
  }
}

export default Index
