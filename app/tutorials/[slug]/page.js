import fs from 'fs'
import path from 'path'
import matter from "gray-matter";
// gray-matter: Parses frontmatter, 
// (the --- metadata block at the top of your MDX file).
//  Splits metadata (data) from content (content).
import { MDXRemote } from "next-mdx-remote/rsc";
// MDXRemote: Renders MDX content inside Next.js (App Router version).


const postsDir = path.join(process.cwd(), "posts")
// process.cwd() → current working directory (your project root).
// "posts" → folder where your .mdx files live.
// postsDir → absolute path to that folder.


export async function generateStaticParams() {
    // Purpose: Tells Next.js which dynamic routes (/blog/[slug])
    // to pre-render at build time.
    const files = fs.readdirSync(postsDir)
    // fs.readdirSync(postsDir) → reads all filenames in /posts.
    return files.map((file) => ({
        // slug: file.replace(/\.mdx$/, ""),
        slug: file.replace(/\.mdx$/, ""),
        // file.replace(/\.mdx$/, "") → removes .mdx extension,
        // leaving just the slug (name of the file).

        // Returns an array of objects like:
        // [{ slug: "react-useState" }, { slug: "react-hooks-tutorial" }]
    }))
}

export default async function PostPage({ params }) {
    const { slug } = params

    const filePath = path.join(postsDir, `${slug}.mdx`)
    // filePath → builds the full path to the MDX file (/posts/react-useState.mdx).
    const source = fs.readFileSync(filePath, 'utf8')
    // filePath → builds the full path to the MDX file (/posts/react-useState.mdx).

    const { content, data } = matter(source)
    // matter(source) → splits the file into:
    // data: frontmatter metadata (title, date, tags).
    // content: the actual MDX body.

    return (
        <article className="prose mx-auto">
            <h1>{data.title}</h1>
            <MDXRemote source={content} />
        </article>
    );
}

export const dynamicParams = false