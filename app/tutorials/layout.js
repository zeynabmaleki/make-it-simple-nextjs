import ContentTable from "@/components/tutorials/ContentTable";

export default function Layout({ children }) {
    return (
        <section className="min-h-screen grid grid-cols-3 gap-4 justify-between items-start pt-35 mx-20 ">
            <ContentTable />
            <div className="col-span-2 ">
                {children}
            </div>
        </section>
    )
}