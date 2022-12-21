import Layout from "../components/homepage/Layout";
import Navbar from "../components/homepage/Navbar";
import "../styles/globals.css";
import { AppContextProvider } from "../context/app-context";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;
