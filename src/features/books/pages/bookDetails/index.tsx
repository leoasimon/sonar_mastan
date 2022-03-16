import { PageHeader, Result, Spin } from "antd";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { fetchBook, selectBookFromList } from "../../booksSlice";
import BookDetails from "../../components/bookDetails";

const BookDetailsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { bookId } = useParams();
  const { current: fechedCurrent, status } = useAppSelector(
    (state) => state.books
  );
  const currentFromList = useAppSelector(selectBookFromList(bookId));
  const navigate = useNavigate();
  const book = currentFromList || fechedCurrent;

  useEffect(() => {
    if (bookId !== undefined && currentFromList === undefined) {
      dispatch(fetchBook(+bookId));
    }
  }, [dispatch, bookId, currentFromList]);

  const title =
    status === "loading" ? (
      <Spin />
    ) : status === "failed" ? (
      "No book found"
    ) : (
      book?.name
    );

  console.log({ status, book });
  return (
    <>
      <PageHeader title={title} onBack={() => navigate("/")} />
      {status === "failed" ? (
        <Result status="error" title={`Unable to fetch book ${bookId}`} />
      ) : status === "idle" && book !== undefined ? (
        <BookDetails book={book} />
      ) : null}
    </>
  );
};

export default BookDetailsPage;
