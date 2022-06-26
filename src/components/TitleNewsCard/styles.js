import { makeStyles } from "@mui/styles";
import { titleCardColor, greenBoard } from "../../variables/colorsVariables";

export const useStyles = makeStyles(() => ({
  cardContainer: {
    minHeight: 140,
    backgroundColor: titleCardColor,
    borderBottom: `3px solid ${greenBoard}`,
  },
}));
