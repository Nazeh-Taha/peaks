import { useStyles } from "./styles";
import searchIcon from "../../assets/icons/search-icon.svg";
import { useRef, useState } from "react";
import { useOutside } from "../../utils/hooks";

function SearchBox({ searchText, handleChangeSearchText }) {
  const classes = useStyles();
  const textInput = useRef(null); // search input
  const textContainer = useRef(null); // search container
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchIsOpen((prev) => !prev);
    !searchIsOpen ? textInput.current.focus() : textInput.current.blur();
  };

  const handleFocusOut = () => {
    if (!searchText) {
      setSearchIsOpen(false);
      textInput.current.blur();
    }
  };

  useOutside(textContainer, handleFocusOut); // close search when clicked outside

  return (
    <div
      className={`${classes.searchContainer} ${
        searchIsOpen ? classes.openSearch : classes.closeSearch
      }`}
      ref={textContainer}
    >
      <input
        placeholder="Search all news"
        ref={textInput}
        value={searchText}
        onChange={handleChangeSearchText}
      />
      <img src={searchIcon} alt="Search" onClick={handleSearchClick} />
    </div>
  );
}
export default SearchBox;
