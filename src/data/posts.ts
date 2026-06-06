import joe from "../posts/joe.md?raw";


export type Post = {
  title: string;
  date: string;
  slug: string;
  content: string;
};

// To add a new post:
// 1. Create src/posts/your-slug.md with your markdown content
// 2. Import it above with ?raw
// 3. Add an entry here (newest first)
export const posts: Post[] = [
  { title: "joe", date: "Jun 2026", slug: "joe", content: joe },
];
