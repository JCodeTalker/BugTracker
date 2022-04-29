export default function handler(req, res) {
  res.status(200).json({
    posts: [{ id: 1, title: "json-server", author: "typicode" }],
    comments: [{ id: 1, body: "some comment", postId: 1 }],
    profile: { name: "typicode" },
    projects: [
      {
        name: "BugTracker",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis tortor at erat luctus posuere. Quisque consequat arcu ex, nec luctus velit ultrices sagittis. Fusce fringilla semper viverra. Sed nec porta turpis. Curabitur pretium metus ac ex ultrices viverra vitae eget risus.",
        contributors: "abc",
      },
      {
        name: "YgoSearch",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis tortor at erat luctus posuere. Quisque consequat arcu ex, nec luctus velit ultrices sagittis. Fusce fringilla semper viverra. Sed nec porta turpis. Curabitur pretium metus ac ex ultrices viverra vitae eget risus.",
        contributors: "Jones",
      },
    ],
  });
}
