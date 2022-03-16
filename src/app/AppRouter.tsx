import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BooksListPage from "../features/books/pages/booksList";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BooksListPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
