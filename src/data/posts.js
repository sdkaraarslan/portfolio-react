export const posts = [
  {
    title: "The inspiration and joy of life that comes with plants",
    description:
      "In this post, we will discuss the importance of plants and how they play a crucial role in our lives. Plants are not only a source of food, but they also provide us with oxygen, which is essential for our survival. They help in reducing the amount of carbon dioxide in the atmosphere and contribute to maintaining the balance of nature.",
    imageUrl: "/gallery/hobbies/first-post/p3-320-240.png",
    date: "2023-02-26T13:39:04.163Z",
    link: "/blog/plants",
  },
  {
    title: "Celebrating New Year's Eve",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sodales leo et dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec nisl sodales neque elementum efficitur sit amet sit amet erat. Aenean ut maximus risus. Pellentes",
    imageUrl: "/gallery/travelling/first-post/germany-two-320-240.jpg",
    date: "2023-02-26T13:39:04.163Z",
    link: "/blog/new-years-eve",
  },
  {
    title: "Test post 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sodales leo et dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec nisl sodales neque elementum efficitur sit amet sit amet erat. Aenean ut maximus risus. Pellentes",
    imageUrl: "https://via.placeholder.com/320x180",
    date: "2023-02-26T13:39:04.163Z",
  },
  {
    title: "Test post 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sodales leo et dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec nisl sodales neque elementum efficitur sit amet sit amet erat. Aenean ut maximus risus. Pellentes",
    imageUrl: "https://via.placeholder.com/320x180",
    date: "2023-02-26T13:39:04.163Z",
  },
  {
    title: "Test post 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sodales leo et dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec nisl sodales neque elementum efficitur sit amet sit amet erat. Aenean ut maximus risus. Pellentes",
    imageUrl: "https://via.placeholder.com/320x180",
    date: "2023-02-26T13:39:04.163Z",
  },
  {
    title: "Test post 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sodales leo et dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec nisl sodales neque elementum efficitur sit amet sit amet erat. Aenean ut maximus risus. Pellentes",
    imageUrl: "https://via.placeholder.com/320x180",
    date: "2023-02-26T13:39:04.163Z",
  },
  {
    title: "Test post 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sodales leo et dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec nisl sodales neque elementum efficitur sit amet sit amet erat. Aenean ut maximus risus. Pellentes",
    imageUrl: "https://via.placeholder.com/320x180",
    date: "2023-02-26T13:39:04.163Z",
  },
  {
    title: "Test post 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sodales leo et dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec nisl sodales neque elementum efficitur sit amet sit amet erat. Aenean ut maximus risus. Pellentes",
    imageUrl: "/gallery/hobbies/p1.jpeg",
    date: "2023-02-26T13:39:04.163Z",
  },
  {
    title: "Test post 9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sodales leo et dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec nisl sodales neque elementum efficitur sit amet sit amet erat. Aenean ut maximus risus. Pellentes",
    imageUrl: "https://via.placeholder.com/320x180",
    date: "2023-02-26T13:39:04.163Z",
  },
  {
    title: "Test post 10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sodales leo et dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec nisl sodales neque elementum efficitur sit amet sit amet erat. Aenean ut maximus risus. Pellentes",
    imageUrl: "https://via.placeholder.com/320x180",
    date: "2023-02-26T13:39:04.163Z",
  },
];

export function getPosts(limit = 8) {
  return posts.slice(0, limit);
}
