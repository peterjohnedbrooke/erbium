import DesktopNav from "../components/DesktopNav";
import "../styles/globals.scss";
import App from "next/app";
import { useEffect } from "react";
import Transition from "../components/Transition";
import { createClient } from "contentful";
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps, logo}) {
  return (
    <>
      <DesktopNav navLogo={logo} />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID  ,
    accessToken: process.env.CONTENTFUL_ACCESS_ID
  });

  const res = await client.getEntries({ content_type: 'navLogo'})

  return {
    logo: res.items,
    ...appProps
  }

}

export default MyApp;
