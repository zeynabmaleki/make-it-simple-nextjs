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

    posts.sort((a, b) => new Date(b.date) - new Date(a.date))
    return posts
}

// New: read first-level directories and return { categoryName: [posts...] }
export function getPostsByCategory() {
    const entries = fs.readdirSync(postsDir, { withFileTypes: true })
    const categories = entries.filter(e => e.isDirectory()).map(d => d.name)

    const grouped = {}

    categories.forEach((cat) => {
        const dir = path.join(postsDir, cat)
        const files = fs.readdirSync(dir).filter(f => /\.(mdx?|md)$/i.test(f))

        const posts = files.map((file) => {
            const source = fs.readFileSync(path.join(dir, file), "utf8")
            const { data } = matter(source)
            return {
                ...data,
                slug: file.replace(/\.(mdx?|md)$/i, ""),
                category: cat
            }
        })

        posts.sort((a, b) => new Date(b.date) - new Date(a.date))
        grouped[cat] = posts
    })

    return grouped
}