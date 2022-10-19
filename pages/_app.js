import DesktopNav from "../components/DesktopNav";
import "../styles/globals.scss";
import "../styles/AlbumCard.module.scss";
import "../styles/AlbumPage.module.scss";
import "../styles/Albums.module.scss";
import "../styles/ArtistCard.module.scss";
import "../styles/ArtistPage.module.scss";
import "../styles/Artists.module.scss";
import "../styles/Carousel.module.scss";
import "../styles/ContentWrapper.module.scss";
import "../styles/DesktopNav.module.scss";
import "../styles/Footer.module.scss";
import "../styles/Header.module.scss";
import "../styles/Home.module.scss";
import "../styles/LatestReleases.module.scss";
import "../styles/Links.module.scss";
import "../styles/MobileHeader.module.scss";
import "../styles/NavLogo.module.scss";
import "../styles/PageLabel.module.scss";
import "../styles/Transition.module.scss";

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
