import "./App.css";
import Auth from "./Components/Auth/Auth";
import Search from "./Components/Search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.counter.isLoggedIn);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={!isLoggedIn ? <Search /> : <Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
