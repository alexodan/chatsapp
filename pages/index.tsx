import type { NextPage } from 'next'
import {
  LoginButton,
  RegisterButton,
  LogoutButton,
  ProfileButton,
} from '../components/buttons.component'
import { GetSessionParams, getSession, useSession } from 'next-auth/react'
import styled from 'styled-components'

const StyledPage = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 3rem;
  }

  .title,
  .description {
    text-align: center;
  }
`

const Home: NextPage = () => {
  const { data } = useSession()

  return (
    <StyledPage>
      <h1 className="title">
        {data && data.user ? (
          <>Welcome {data.user.email}!</>
        ) : (
          <>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </>
        )}
      </h1>

      <LoginButton />
      <RegisterButton />
      <LogoutButton />
      <ProfileButton />
    </StyledPage>
  )
}

export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context)
  return {
    props: { session: session?.user ?? '' },
  }
}

export default Home
