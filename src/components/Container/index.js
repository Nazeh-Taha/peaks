import { useStyles } from "./styles";

function Container({ children }) {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
}
export default Container;
