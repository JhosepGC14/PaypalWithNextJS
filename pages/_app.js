import '../styles/globals.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://www.paypal.com/sdk/js?client-id=AXfyu-OdOP3f-ynmKiWrxUr8qYWm8ireUNH8ylgBftqwAuG6Qrd5rgJ6vrUIb667eiMeJThuN30-0BCq&currency=USD"></script>
        <title>Prueba Test</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
