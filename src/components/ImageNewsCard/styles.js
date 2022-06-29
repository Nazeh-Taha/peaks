import { makeStyles } from "@mui/styles";
import {
  cardColor,
  wightColor,
  greenBoard,
} from "../../variables/colorsVariables";

export const useStyles = makeStyles(() => ({
  cardContainer: {
    backgroundColor: cardColor,
    borderBottom: `3px solid ${greenBoard}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 250,
    position: "relative",
  },
  fullImage: {
    width: "100%",
    height: "100%",
  },
  emptyImage: {
    width: "30%",
    height: "20%",
  },
  titleContainer: {
    backgroundColor: "rgba(9, 53, 123, 0.9)",
    padding: 10,
    width: "100%",
    minHeight: "25%",
    color: wightColor,
    position: "absolute",
    boxSizing: "border-box",
    left: 0,
    bottom: 0,
    "& p": {
      margin: "5px 0",
    },
  },
}));
