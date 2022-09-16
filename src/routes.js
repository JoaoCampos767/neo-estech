import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Table from "./pages/Table";
import Chart from "./pages/Chart";
import Card from "./pages/Card";

export default function Rotas() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/table" element={<Table />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}
