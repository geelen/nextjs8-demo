import React from 'react'
import Layout from '../components/MyLayout'
import styled from 'styled-components'
import { getLargeImage } from '../utils'

const Image = styled.img`
  float: right;
  max-width: 50%;
  max-height: 80vh;
  margin-left: 2rem;
`

const Post = ({ show }) => (
  <Layout>
    {show.image && <Image src={getLargeImage(show.image)} />}
    <h1>{show.name}</h1>
    {show.summary ? (
      <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
    ) : (
      <p>No summary provided.</p>
    )}
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
