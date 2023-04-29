import '@/styles/globals.css'


// INTERNAL IMPORT
  import { NavBar, Footer } from '@/Components';
  import {}

export default function App({ Component, pageProps }) {
  return(
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  ) 
}
