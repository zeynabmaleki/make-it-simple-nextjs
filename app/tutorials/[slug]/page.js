import fs from 'fs'
import path from 'path'
import matter from "gray-matter"
import { MDXRemote } from 'next-mdx-remote/rsc'

const postsDir = path.join(process.cwd(), "posts")

export async function generateStaticParams() {
    const entries = fs.readdirSync(postsDir, { withFileTypes: true })
    const categories = entries.filter(e => e.isDirectory()).map(d => d.name)

    const params = []

    categories.forEach((cat) => {
        const dir = path.join(postsDir, cat)
        const files = fs.readdirSync(dir).filter(f => /\.(mdx?|md)$/i.test(f))

        files.forEach((file) => {
            const slug = file.replace(/\.(mdx?|md)$/i, "")
            params.push({ slug })
        })
    })

    return params
}

export default async function TutorialPost({ params }) {
    const { slug } = await params

    const entries = fs.readdirSync(postsDir, { withFileTypes: true })
    const categories = entries.filter(e => e.isDirectory()).map(d => d.name)

    let filePath = null
    let fileContent = null

    for (const cat of categories) {
        const dir = path.join(postsDir, cat)
        const testPath = path.join(dir, `${slug}.mdx`)
        if (fs.existsSync(testPath)) {
            filePath = testPath
            fileContent = fs.readFileSync(testPath, 'utf8')
            break
        }
    }

    if (!filePath) {
        return <div>Post not found</div>
    }

    const { data, content } = matter(fileContent)

    return (
        <article className="flex flex-col gap-4">
            <h1>{data.title}</h1>
            <div className='flex flex-row gap-8 items-baseline'>
                {data.description && <p className="">{data.description}</p>}
                {data.date && <time className="text-sm ">{new Date(data.date).toLocaleDateString()}</time>}
                {data.tags && (
                    <div className="flex gap-2 flex-wrap">
                        {data.tags.map((tag) => (
                            <span key={tag} className="bg-gray-200 px-2 py-1 rounded text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div className="prose prose-sm">
                <MDXRemote source={content} />
            </div>
        </article>
    );
}

export const dynamicParams = false