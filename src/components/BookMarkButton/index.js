import { useStyles } from "./styles";
import bookmarkOn from "../../assets/icons/bookmark-on.svg";
import bookmarkOff from "../../assets/icons/bookmark-off.svg";

function BookMarkButton(props) {
  const classes = useStyles();
  const { label, active = false, handleClick } = props;

  return (
    <button onClick={handleClick} className={classes.buttonContainer}>
      <div>
        <img src={active ? bookmarkOff : bookmarkOn} alt={"logo"} />
        {label}
      </div>
    </button>
  );
}
export default BookMarkButton;
