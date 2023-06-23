import type { NextPage } from 'next'
import { GetSessionParams, getSession, useSession } from 'next-auth/react'
import styled from 'styled-components'

const StyledPage = styled.main`
  text-align: center;
`

const Home: NextPage = () => {
  const { data, status } = useSession()
  console.log('session:', data, status)

  return (
    <StyledPage>
      <h1 className="title">Your chats</h1>
    </StyledPage>
  )
}

export default Home
