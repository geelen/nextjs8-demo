import Layout from '../components/MyLayout.js'
import { FAB_SETTINGS } from '../utils'
import CoverGrid from '../components/CoverGrid'

const Index = props => (
  <Layout>
    <h1>{props.tvShowName} TV Shows</h1>
    <CoverGrid shows={props.shows} />
  </Layout>
)

Index.getInitialProps = async function() {
  const tvShowName = FAB_SETTINGS.TV_SHOW_NAME

  const res = await fetch('https://api.tvmaze.com/search/shows?q=' + tvShowName)
  const data = await res.json()

  const shows = data.filter(({show}) => show.image)
  console.log(`Show data fetched! Count: ${data.length} (${shows.length} with images)`)
  console.log({ shows })

  return {
    tvShowName,
    shows
  }
}

export default Index
