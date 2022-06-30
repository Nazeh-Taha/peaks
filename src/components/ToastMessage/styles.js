import { makeStyles } from "@mui/styles";
import { wightColor } from "../../variables/colorsVariables";

export const useStyles = makeStyles(() => ({
  toastContainer: {
    width: "100%",
    height: 32,
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    left: 0,
  },
  toastMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    color: wightColor,
    textTransform: "uppercase",
  },
}));
