import DesktopNav from "../components/DesktopNav";
import "../styles/globals.scss";
import App from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Transition from "../components/Transition";

function MyApp({ Component, pageProps, navImages, navLogo }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <DesktopNav navImages={navImages} navLogo={navLogo} />
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const resNavImage = await fetch(
    "https://erbiumbackend.herokuapp.com/api/nav-image?populate[NavImage][fields][0]=url"
  );

  const navImages = await resNavImage.json();

  const resNavLogo = await fetch(
    "https://erbiumbackend.herokuapp.com/api/navlogo?populate[NavLogo][fields][0]=url"
  );
  const navLogo = await resNavLogo.json();

  return { ...appProps, navImages, navLogo };
};

export default MyApp;
