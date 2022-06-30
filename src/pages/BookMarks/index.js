import { useEffect } from "react";
import { getBookmarks } from "../../api/bookmarks.api";
import ImageNewsCard from "../../components/ImageNewsCard";
import Loader from "../../components/Loader";
import SelectInput from "../../components/SelectInput";
import { extractContent } from "../../utils/helpers";
import { useLocalStorage } from "../../utils/hooks";
import { useBookMarksReducer } from "./reducer";
import { useStyles } from "./styles";

function BookMarks({ handleOpenArticle }) {
  const classes = useStyles();
  const [state, dispatch] = useBookMarksReducer();
  const [ids] = useLocalStorage("bookmarks", []);
  const { loading, orderByValue, bookMarks } = state;

  useEffect(() => {
    (async () => {
      if (ids.length) {
        dispatch({
          type: "resetLoader",
        });
        dispatch({
          type: "setBookmarksData",
          payload: await getBookmarks(ids, orderByValue),
        });
      } else {
        dispatch({
          type: "offLoader",
        });
      }
    })();
  }, [dispatch, ids, orderByValue]);

  function handleChangeSelect(event) {
    dispatch({
      type: "setOrderBy",
      payload: event.target.value,
    });
  }

  return (
    <>
      <div className={classes.titleHeader}>
        <h1>All bookmark</h1>
        <div className={classes.flexBoxContainer}>
          <SelectInput
            selectValue={orderByValue}
            handleChangeSelect={handleChangeSelect}
          />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <section className={classes.bookMarksContainer}>
          {bookMarks.map((news) => (
            <div onClick={() => handleOpenArticle(news.id)} key={news.id}>
              <ImageNewsCard
                cardHigh={"lg"}
                cardTitle={news.webTitle}
                cardImage={news?.fields?.thumbnail}
                cardDescription={extractContent(news?.fields?.body).slice(
                  0,
                  100
                )}
              />
            </div>
          ))}
        </section>
      )}
    </>
  );
}
export default BookMarks;
