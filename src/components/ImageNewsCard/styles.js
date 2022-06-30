import { makeStyles } from "@mui/styles";
import {
  cardColor,
  wightColor,
  greenBoard,
} from "../../variables/colorsVariables";

export const useStyles = makeStyles(() => ({
  cardContainer: {
    backgroundColor: cardColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 250,
    position: "relative",
    cursor: "pointer",
  },
  otherTypeBoard: {
    borderBottom: `4px solid ${greenBoard}`,
  },
  sportTypeBoard: {
    borderBottom: `4px solid #D32F2F`,
  },
  cultureTypeBoard: {
    borderBottom: `4px solid #FFCA28`,
  },
  LifeStyleTypeBoard: {
    borderBottom: `4px solid #2196F3`,
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
