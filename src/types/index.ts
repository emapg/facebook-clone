export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
  shares: number;
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  timestamp: string;
  likes: number;
}