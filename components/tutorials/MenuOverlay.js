'use client'

import Link from "next/link"


export default function MenuOverlay({ posts = [] }) {
    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/tutorials/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
