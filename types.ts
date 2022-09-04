export interface Suggestion {
  userId: string;
  username: string;
  id: number;
  email: string;
  avatar: string;
}

// fake data FAKERJS

export interface Post {
  id: number | string;
  username: string;
  userImg: string;
  img: string;
  caption: string;
}

/// type post in firebase

export interface PostFireBase {
  caption: string;
  image: string;
  profileImg: string;
  timestamp: string;
  username: string;
}
