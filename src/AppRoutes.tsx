import { Routes, Route } from "react-router-dom";
import { HomePage } from "./views";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
