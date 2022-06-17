import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import PokeStatus from "../Pages/PokeStatus";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"Detalhes"} element={<PokeStatus />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
