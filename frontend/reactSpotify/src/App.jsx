import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import HomeSY from "./components/HomeSY";
function App() {
  const [loggedIn, setLoggedIN] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homeSY" element={<HomeSY />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
