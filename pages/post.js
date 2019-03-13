import Layout from '../components/MyLayout'
import styled from 'styled-components'
import { getLargeImage } from '../utils'

const Image = styled.img`
  float: right;
  max-width: 50%;
  max-height: 80vh;
  margin-left: 2rem;
`

const Post = ({show}) => (
  <Layout>
    <Image src={getLargeImage(show.image)} />
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
  </Layout>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
