import { NavLink } from "react-router-dom";

export default function NavMenu() {
    const base = 'px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition';
    const active = 'bg-slate-800'
    return (
        <header className="bg-slate-950 border-b border-slate-800">
            <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                <span className="font-bold text-lg tracking-wide">Detective</span>
                <div className="flex gap-2">
                    <NavLink to='/play' className={({ isActive }) => `${base} ${isActive ? active : ''}`}>Играть</NavLink>
                    <NavLink to='/profile' className={({ isActive }) => `${base} ${isActive ? active : ''}`}>Профиль</NavLink>
                    <NavLink to='/about' className={({ isActive }) => `${base} ${isActive ? active : ''}`}>О проекте</NavLink>
                </div>
            </nav>
        </header>
    )
}