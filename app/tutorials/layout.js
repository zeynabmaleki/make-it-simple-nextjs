import ContentTable from "@/components/tutorials/ContentTable";
import { getPostsByCategory } from "@/lib/getPosts";

export default function Layout({ children }) {
    const groups = getPostsByCategory()

    return (
        <section className="min-h-screen grid grid-cols-4 gap-8 justify-between items-start pt-35 mx-20 ">
            <ContentTable groups={groups} />
            <div className="col-span-3 ">
                {children}
            </div>
        </section>
    )
}