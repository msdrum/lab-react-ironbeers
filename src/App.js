import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import AllBeers from "./pages/AllBeers";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-beers" element={<AllBeers />} />
      </Routes>
    </div>
  );
}

export default App;
