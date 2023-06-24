import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import GlobalStyle from '../components/globalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
