import Container from "../Container";
import logo from "../../assets/images/Logo_White.png";
import { useStyles } from "./styles";
import SearchBox from "../SearchBox";
import { useCustomContext } from "../../App";
import { useDebounce } from "../../utils/hooks";
import { useEffect } from "react";

function Header() {
  const classes = useStyles();
  const [state, dispatch] = useCustomContext(); // get state and dispatch from context
  const debouncedSearchTerm = useDebounce(state.searchText, 500); // get debounced search term

  function handleChangeSearchText(e) {
    dispatch({
      type: "setSearchText",
      payload: e.target.value,
    });
  }
  function handleBackToHomePage() {
    dispatch({
      type: "backToHomePage",
    });
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch({
        type: "goToSearchPage",
      });
    }
  }, [debouncedSearchTerm, dispatch]);

  return (
    <div className={classes.headerContainer}>
      <Container>
        <div className={classes.logoContainer} onClick={handleBackToHomePage}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.searchContainer}>
          <SearchBox
            searchText={state.searchText}
            handleChangeSearchText={handleChangeSearchText}
          />
        </div>
      </Container>
    </div>
  );
}
export default Header;
