/* eslint-disable @next/next/no-page-custom-font */
import '../styles/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>

    </div>
  )

}

export default MyApp
