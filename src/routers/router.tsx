import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Predictions } from "../pages/predictions/Predictions";
import { Products } from "../pages/products/Products";
import { ContentPredictions } from "../pages/predictions/contentPredictions/ContentPredictions";
import { DetailsPredictions } from "../pages/predictions/detailsPredictions/DetailsPredictions";
import { ContentProduct } from "../pages/products/contentProduct/contentProduct";
import { DetailsProducts } from "../pages/products/detailsProducts/DetailsProducts";


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={<Dashboard />} path="/dashboard" />
                <Route element={<Predictions/>} path="/predicoes">
                    <Route element={<ContentPredictions/>} path=""/>
                    <Route element={<DetailsPredictions/>} path=":postId"/>
                </Route>
                <Route element={<Products />} path="/produtos" >
                    <Route element={<ContentProduct/>} path=""/>
                    <Route element={<DetailsProducts/>} path=":postId"/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}