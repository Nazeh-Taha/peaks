import { makeStyles } from "@mui/styles";
import {
  blueColor,
  wightColor,
  liteBlueColor,
} from "../../variables/colorsVariables";
export const useStyles = makeStyles(() => ({
  buttonContainer: {
    padding: "8px 15px",
    backgroundColor: blueColor,
    color: wightColor,
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.06)",
    borderRadius: 4,
    border: "none",
    textTransform: "uppercase",
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: liteBlueColor,
    },
    "& div:first-child": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 6,
    },
  },
}));
