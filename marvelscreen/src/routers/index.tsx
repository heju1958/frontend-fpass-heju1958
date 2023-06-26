import { Routes, Route } from "react-router-dom";

import MarvelPage from "../pages/MarvelPage";
import Dashboard from "../pages/Dashboard";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/marvelpage/:name" element={<MarvelPage />} />
    </Routes>
  );
};

export default RoutesMain;
