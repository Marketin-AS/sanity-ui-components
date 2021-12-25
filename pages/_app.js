import Head from 'next/head'
import '../styles/global.scss'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Marketin AS - Sanity UI Components</title>

        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
