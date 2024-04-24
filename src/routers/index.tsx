import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Layout";


const LoginPage = lazy(() => import("../pages/Login"));
const HomePage = lazy(() => import("../pages/Home"));

const AppRouter: React.FC = () => {
    return (
        <>
            <Suspense fallback={<div>Cargando...</div>}>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/home" element={<HomePage />} />
                        </Routes>
                    </Layout>
                </Router>
            </Suspense>
        </>
    );
};

export default AppRouter;