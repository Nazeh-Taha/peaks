import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    width: "85%",
    margin: "0 auto",
    flexGrow: 1,
    "@media (max-width:900px)": {
      width: "95%",
    },
  },
}));
