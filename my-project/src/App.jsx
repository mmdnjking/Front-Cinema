import React from "react";

import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main></main>
        <Footer />
      </div>
    </>
  );
}

export default App;
