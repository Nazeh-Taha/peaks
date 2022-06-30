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
    color: wightColor,
    padding: 10,
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
  LifestyleTypeBoard: {
    borderBottom: `4px solid #2196F3`,
  },
}));
