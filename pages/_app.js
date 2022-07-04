import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return( 
    <Layout>
      <Head>
      <meta charSet="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
  <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
