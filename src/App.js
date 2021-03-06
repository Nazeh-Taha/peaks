import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Article from "./pages/Article";
import BookMarks from "./pages/BookMarks";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { makeAppResourcesStates } from "./store";
const [ContextProvider, useCustomContext] = makeAppResourcesStates();
export { useCustomContext };

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <ContextProvider>
        <Header />
        <Container>
          <Content />
        </Container>
      </ContextProvider>
      <Footer />
    </div>
  );
}

function Content() {
  const [state, dispatch] = useCustomContext();

  function handleOpenArticle(articleId) {
    dispatch({
      type: "goToArticlePage",
      payload: articleId,
    });
  }

  switch (state.contentType) {
    case "home":
      return <Home handleOpenArticle={handleOpenArticle} />;
    case "article":
      return <Article />;
    case "bookmarks":
      return <BookMarks handleOpenArticle={handleOpenArticle} />;
    case "search":
      return <Search handleOpenArticle={handleOpenArticle} />;
    default:
      return null;
  }
}

export default App;
