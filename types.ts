export interface Suggestion {
  userId: string;
  username: string;
  id: number;
  email: string;
  avatar: string;
}

export interface Post {
  id: number;
  username: string;
  userImg: string;
  img: string;
  caption: string;
}
