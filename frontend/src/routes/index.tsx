import { BrowserRouter, Route, Routes } from "react-router";
import { MemberListPage } from "../pages/MemberListPage";
import { MemberDetailPage } from "../pages/MemberDetailPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MemberListPage />} />
        <Route path="/members/:id" element={<MemberDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
