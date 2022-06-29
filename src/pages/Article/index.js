import { useEffect } from "react";
import { getArticleById } from "../../api/home.api";
import BookMarkButton from "../../components/BookMarkButton";
import { useArticleReducer } from "./reducer";
import { useStyles } from "./styles";
import { useCustomContext } from "../../App";
import Loader from "../../components/Loader";
import emptyImage from "../../assets/images/Logo_White.png";

function Article() {
  const classes = useStyles();
  const [state, dispatch] = useArticleReducer();
  const [appState] = useCustomContext();
  const { article, loading } = state;
  const { articleId } = appState;
  const { fields, webPublicationDate, webTitle } = article;

  useEffect(() => {
    (async () => {
      if (articleId) {
        dispatch({
          type: "resetLoader",
        });
        dispatch({
          type: "setArticleData",
          payload: await getArticleById(articleId),
        });
      }
    })();
  }, [articleId, dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={classes.container}>
          <BookMarkButton label="View BOOKMARK" active={true} />
          <section className={classes.titlesContainer}>
            <p>{webPublicationDate}</p>
            <h3>{webTitle}</h3>
            <h5>{fields?.headline}</h5>
          </section>
          {fields ? (
            <section className={classes.bodyContainer}>
              <div
                className={classes.bodyText}
                dangerouslySetInnerHTML={{ __html: fields?.body }}
              />
              <div className={classes.imageContainer}>
                <img
                  src={fields?.thumbnail ? fields?.thumbnail : emptyImage}
                  alt="empty"
                />
              </div>
            </section>
          ) : null}
        </div>
      )}
    </>
  );
}
export default Article;
