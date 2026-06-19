import { Routes, Route } from "react-router-dom";
import PasswordPage from "../pages/PasswordPage";
import IntroPage from "../pages/IntroPage";
import QuestionsPage from "../pages/QuestionsPage";
import AppreciationPage from "../pages/AppreciationPage";
import FinalPage from "../pages/FinalPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PasswordPage />} />
      <Route path="/intro" element={<IntroPage />} />
      <Route path="/questions" element={<QuestionsPage />} />
      <Route path="/appreciation" element={<AppreciationPage />} />
      <Route path="/final" element={<FinalPage />} />
    </Routes>
  );
}