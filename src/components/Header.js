import React from "react";
import "./Header.css";
import metaPunkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLogo">
        <img src={metaPunkLogo} className="punkLogo" alt="meta-punk-logo" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} className="searchIcon" alt="search-box-icon" />
        </div>
        <input
          placeholder="Collection, item or user.."
          className="sarchInput"
        />
      </div>
      <div className="headerMenus">
        <p className="menuItem">Drops</p>
        <p className="menuItem">Marketplace</p>
        <p className="menuItem">Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img className="themeSwitchIcon" src={themeSwitchIcon} alt="" />
        </div>
      </div>

      <div className="loginBtn">GET IN</div>
    </div>
  );
};

export default Header;
