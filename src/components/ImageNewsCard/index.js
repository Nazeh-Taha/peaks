import { useStyles } from "./styles";
import emptyImage from "../../assets/images/Logo_White.png";
import { useCallback } from "react";
function ImageNewsCard(props) {
  const classes = useStyles();
  const {
    cardHigh = "default",
    cardTitle,
    cardImage,
    cardDescription,
    type,
    handleClick,
  } = props;
  const cardHighPx = { sm: 250, lg: 350, default: "auto" };

  const handleBoardColor = useCallback(
    (type) => {
      switch (type) {
        case "sport":
          return classes.sportTypeBoard;
        case "culture":
          return classes.cultureTypeBoard;
        case "life":
        case "style":
          return classes.lifeStyleTypeBoard;
        default:
          return classes.otherTypeBoard;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [type]
  );

  return (
    <div
      className={`${classes.cardContainer} ${handleBoardColor(type)}`}
      style={{
        height: cardHighPx[cardHigh],
      }}
      onClick={handleClick}
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
