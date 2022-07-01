import { useCallback } from "react";
import { useStyles } from "./styles";

function TitleNewsCard({ cardTitle, handleClick, type }) {
  const classes = useStyles();
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
      onClick={handleClick}
      test-id={`${cardTitle}-card`}
      data-testid="titleNewsCard-test-id"
    >
      <h5>{cardTitle}</h5>
    </div>
  );
}
export default TitleNewsCard;
