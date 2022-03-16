import { List } from "antd";
import React from "react";
import { Book } from "../../types";

interface BooksListProps {
  books: Book[];
  loading: boolean;
}

const BooksList: React.FC<BooksListProps> = ({ books, loading }) => {
  return (
    <List
      pagination={false}
      loading={loading}
      dataSource={books}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={item.name}
            description={item.authors.join(", ")}
          />
        </List.Item>
      )}
    />
  );
};

export default BooksList;
