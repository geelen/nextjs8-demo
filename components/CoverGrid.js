import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { getSmallImage } from '../utils'
import { A } from './Elements'

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 0 -1rem;
  padding: 0;
`

const Show = styled.li`
  margin: 1rem 0 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 200px;
  min-height: 380px;
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const Title = styled.span`
  display: block;
  text-align: center;
  margin-top: 0.5rem;
`

export default ({ shows }) => (
  <List>
    {shows.map(({ show }) => (
      <Show key={show.id}>
        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`} passHref>
          <A bare>
            <Image alt={`${show.name} poster`} src={getSmallImage(show.image)} />
            <Title>{show.name}</Title>
          </A>
        </Link>
      </Show>
    ))}
  </List>
)
