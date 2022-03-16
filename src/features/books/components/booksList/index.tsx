import { List } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../../booksApi";
import { Book } from "../../types";

interface BooksListProps {
  books: Book[];
  loading: boolean;
}

// + 1 is for the slash between the baseUrl and the book id
const getBookId = (url: string) => url.substring(apiUrl.length + 1);

const BooksList: React.FC<BooksListProps> = ({ books, loading }) => {
  return (
    <List
      pagination={false}
      loading={loading}
      dataSource={books}
      renderItem={(item) => (
        <List.Item
          extra={[
            <Link key="detailLink" to={`/book/${getBookId(item.url)}`}>
              Details
            </Link>,
          ]}
        >
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
