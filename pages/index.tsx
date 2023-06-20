import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {
  LoginButton,
  RegisterButton,
  LogoutButton,
  ProfileButton,
} from './components/buttons.component'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
      </main>
    </div>
  )
}

export default Home
