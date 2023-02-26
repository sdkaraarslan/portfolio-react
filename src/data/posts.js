export const posts = [
  {
    title: "Test post 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sodales leo et dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec nisl sodales neque elementum efficitur sit amet sit amet erat. Aenean ut maximus risus. Pellentesque sit amet tellus risus. Nam malesuada imperdiet arcu et ultrices. Phasellus sapien nulla, ultricies eu tempor eu, ultrices sed neque. Morbi tristique erat sit amet nisi congue, id pretium libero sodales. Morbi consequat malesuada enim eu aliquet. Mauris nec condimentum felis.",
    imageUrl: "https://via.placeholder.com/320x180",
    date: "2023-02-26T13:39:04.163Z",
  },
  {
    title: "Test post 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sodales leo et dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec nisl sodales neque elementum efficitur sit amet sit amet erat. Aenean ut maximus risus. Pellentes",
    imageUrl: "/gallery/hobbies/first-post/p1.jpeg",
    date: "2023-02-26T13:39:04.163Z",
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

export function getPosts(limit = 6) {
  return posts.slice(0, limit);
}
