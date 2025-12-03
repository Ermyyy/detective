import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import MainLayout from "../features/layout/MainLayout"
import HomePage from "../pages/HomePage"
import PlayPage from "../pages/PlayPage"
import ProfilePage from "../pages/ProfilePage"
import AboutPage from "../pages/AboutPage"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/play" element={<PlayPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="*" element={<Navigate to='/'/>}/>
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}