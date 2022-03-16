import axios from "axios";
import { Character } from "./types";

export const fetchAll = (urls: string[]) => {
  return Promise.all(urls.map((url) => axios.get<Character>(url)));
};
