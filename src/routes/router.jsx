import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import SubjectAcd from "../pages/Academic/SubjectAcd";
import SubjectFinance from "../pages/Finance/SubjectFinance";
import SubjectAva from "../pages/Ava/SubjectAva";
import RequestDocument from "../pages/Finance/RequestDocument";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/financeiro" element={<FinanceiroRoute>
                    <FinanceiroRoutes />
                </FinanceiroRoute>} />
                <Route path="/academico" element={<AcademicRoute>
                    <AcademicRoutes />
                </AcademicRoute>} />
                <Route path="/ava" element={<AvaRoute>
                    <AvaRoutes />
                </AvaRoute>} />
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

const FinanceiroRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SubjectFinance />} />
            <Route path="/" element={<RequestDocument />} />
        </Routes>
    )
}

const AvaRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SubjectAva />} />
        </Routes>
    )
}

const AcademicRoute = ({ children }) => {
    return (
        <>
            <Header txt="Academico" route="/" />
            {children}
        </>
    )
}

const FinanceiroRoute = ({ children }) => {
    return (
        <>
            <Header txt="Financeiro" route="/" />
            {children}
        </>
    )
}

const AvaRoute = ({ children }) => {
    return (
        <>
            <Header txt="Ava" route="/" />
            {children}
        </>
    )
}

export default RoutesApp