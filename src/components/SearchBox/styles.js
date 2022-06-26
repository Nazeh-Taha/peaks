import { makeStyles } from "@mui/styles";
import { wightColor, liteBlueColor, placeholderColor } from "../../variables";

export const useStyles = makeStyles(() => ({
  searchContainer: {
    display: "flex",
    borderBottom: `2px solid ${wightColor}`,
    padding: "0 30px 0 0",
    height: 35,
    alignItems: "center",
    marginBottom: 1,
    "& img": {
      color: wightColor,
      width: "20px",
      height: "20px",
      paddingLeft: 30,
      cursor: "pointer",
    },
    "& input": {
      height: "100%",
      boxSizing: "border-box",
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      color: wightColor,
      fontSize: 15,
      "&::placeholder": {
        color: placeholderColor,
        fontSize: 15,
      },
    },
  },

  openSearch: {
    background: liteBlueColor,
    "& input": {
      width: "100%",
      paddingLeft: 30,
    },
  },
  closeSearch: {
    "& input": {
      width: 0,
      paddingLeft: 0,
    },
  },
}));
