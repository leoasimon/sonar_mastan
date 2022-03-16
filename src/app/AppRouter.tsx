import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BookDetailsPage from "../features/books/pages/bookDetails";
import BooksListPage from "../features/books/pages/booksList";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BooksListPage />} />
      <Route path="/book/:bookId" element={<BookDetailsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
