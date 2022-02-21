import { Author } from "./Author";

export type Story = {
  id: number;
  title: string;
  author: Author;
  time: number;
  score: number;
};
