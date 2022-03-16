import { List, Space, Typography } from "antd";
import React from "react";
import { Book } from "../../types";

interface BookDetailsProps {
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  console.log({ book });
  //   return <>hello</>;
  return (
    <Space direction="vertical">
      <Typography.Title level={3}>Characters in this book:</Typography.Title>
      <List
        dataSource={book.characters}
        renderItem={(item) => <List.Item title={item}>{item}</List.Item>}
      />
    </Space>
  );
};

export default BookDetails;
