import { useStyles } from "./styles";
import { useCustomContext } from "../../App";
import Loader from "../../components/Loader";
import { useCallback, useEffect, useRef } from "react";
import { useSearchReducer } from "./reducer";
import SelectInput from "../../components/SelectInput";
import { getHomeNews } from "../../api/home.api";
import { extractContent } from "../../utils/helpers";
import ImageNewsCard from "../../components/ImageNewsCard";
import { useDebounce } from "../../utils/hooks";
import BookMarkButton from "../../components/BookMarkButton";

function Search({ handleOpenArticle }) {
  const classes = useStyles();
  const [state, dispatch] = useSearchReducer();
  const [appState, appDispatch] = useCustomContext();
  const { loading, orderByValue, searchNews, loadingMore, page, totalPages } =
    state;

  const debouncedSearchTerm = useDebounce(appState.searchText, 500);

  const observer = useRef(null);
  const prevSearchTerm = useRef(debouncedSearchTerm);
  // get the last element
  const lastArticle = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          dispatch({
            type: "loadMorePage",
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [dispatch, loading]
  );

  function handleChangeSelect(event) {
    dispatch({
      type: "setOrderBy",
      payload: event.target.value,
    });
  }
  function handleGotoBookmarks() {
    appDispatch({
      type: "goToBookmarksPage",
    });
  }
  console.log(totalPages, page);

  useEffect(() => {
    if (debouncedSearchTerm !== prevSearchTerm.current) {
      dispatch({
        type: "resetPage",
      });
    }
  }, [debouncedSearchTerm, dispatch]);

  useEffect(() => {
    (async () => {
      if (debouncedSearchTerm) {
        if (page === 1) {
          dispatch({
            type: "resetLoader",
          });
        }
        if (page <= totalPages) {
          dispatch({
            type: page === 1 ? "setSearchData" : "setMoreData",
            payload: await getHomeNews({
              section: ["news"],
              size: 15,
              orderBy: orderByValue,
              page,
              searchTerm: debouncedSearchTerm,
            }),
          });
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm, dispatch, orderByValue, page]);

  return (
    <>
      <div className={classes.titleHeader}>
        <h1>Search results</h1>
        <div className={classes.flexBoxContainer}>
          <BookMarkButton
            label="View BOOKMARK"
            handleClick={handleGotoBookmarks}
          />
          <SelectInput
            selectValue={orderByValue}
            handleChangeSelect={handleChangeSelect}
          />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <section className={classes.searchResultContainer}>
          {searchNews.map((news, index) =>
            searchNews.length === index + 1 ? (
              <div ref={lastArticle} key={index}>
                <ImageNewsCard
                  cardHigh={"lg"}
                  cardTitle={news.webTitle}
                  cardImage={news?.fields?.thumbnail}
                  cardDescription={extractContent(news?.fields?.body).slice(
                    0,
                    100
                  )}
                  type={news?.sectionId}
                  handleClick={() => handleOpenArticle(news.id)}
                />
              </div>
            ) : (
              <ImageNewsCard
                cardHigh={"lg"}
                cardTitle={news.webTitle}
                cardImage={news?.fields?.thumbnail}
                cardDescription={extractContent(news?.fields?.body).slice(
                  0,
                  100
                )}
                type={news?.sectionId}
                key={index}
                handleClick={() => handleOpenArticle(news.id)}
              />
            )
          )}
        </section>
      )}
      {loadingMore && <Loader />}
    </>
  );
}
export default Search;
