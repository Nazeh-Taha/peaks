import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    width: "85%",
    margin: "auto",
    "@media (max-width:780px)": {
      width: "95%",
    },
  },
}));
