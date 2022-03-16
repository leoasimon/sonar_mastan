import { PageHeader, Result } from "antd";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { fetchBooks } from "../../booksSlice";
import BooksList from "../../components/booksList";

const BooksListPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { value: books, status } = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <PageHeader title="A song of ice and fire" subTitle="All the books" />
      {status === "failed" ? (
        <Result status="error" title="An error occured" />
      ) : (
        <BooksList books={books || []} loading={status === "loading"} />
      )}
    </>
  );
};

export default BooksListPage;
