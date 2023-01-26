import { React, useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Hamburger from "hamburger-react";
import NavLogo from "./NavLogo";
import Scroll from "./Scroll";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBandcamp, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; 
import Links from "./Links";
import PageLabel from "./PageLabel";
import BackButton from "./BackButton";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});


export default function DesktopNav({navLogo}) {

  const [click, setClick] = useState(false);
  const[clickLogo, setClickLogo] = useState(false);
  const [changePage, setChangePage] = useState(false);

  const handlePageChange = () => {
    setChangePage(true)
    setClickLogo(true)
  }

  const handleLogo = () => {
    setClickLogo(true)
  }

  const handleClick = () => {
    setClick(!click)
    setHoverFour(false);
    setHoverOne(false);
    setHoverTwo(false);
    setHoverThree(false);
  }
  const handleExit = (e) => {
    setClick(!click)
    setHoverFour(false);
    setHoverOne(false);
    setHoverTwo(false);
    setHoverThree(false);
    setOpen(false);
    setClickLogo(true);
    setChangePage(true);
  }
  const handleExitHome = (e) => {
    setClick(!click)
    setHoverFour(false);
    setHoverOne(false);
    setHoverTwo(false);
    setHoverThree(false);
    setOpen(false);
    setChangePage(false);
    setClickLogo(false);
  }

  const [isOpen, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!isOpen)
    };

  const [isSideNavOpen, setIsSideOpen] = useState(true);
  const handleSideNavOpen = () => {
    if (setIsSideOpen(false)) {
      return
    } else {
      setIsSideOpen(!isSideNavOpen);
    }     
  }  

  const [hoverOne, setHoverOne] = useState(false);
  const handleHoverOne = () => {
    if ( setHoverOne(true)) {
      return;
    } else {
      setHoverOne(true);
      setHoverTwo(false);
      setHoverThree(false);
      setHoverFour(false)
    }
  }  
  const [hoverTwo, setHoverTwo] = useState(false);
  const handleHoverTwo = () => {
    if (setHoverTwo(true)) {
      return;
    } else {
      setHoverTwo(true);
      setHoverOne(false);
      setHoverThree(false);
      setHoverFour(false);
      setIsSideOpen(true);
    }
  }  


  const [hoverThree, setHoverThree] = useState(false);
  const handleHoverThree = () => {
    if (setHoverThree(true)) {
      return;
    } else {
      setHoverThree(true);
      setHoverOne(false);
      setHoverTwo(false);
      setHoverFour(false);
      
    }
  }  
  const [hoverFour, setHoverFour] = useState(false);
  const handleHoverFour = () => {
    if (setHoverFour(true)) {
      return;
    } else {
      setHoverFour(true);
      setHoverOne(false);
      setHoverTwo(false);
      setHoverThree(false);
    }
  }
  

  const bandCamp = <FontAwesomeIcon className="bandCamp" icon={faBandcamp} />;
  const soundCloud = <FontAwesomeIcon className="soundCloud" icon={faSoundcloud} />;
  const searchIcon = <FontAwesomeIcon className="searchIcon" icon={faSearch} />;

  const [nav, setNav] = useState(false)
  const [navColor, setNavColor] = useState(false)
  const [textColor, setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >=90 ) {
        setNavColor(true)
      } else {
        setNavColor(false)
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])


  return (
      <div className={ navColor ? `${styles.navBarContainerScroll}` : `${styles.navBarContainerStatic}`}>
        <div className={styles.navWrapper}>
          <NavLogo  navLogo={navLogo}/>
          <ul className={styles.desktopNavBar}>
              <li>
                  <Link href="/artists"><a>ARTISTS.</a></Link>
              </li>
              <li>
                <Link href="/artists/albums" ><a>RELEASES.</a></Link>
              </li>
              <li>
                <Link href="/about"><a>ABOUT.</a></Link>
              </li>
              <li>
                <a href="https://erbiumrecords.bandcamp.com/music" target="_blank" rel="noopener noreferrer">STORE.</a>
              </li>
              {/* <li>
              <ThemeToggle/>
              </li> */}
            </ul>
        </div>
       
        <div className={styles.navBarContainerRight}>
          <NavLogo navLogo={navLogo} />
          <div className={click ? `${styles.burgerIconPage}` : `${styles.burgerIcon}`} onClick={handleClick}>
            <Hamburger size={25} className={styles.burgerInner} toggled={isOpen} rounded toggle ={setOpen} />
          </div>
        </div>
        <div className={click ? `${styles.sideNavRightActive}` : `${styles.sideNavRightHidden}`}>
          <ul className={click ? `${styles.rightSideList}` : `${styles.rightSideListHidden}`}>
            <li>
                <Link href="/artists"><a onClick={handleExit}>ARTISTS.</a></Link>
            </li>
            <li>
              <Link href="/artists/albums" ><a onClick={handleExit}>RELEASES.</a></Link>
            </li>
            {/* <li>
              <Link href="/news" ><a onClick={handleExit}>NEWS.</a></Link>
            </li>
            <li>
              <Link href="/events" ><a onClick={handleExit}>EVENTS.</a></Link>
            </li> */}
            <li>
              <Link href="/about" ><a onClick={handleExit}>ABOUT.</a></Link>
            </li>
            <li>
              <a href="https://erbiumrecords.bandcamp.com/music" target="_blank" rel="noopener noreferrer">STORE.</a>
            </li>
          </ul>
        </div>
        
        {/* <PageLabel click={click}/> 
        <Links /> */}
      </div>
   
  );
}
