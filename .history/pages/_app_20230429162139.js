import '@/styles/globals.css'


// INTERNAL IMPORT
  import { NavBar, Footer } from '../Components';
  import { CrowdFundingProvider } from '../Context/CrowdFunding';

export default function App({ Component, pageProps }) {
  return(
    <>
    <C
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  ) 
}
