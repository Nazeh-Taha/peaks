import { useStyles } from "./styles";
import { useCustomContext } from "../../App";
import Loader from "../../components/Loader";
import { useEffect } from "react";
import { useSearchReducer } from "./reducer";
import SelectInput from "../../components/SelectInput";
import { getHomeNews } from "../../api/home.api";
import { extractContent } from "../../utils/helpers";
import ImageNewsCard from "../../components/ImageNewsCard";
import { useDebounce } from "../../utils/hooks";

function Search() {
  const classes = useStyles();
  const [state, dispatch] = useSearchReducer();
  const [appState] = useCustomContext();
  const { loading, orderByValue, searchNews } = state;

  const debouncedSearchTerm = useDebounce(appState.searchText, 500);

  function handleChangeSelect(event) {
    dispatch({
      type: "setOrderBy",
      payload: event.target.value,
    });
  }
  useEffect(() => {
    (async () => {
      if (debouncedSearchTerm)
        dispatch({
          type: "resetLoader",
        });
      dispatch({
        type: "setSearchData",
        payload: await getHomeNews({
          section: ["news"],
          size: 15,
          orderBy: orderByValue,
          page: 1,
          searchTerm: debouncedSearchTerm,
        }),
      });
    })();
  }, [debouncedSearchTerm, dispatch, orderByValue]);

  return (
    <>
      <div className={classes.titleHeader}>
        <h1>Search results</h1>
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
        <section className={classes.searchResultContainer}>
          {searchNews.map((news) => (
            <ImageNewsCard
              cardHigh={"lg"}
              cardTitle={news.webTitle}
              cardImage={news?.fields?.thumbnail}
              cardDescription={extractContent(news?.fields?.body).slice(0, 100)}
              key={news.id}
            />
          ))}
        </section>
      )}
    </>
  );
}
export default Search;