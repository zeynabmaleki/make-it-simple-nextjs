import fs from "fs"
// fs → Node.js file system module. Lets you read files from disk.
import path from "path"
// path → Node.js path module.
//  Helps build safe file paths across operating systems.
import matter from "gray-matter"
// gray-matter → Library that parses frontmatter (the --- metadata block at the top of .mdx files). 
// Splits metadata (data) from content.
import Link from "next/link"



const postsDir = path.join(process.cwd(), "posts")


export default function ContentTable() {
    const files = fs.readdirSync(postsDir)

    const posts = files.map((file) => {
        const source = fs.readFileSync(path.join(postsDir, file), "utf8")
        const { data } = matter(source)
        // matter(source) → extracts frontmatter metadata (data) from the file.
        // Example: { title: "Understanding useState", date: "2025-11-22" }.
        return { ...data, slug: file.replace(/\.mdx$/, "") }
        // → builds a post object:
        // Includes all metadata (title, date, etc.).
        // Adds a slug (filename without .mdx) for the URL.
    });

    return (
        <div>
            {/* <h1>Blog</h1> */}
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
