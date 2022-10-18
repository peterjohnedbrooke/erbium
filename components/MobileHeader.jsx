import React, { useEffect, useState } from "react";
import styles from "../styles/MobileHeader.module.scss";
import Hamburger from "hamburger-react";
import Link from "next/link";

export default function MobileHeader() {
  const [click, setClick] = useState(false);
  const [clickLogo, setClickLogo] = useState(false);
  const [changePage, setChangePage] = useState(false);

  const handlePageChange = () => {
    setChangePage(true);
    setClickLogo(true);
  };

  const handleLogo = () => {
    setClickLogo(true);
  };

  const handleClick = () => {
    setClick(!click);
    setHoverFour(false);
    setHoverOne(false);
    setHoverTwo(false);
    setHoverThree(false);
  };
  const handleExit = (e) => {
    setClick(!click);
    setHoverFour(false);
    setHoverOne(false);
    setHoverTwo(false);
    setHoverThree(false);
    setOpen(false);
    setClickLogo(true);
    setChangePage(true);
  };
  const handleExitHome = (e) => {
    setClick(!click);
    setHoverFour(false);
    setHoverOne(false);
    setHoverTwo(false);
    setHoverThree(false);
    setOpen(false);
    setChangePage(false);
    setClickLogo(false);
  };

  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!isOpen);
  };

  const [isSideNavOpen, setIsSideOpen] = useState(true);
  const handleSideNavOpen = () => {
    if (setIsSideOpen(false)) {
      return;
    } else {
      setIsSideOpen(!isSideNavOpen);
    }
  };

  const [hoverOne, setHoverOne] = useState(false);
  const handleHoverOne = () => {
    if (setHoverOne(true)) {
      return;
    } else {
      setHoverOne(true);
      setHoverTwo(false);
      setHoverThree(false);
      setHoverFour(false);
    }
  };
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
  };

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
  };
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
  };
  return (
    <>
      <div className='block sm:hidden z-10' onClick={handleClick}>
        <Hamburger className={styles.burgerInner} toggled={isOpen} rounded toggle={setOpen}/>
      </div>
      <div className='sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in 300'>
        <ul>
          <li>
            <Link href="/artists">
              <a onMouseEnter={handleHoverOne} onClick={handleExitHome}>
                artists.
              </a>
            </Link>
          </li>
          <li>
            <Link href="/music">
              <a onMouseEnter={handleHoverOne} onClick={handleExitHome}>
                music.
              </a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a onMouseEnter={handleHoverTwo} onClick={handleExit}>
                shop.
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a onMouseEnter={handleHoverThree} onClick={handleExit}>
                about.
              </a>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <a onMouseEnter={handleHoverThree} onClick={handleExit}>
                events.
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
