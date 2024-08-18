import "./Header.scss";

import React from 'react'
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import SearchBar from "../SearchBar/SearchBar";
import SiteLogo from "../../assets/images/BrainFlix-logo.svg";
import uploadIcon from "../../assets/images/upload.svg";


export default function Header() {
  return (

    <header className="header">

      <div className="header__logo">
        <img 
        className="logo" 
        src={SiteLogo} 
        alt="This is logo"  
        />
      </div>
      
      <div className="header__search">
        <SearchBar />
      </div>
      
      <div className="header__upload-button">
        <Button 
        text="UPLOAD"
        icon={uploadIcon}
        />
      </div>

      <div className="header__avatar">
        <Avatar imgSrc={imgSrc}/>
      </div>


    </header>
  )
}
