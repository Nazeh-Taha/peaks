import { useState } from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Article from "./pages/Article";
import BookMarks from "./pages/BookMarks";
import Home from "./pages/Home";

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
      <Header />
      <Container>
        <Content />
      </Container>
      <Footer />
    </div>
  );
}

function Content() {
  const [contentType, setContentType] = useState("home");

  switch (contentType) {
    case "home":
      return <Home />;
    case "article":
      return <Article />;
    case "Bookmarks":
      return <BookMarks />;
    default:
      return null;
  }
}

export default App;
