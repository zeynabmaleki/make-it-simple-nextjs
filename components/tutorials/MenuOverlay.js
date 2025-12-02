'use client'

import Link from "next/link"

export default function MenuOverlay({ posts = [] }) {
    return (
        <div className="max-h-72 overflow-auto">
            <ul className="divide-y">
                {posts.map((post) => (
                    <li key={post.slug} className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Link href={`/tutorials/${post.slug}`} className="block">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
