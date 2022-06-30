import { useEffect } from "react";
import { getArticleById } from "../../api/article.api";
import BookMarkButton from "../../components/BookMarkButton";
import { useArticleReducer } from "./reducer";
import { useStyles } from "./styles";
import { useCustomContext } from "../../App";
import Loader from "../../components/Loader";
import emptyImage from "../../assets/images/Logo_White.png";
import { useLocalStorage } from "../../utils/hooks";
import ToastMessage from "../../components/ToastMessage";

function Article() {
  const classes = useStyles();
  const [state, dispatch] = useArticleReducer();
  const [ids, setIdes] = useLocalStorage("bookmarks", []);
  const [appState] = useCustomContext();
  const { article, loading, isBookMark, toastIsOpen } = state;
  const { articleId } = appState;
  const { fields, webPublicationDate, webTitle } = article;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    (async () => {
      if (articleId) {
        dispatch({
          type: "setArticleData",
          payload: await getArticleById(articleId),
          isBookMark: ids.includes(articleId),
        });
      }
    })();
  }, [articleId, dispatch, ids]);

  function handleAddBookMark(id) {
    dispatch({
      type: "addRemoveBookMark",
    });
    isBookMark
      ? setIdes(ids.filter((item) => item !== id))
      : setIdes([...ids, id]);
  }
  function handleCloseToastMessage() {
    dispatch({
      type: "closeToast",
    });
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={classes.container}>
          <BookMarkButton
            label={isBookMark ? "REMOVE BOOKMARK" : "ADD BOOKMARK"}
            active={isBookMark}
            handleClick={() => handleAddBookMark(articleId)}
          />
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
          <ToastMessage
            open={toastIsOpen}
            handleClose={handleCloseToastMessage}
            type={isBookMark ? "add" : "remove"}
          />
        </div>
      )}
    </>
  );
}
export default Article;
