import { useStyles } from "./styles";
import emptyImage from "../../assets/images/Logo_White.png";
function ImageNewsCard(props) {
  const classes = useStyles();
  const { cardHigh = "default", cardTitle, cardImage, cardDescription } = props;
  const cardHighPx = { sm: 250, lg: 350, default: "auto" };

  return (
    <div
      className={classes.cardContainer}
      style={{
        height: cardHighPx[cardHigh],
      }}
    >
      <img
        src={cardImage ? cardImage : emptyImage}
        alt="empty"
        className={cardImage ? classes.fullImage : classes.emptyImage}
      />
      <div className={classes.titleContainer}>
        <h5>{cardTitle}</h5>
        <p>{cardDescription ? cardDescription + "..." : ""}</p>
      </div>
    </div>
  );
}
export default ImageNewsCard;
