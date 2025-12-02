import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDir = path.join(process.cwd(), "posts")

export function getAllPosts() {
    const files = fs.readdirSync(postsDir)

    const posts = files.map((file) => {
        const source = fs.readFileSync(path.join(postsDir, file), "utf8")
        const { data } = matter(source)
        return { ...data, slug: file.replace(/\.mdx$/, "") }
    })

    // optional: sort by date descending if you have dates
    posts.sort((a, b) => new Date(b.date) - new Date(a.date))

    return posts
}