import { useEffect } from "react";
import { useStyles } from "./styles";
import bookmarkOn from "../../assets/icons/bookmark-on.svg";
import bookmarkOff from "../../assets/icons/bookmark-off.svg";

function ToastMessage({ open, handleClose, type, message }) {
  const classes = useStyles();
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 900);
    return () => clearTimeout(timer);
  }, [handleClose]);

  return open ? (
    <div
      className={classes.toastContainer}
      style={{ backgroundColor: type === "add" ? "#388E3C" : "#D32F2F" }}
    >
      {type === "add" ? (
        <div className={classes.toastMessage}>
          <img src={bookmarkOn} alt={"logo"} />
          <p>saved to bookmarks</p>
        </div>
      ) : (
        <div className={classes.toastMessage}>
          <img src={bookmarkOff} alt={"logo"} />
          <p>removed from bookmarks</p>
        </div>
      )}
    </div>
  ) : null;
}
export default ToastMessage;
