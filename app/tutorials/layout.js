import ContentTable from "@/components/tutorials/ContentTable";
import { getAllPosts } from "@/lib/getPosts";

export default function Layout({ children }) {
    const posts = getAllPosts()

    return (
        <section className="min-h-screen grid grid-cols-4 gap-8 justify-between items-start pt-35 mx-20 ">
            <ContentTable posts={posts} />
            <div className="col-span-3 ">
                {children}
            </div>
        </section>
    )
}