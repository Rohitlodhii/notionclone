import { Navbar } from "./_components/Navbar";

const MarketingLayout = ({
    children
} : {
    children : React.ReactNode;
}) => {
    return (
        <div className="h-full dark:bg-zinc-900">
            <Navbar/>
            <main className="h-full pt-20">
                {children}
            </main>
        </div>
    )
}

export default MarketingLayout ;