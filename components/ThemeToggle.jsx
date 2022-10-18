import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBandcamp, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import {faLightbulb} from "@fortawesome/free-regular-svg-icons"
import Links from "./Links";

const bulb = <FontAwesomeIcon className="lightBulb" icon={faLightbulb} />;
const moon = <FontAwesomeIcon className="moon"  icon={faMoon} />;

// const soundCloud = <FontAwesomeIcon icon={faSoundcloud} />;
// const searchIcon = <FontAwesomeIcon icon={faSearch} />;

const ToggleButton = styled.button`
  --toggle-width: 80px;
  --toggle-height: 38px;
  --toggle-padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  line-height: 1;
  border: 0;
  cursor: pointer;
  transition: background 0.25s ease-in-out;
`;

const ToggleThumb = styled.div
` display: flex;
  transition: transform 0.25s ease-in-out;
  transform: ${(p) =>
    p.activeTheme === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
`;




const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);


  return (
    <div className="themeToggleContainer">
      {/* <Links activeTheme={activeTheme} />  */}
      <ToggleButton aria-label={`Change to ${inactiveTheme} mode`} title={`Change to ${inactiveTheme} mode`} type="button" onClick={() => setActiveTheme(inactiveTheme)} >
        <ToggleThumb activeTheme={activeTheme} />
          <div aria-hidden={true} className="toggleItems">
              {activeTheme === "light" ? moon : bulb}
              {/* <p>THEME TOGGLE</p>   */}
          </div>
        </ToggleButton>
    </div>
    
  );
};

export default ThemeToggle;