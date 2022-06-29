import { useEffect } from "react";
import { getHomeNews } from "../../api/home.api";
import BookMarkButton from "../../components/BookMarkButton";
import ImageNewsCard from "../../components/ImageNewsCard";
import Loader from "../../components/Loader";
import SelectInput from "../../components/SelectInput";
import TitleNewsCard from "../../components/TitleNewsCard";
import { useStyles } from "./styles";
import { useHomeReducer } from "./reducer";
import { extractContent } from "../../utils/helpers";

function Home() {
  const classes = useStyles();
  const [state, dispatch] = useHomeReducer();

  const {
    firstTopNews,
    secondTopNews,
    sportsNews,
    firstSectionLoading,
    secondSectionLoading,
    orderByValue,
  } = state;

  useEffect(() => {
    dispatch({
      type: "resetLoader",
    });
    (async () => {
      Promise.all([
        await getHomeNews({ orderBy: orderByValue }),
        await getHomeNews({
          section: ["sport", "culture", "life", "style"],
          size: 3,
          orderBy: orderByValue,
        }),
      ]).then((values) => {
        dispatch({
          type: "setHomeDate",
          firstPayload: values[0],
          secondPayload: values[1],
        });
      });
    })();
  }, [dispatch, orderByValue]);

  function handleChangeSelect(event) {
    dispatch({
      type: "setOrderBy",
      payload: event.target.value,
    });
  }

  return (
    <>
      <div className={classes.titleHeader}>
        <h1>Top stories</h1>
        <div className={classes.flexBoxContainer}>
          <BookMarkButton label="View BOOKMARK" active={true} />
          <SelectInput
            selectValue={orderByValue}
            handleChangeSelect={handleChangeSelect}
          />
        </div>
      </div>

      {/* Story section */}
      {firstSectionLoading ? (
        <Loader />
      ) : (
        <section>
          <div className={classes.topStoriesContainer}>
            {firstTopNews.map((news, index) => {
              if (index < 3) {
                return (
                  <ImageNewsCard
                    cardTitle={news.webTitle}
                    cardHigh={index === 0 ? "auto" : "sm"}
                    cardImage={news?.fields?.thumbnail}
                    cardDescription={extractContent(news?.fields?.body).slice(
                      0,
                      index === 0 ? 300 : 100
                    )}
                    key={news.id}
                  />
                );
              } else {
                return (
                  <TitleNewsCard cardTitle={news.webTitle} key={news.id} />
                );
              }
            })}
          </div>
          <div className={classes.lastStoriesContainer}>
            {secondTopNews.map((news) => (
              <ImageNewsCard
                cardHigh={"lg"}
                cardTitle={news.webTitle}
                cardImage={news?.fields?.thumbnail}
                key={news.id}
              />
            ))}
          </div>
        </section>
      )}
      {/* news section */}
      <h3 className={classes.sportTitle}>Sports</h3>
      {secondSectionLoading ? (
        <Loader />
      ) : (
        <section className={classes.lastStoriesContainer}>
          {sportsNews.map((news) => (
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
export default Home;
