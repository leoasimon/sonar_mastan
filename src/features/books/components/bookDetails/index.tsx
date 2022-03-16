import { Space, Typography } from "antd";
import React from "react";
import CharactersList from "../../../characters/charactersList";
import { Book } from "../../types";

interface BookDetailsProps {
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  return (
    <Space direction="vertical">
      <Typography.Title level={3}>Characters in this book:</Typography.Title>
      <CharactersList urls={book.characters} />
    </Space>
  );
};

export default BookDetails;
