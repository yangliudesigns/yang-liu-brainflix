import React from 'react'
import searchIcon from "../../assets/images/search.svg"
import "./SearchBar.scss"


export default function SearchBar() {
  return (
    <div className="search-bar">

        <img 
        className="search-bar__icon" 
        src={searchIcon} 
        alt="search-icon" 
        />

        <input 
        className="search-bar__field paragraph-body" 
        type="search" 
        name="search"
        placeholder="Search"
        />
        
    </div>
  )
}
