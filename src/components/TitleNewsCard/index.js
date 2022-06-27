import { useStyles } from "./styles";

function TitleNewsCard({ cardTitle }) {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <h5>{cardTitle}</h5>
    </div>
  );
}
export default TitleNewsCard;
