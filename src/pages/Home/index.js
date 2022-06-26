import { useEffect } from "react";
import { getHomeNews } from "../../api/home.api";
import TitleNewsCard from "../../components/TitleNewsCard";
import { useStyles } from "./styles";

function Home() {
  const classes = useStyles();
  useEffect(() => {
    (async () => {
      console.log(await getHomeNews());
    })();
  }, []);
  return (
    <>
      <section>
        <div className={classes.topStoriesContainer}>
          <TitleNewsCard />
          <TitleNewsCard />
          <TitleNewsCard />
          <TitleNewsCard />
          <TitleNewsCard />
        </div>
        <div className={classes.lastStoriesContainer}>
          <TitleNewsCard />
          <TitleNewsCard />
          <TitleNewsCard />
        </div>
      </section>
    </>
  );
}
export default Home;
