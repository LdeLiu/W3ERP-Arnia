import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Dashboard } from "../pages/dashboard/Dashboard";


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={<Dashboard />} path="/dashboard" />
            </Routes>
        </BrowserRouter>
    )
}