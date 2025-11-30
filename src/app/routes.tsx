import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "../features/layout/MainLayout"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/"/>
                    <Route path="/play"/>
                    <Route path="/profile"/>
                    <Route path="/about"/>
                    <Route path="*"/>
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}