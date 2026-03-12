export type ArticleProps = {
  id: string;
  title: string;
  url: string;
  created_at: string;
  updated_at: string;
  likes_count: number;
  comments_count: number;
  stocks_count: number;
  reactions_count: number;
  tags: {name: string; versions: string[]}[];
};
