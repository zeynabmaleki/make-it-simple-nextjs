import ContentTable from "@/components/tutorials/ContentTable";

export default function Layout({ children }) {
    return (
        <section className="min-h-screen grid grid-cols-4 gap-8 justify-between items-start pt-35 mx-20 ">
            <ContentTable />
            <div className="col-span-3 ">
                {children}
            </div>
        </section>
    )
}