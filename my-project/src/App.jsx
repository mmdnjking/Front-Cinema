import React from "react";

import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import CurrentlyInCinemas from "./components/Main/Currently In Cinemas/Currently In Cinemas.jsx";
import Top10movies from "./components/Main/Top 10 movies/Top 10 movies.jsx";
import NowShowing from "./components/Main/Now Showing/Now Showing.jsx";
import ComingSoon from "./components/Main/Coming Soon/Coming Soon.jsx";
import BookTickets from "./components/Main/Book tickets.jsx";

function App() {
  return (
    <>
      <body className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <CurrentlyInCinemas/>
          <Top10movies></Top10movies>
          <NowShowing/>
          <ComingSoon/>
          <BookTickets/>
        </main>
        <Footer />
      </body>
    </>
  );
}

export default App;
