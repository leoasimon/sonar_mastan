import axios from "axios";
import { Book } from "./types";

export const apiUrl = "https://anapioficeandfire.com/api/books";

export const fetch = () => {
  return axios.get<Book[]>(apiUrl);
};

export const fetchOne = (id: number) => {
  return axios.get<Book>(`${apiUrl}/${id}`);
};
