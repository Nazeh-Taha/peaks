import { makeStyles } from "@mui/styles";
import {
  titleCardColor,
  greenBoard,
  wightColor,
} from "../../variables/colorsVariables";

export const useStyles = makeStyles(() => ({
  cardContainer: {
    height: 140,
    backgroundColor: titleCardColor,
    borderBottom: `3px solid ${greenBoard}`,
    color: wightColor,
    padding: 10,
  },
}));
