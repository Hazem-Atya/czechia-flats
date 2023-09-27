import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CircularProgress from "@mui/material/CircularProgress";
import { createRoutes } from "./Routes";
import { Layout } from "./layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {createRoutes().map((r, index) => {
            return <Route key={index} path={r.path} element={r.element} />;
          })}
        </Route>
        <Route path="*/*" element={<CircularProgress />} />
      </Routes>
    </Router>
  );
}
