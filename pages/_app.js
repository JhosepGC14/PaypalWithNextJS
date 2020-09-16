import '../styles/globals.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://www.paypal.com/sdk/js?client-id="aqui va tu clientID"&currency=USD"></script>
        <title>Prueba Test</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
