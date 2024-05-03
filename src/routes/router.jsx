import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "../pages/Home";
import SubjectAcd from "../pages/Academic/SubjectAcd";
import Header from "../components/Header";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/academico" element={<AcademicRoute>
                    <AcademicRoutes />
                </AcademicRoute>} />
            </Routes>
        </BrowserRouter>
    )
}

const AcademicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SubjectAcd />} />
        </Routes>
    )
}

const AcademicRoute = ({ children }) => {
    return (
        <>
            <Header txt="teste" route="/" />
            {children}
        </>
    )
}

export default RoutesApp