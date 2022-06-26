import { makeStyles } from "@mui/styles";
import { blueColor } from "../../variables";
export const useStyles = makeStyles(() => ({
  headerContainer: {
    width: "100%",
    backgroundColor: blueColor,
  },
  logoContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: "3%",
    "& img": {
      width: "15%",
    },
  },
  searchContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
}));
