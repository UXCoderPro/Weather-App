import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiSolidSearch } from "react-icons/bi";

{
  /* <BiSolidSearch /> */
}

const SearchBar = ({ onChange, value, onKeyDown }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ width: "40px" }}
      animate={{ width: open ? "252px" : "40px" }}
      transition={{ duration: 0.3 }}
      className="flex justify-start items-center bg-bgShade text-white rounded-full overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-center items-center w-10 h-10 bg-bgShade rounded-full text-white"
      >
        <BiSolidSearch size={20} />
      </button>
      {open && (
        <input
          type="text"
          onKeyDown={onKeyDown}
          value={value}
          onChange={onChange}
          placeholder="Search.."
          className="bg-bgShade text-white placeholder:text-textShade outline-none font-publicSans text-sm placeholder:text-xs"
        />
      )}
    </motion.div>
  );
};

export default SearchBar;
