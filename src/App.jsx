import "./App.css";
import BackToTop from "./common/BackToTop";
import GildedGames from "./components/GildedGames";
import Hero from "./components/Hero";
import NftUtility from "./components/NftUtility";

function App() {
  return (
    <>
      <Hero />
      <NftUtility />
      <GildedGames />
      <BackToTop />
    </>
  );
}

export default App;
