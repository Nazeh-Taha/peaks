import Container from "../Container";
import logo from "../../assets/images/Logo_White.png";
import { useStyles } from "./styles";
import SearchBox from "../SearchBox";

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <Container>
        <div className={classes.logoContainer}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.searchContainer}>
          <SearchBox />
        </div>
      </Container>
    </div>
  );
}
export default Header;
