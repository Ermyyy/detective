import type { ReactNode } from "react"
import NavMenu from "./NavMenu";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({children}: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100">
            <NavMenu/>
            <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
        </div>
    )
}