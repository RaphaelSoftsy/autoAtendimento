import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import SubjectAcd from "../pages/Academic/SubjectAcd";
import SubjectFinance from "../pages/Finance/SubjectFinance";
import SubjectAva from "../pages/Ava/SubjectAva";
import RequestDocument from "../pages/Finance/RequestDocument";
import OutherSubjects from "../pages/Finance/OutherSubjects";
import MonthlyPayment from "../pages/Finance/MonthlyPayment";
import FiesSumare from "../pages/Finance/FiesSumare";
import CashBack from "../pages/Finance/CashBack";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/financeiro/*" element={<FinanceiroRoutes />} />
                <Route path="/academico/*" element={<AcademicRoutes />} />
                <Route path="/ava/*" element={<AvaRoutes />} />
            </Routes>
        </BrowserRouter>
    );
};

const FinanceiroRoutes = () => {
    return (
        <>
            <Header txt="Financeiro" route="/" />
            <Routes>
                <Route path="/" element={<SubjectFinance />} />
                <Route path="/solicitar-documentos" element={<RequestDocument />} />
                <Route path="/outros-assuntos" element={<OutherSubjects />} />
                <Route path="/outros-assuntos/mensalidades-servicos" element={<MonthlyPayment />} />
                <Route path="/outros-assuntos/fies-sumare" element={<FiesSumare />} />
                <Route path="/outros-assuntos/cashback" element={<CashBack />} />
                <Route path="/outros-assuntos/cobrança-indevida" element={<FiesSumare />} />
            </Routes>
        </>
    );
};

const AcademicRoutes = () => {
    return (
        <>
            <Header txt="Acadêmico" route="/" />
            <Routes>
                <Route path="/" element={<SubjectAcd />} />
            </Routes>
        </>
    );
};

const AvaRoutes = () => {
    return (
        <>
            <Header txt="AVA" route="/" />
            <Routes>
                <Route path="/" element={<SubjectAva />} />
            </Routes>
        </>
    );
};

export default RoutesApp;
