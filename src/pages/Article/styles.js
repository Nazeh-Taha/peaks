import { makeStyles } from "@mui/styles";
import { cardColor } from "../../variables/colorsVariables";

export const useStyles = makeStyles(() => ({
  container: {
    marginTop: 60,
  },
  titlesContainer: {
    width: "50%",
    "@media (max-width:900px)": {
      width: "100%",
    },
    padding: "10px 0",
    borderBottom: "1px solid #979797",
    marginTop: 10,
  },
  bodyContainer: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    "@media (max-width:500px)": {
      gridTemplateColumns: "1fr",
    },
    gap: 10,
  },
  bodyText: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 15,
    "& img": {
      width: "100%",
      maxHeight: 300,
    },
  },
  imageContainer: {
    justifySelf: "center",
    backgroundColor: cardColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 300,
    marginTop: 15,
    "@media (max-width:500px)": {
      gridRowStart: 1,
    },
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
}));
