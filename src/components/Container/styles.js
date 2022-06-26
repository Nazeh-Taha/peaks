import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    width: "80%",
    margin: "auto",
    "@media (max-width:780px)": {
      width: "90%",
    },
  },
}));
