import Link from "next/link";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <nav className={"bg-amber-500"}>
                marketing layout nav
            </nav>
        {children}
    </section>
)
}
