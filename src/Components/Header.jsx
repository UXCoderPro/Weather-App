import React from "react";
import SearchBar from "./SearchBar";
import logo from "../assets/logo/logo.svg";

const Header = ({ onChange, value, onKeyDown }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <img src={logo} alt="Abdul Aziz" />
      <SearchBar onChange={onChange} value={value} onKeyDown={onKeyDown} />
    </div>
  );
};

export default Header;
