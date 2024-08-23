import "./Header.scss";
import React from 'react'
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import SearchBar from "../SearchBar/SearchBar";
import SiteLogo from "../../assets/images/BrainFlix-logo.svg";
import uploadIcon from "../../assets/images/upload.svg";
import imgSrc from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";



export default function Header() {
  return (

    <header className="header">

      <div className="header__container">

        <div className="header__logo">
          <Link to="/">
            <img 
            className="logo" 
            src={SiteLogo} 
            alt="This is logo"  
            />
          </Link>
        </div>
        
        <div className="header__search">
          <SearchBar />
        </div>
        
        <div className="header__avatar">
          <Avatar imgSrc={imgSrc}/>
        </div>

        <div className="header__upload-button">
        <Link to="/upload">
            <Button 
            text="UPLOAD"
            icon={uploadIcon}
            />
          </Link>
        </div>


      </div>

    </header>
  )
}
