import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Home from "../pages/Home";
import Header from "../components/Header";
import DataProvider, { DataContext } from "../contexts/DataProvider";
import {listRoutesAcademic, listRoutesFinanceiro} from "../hook/routes";

import SubjectAcd from "../pages/Academic/SubjectAcd";
import ReviewsNotes from "../pages/Academic/ReviewsNotes";
import AcademicRequests from "../pages/Academic/AcademicRequests";
import Expedition from "../pages/Academic/Expedition";
import UtilizationStudies from "../pages/Academic/UtilizationStudies";
import ProofRequest from "../pages/Academic/ProofRequest";

import Internship from "../pages/Academic/Internship";
import SubjectAva from "../pages/Ava/SubjectAva";
import ProblemsReviews from "../pages/Ava/ProblemsReviews";

import SubjectFinance from "../pages/Finance/SubjectFinance";
import RequestDocument from "../pages/Finance/RequestDocument";
import OutherSubjects from "../pages/Finance/OutherSubjects";
import MonthlyPayment from "../pages/Finance/MonthlyPayment";
import FiesSumare from "../pages/Finance/FiesSumare";
import CashBack from "../pages/Finance/CashBack";
import Charges from "../pages/Finance/Charges";
import PerformAccord from "../pages/Finance/PerformAccord";
import PerformPayment from "../pages/Finance/PerformPayment";
import AddSwapPayment from "../pages/Finance/AddSwapPayment";
import Handbag from "../pages/Finance/Handbag";
import AddCreditCard from "../pages/Finance/AddCreditCard";
import FinancialStatement from "../pages/Finance/FinancialStatement";
import SendDeclarationFinancial from "../pages/Finance/SendDeclarationFinancial";
import ConsentLetter from "../pages/Finance/ConsentLetter";
import DischargeDeclaration from "../pages/Finance/DischargeDeclaration";
import TuitionMonthlyService from "../pages/Finance/MonthlyPayment/Tuition";
import ServiceMonthlyService from "../pages/Finance/MonthlyPayment/Service";
import AccordMonthlyService from "../pages/Finance/MonthlyPayment/Accord";
import TuitionCashBack from "../pages/Finance/CashBack/Tuition";
import ServiceCashBack from "../pages/Finance/CashBack/Service";
import EveryCashBack from "../pages/Finance/CashBack/Every";
import TuitionCharges from "../pages/Finance/Charges/Tuition";
import ServiceCharges from "../pages/Finance/Charges/Service";
import AccordCharges from "../pages/Finance/Charges/Accord";
import EveryCharges from "../pages/Finance/Charges/Every";
import RescueChecks from "../pages/Finance/RescueChecks";
import Repayment from "../pages/Finance/Repayment";
import Fies from "../pages/Finance/FiesSumare/Fies";
import Sumare from "../pages/Finance/FiesSumare/Sumare";
import PaymentDetails from "../pages/Finance/PaymentDetails";
import Pix from "../pages/Finance/Pix";


const RoutesApp = () => {
    return (
        <BrowserRouter>
            <DataProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/financeiro/*" element={<FinanceiroRoutes />} />
                    <Route path="/academico/*" element={<AcademicRoutes />} />
                    <Route path="/ava/*" element={<AvaRoutes />} />
                </Routes>
            </DataProvider>
        </BrowserRouter>
    );
};

const FinanceiroRoutes = () => {
    const {routeHeader} = useContext(DataContext)
    const location = useLocation()
    const [nameHeader, setNameHeader] = useState('Financeiro')

    useEffect(() => {
        listRoutesFinanceiro.find( rt => {
            if(rt.route == location.pathname){
                setNameHeader(rt.header)
            }
        })
    })

    return (
        <>
            <Header txt={nameHeader} route={routeHeader} />
            <Routes>
                <Route path="/" element={<SubjectFinance />} />
                <Route path="/realizar-pagamento" element={<PerformPayment />} />
                <Route path="/realizar-pagamento/detalhes-pagamento" element={<PaymentDetails />} />
                <Route path="/realizar-pagamento/detalhes-pagamento/pix" element={<Pix />} />
                <Route path="/realizar-pagamento/detalhes-pagamento/boleto" element={<PaymentDetails />} />
                <Route path="/realizar-pagamento/detalhes-pagamento/cartao" element={<PaymentDetails />} />
                <Route path="/realizar-acordo" element={<PerformAccord />} />
                <Route path="/solicitar-documentos" element={<RequestDocument />} />
                <Route path="/solicitar-documentos/declaracao-financeira" element={<FinancialStatement />} />
                <Route path="/solicitar-documentos/carta-de-anuencia" element={<ConsentLetter />} />
                <Route path="/solicitar-documentos/declaracao-de-quitacao" element={<DischargeDeclaration />} />
                <Route path="/solicitar-documentos/declaracao-especifica-financeira" element={<ConsentLetter />} />
                <Route path="/solicitar-documentos/declaracao-financeira/emitir-declaracao" element={<SendDeclarationFinancial />} />
                <Route path="/acrescentar-ou-trocar-meios-de-pagamento" element={<AddSwapPayment />} />
                <Route path="/adicionar-cartao" element={<AddCreditCard />} />
                <Route path="/outros-assuntos" element={<OutherSubjects />} />
                <Route path="/outros-assuntos/bolsa" element={<Handbag />} />
                <Route path="/outros-assuntos/reembolso" element={<Repayment />} />
                <Route path="/outros-assuntos/mensalidades-servicos" element={<MonthlyPayment />} />
                <Route path="/outros-assuntos/mensalidades-servicos/mensalidade" element={<TuitionMonthlyService />} />
                <Route path="/outros-assuntos/mensalidades-servicos/servicos" element={<ServiceMonthlyService />} />
                <Route path="/outros-assuntos/mensalidades-servicos/acordo" element={<AccordMonthlyService />} />
                <Route path="/outros-assuntos/fies-sumare" element={<FiesSumare />} />
                <Route path="/outros-assuntos/fies-sumare/fies" element={<Fies />} />
                <Route path="/outros-assuntos/fies-sumare/sumare" element={<Sumare />} />
                <Route path="/outros-assuntos/cashback" element={<CashBack />} />
                <Route path="/outros-assuntos/cashback/mensalidades" element={<TuitionCashBack />} />
                <Route path="/outros-assuntos/cashback/servicos" element={<ServiceCashBack />} />
                <Route path="/outros-assuntos/cashback/todos" element={<EveryCashBack />} />
                <Route path="/outros-assuntos/cobrança-indevida" element={<Charges />} />
                <Route path="/outros-assuntos/cobrança-indevida/mensalidades" element={<TuitionCharges />} />
                <Route path="/outros-assuntos/cobrança-indevida/servicos" element={<ServiceCharges />} />
                <Route path="/outros-assuntos/cobrança-indevida/acordo" element={<AccordCharges />} />
                <Route path="/outros-assuntos/cobrança-indevida/todos" element={<EveryCharges />} />
                <Route path="/outros-assuntos/resgate-cheque" element={<RescueChecks />} />
            </Routes>
        </>
    );
};

const AcademicRoutes = () => {
    const {routeHeader} = useContext(DataContext)
    const location = useLocation()
    const [nameHeader, setNameHeader] = useState('Acadêmico')

    useEffect(() => {
        listRoutesAcademic.find( rt => {
            if(rt.route == location.pathname){
                setNameHeader(rt.header)
            }
        })
    })

    return (
        <>
            <Header txt={nameHeader} route={routeHeader} />
            <Routes>
                <Route path="/" element={<SubjectAcd />} />
                <Route path="/avaliacoes-e-notas" element={<ReviewsNotes />} />
                <Route path="/solicitacoes-academicas" element={<AcademicRequests />} />
                <Route path="/expedicao-de-documentos" element={<Expedition />} />
                <Route path="/expedicao-de-documentos/aproveitamento-de-estudos" element={<UtilizationStudies />} />
                <Route path="/expedicao-de-documentos/solicitacao-de-prova" element={<ProofRequest />} />
                <Route path="/expedicao-de-documentos/estagio" element={<Internship />} />
            </Routes>
        </>
    );
};

const AvaRoutes = () => {
    const {routeHeader} = useContext(DataContext)
    const location = useLocation()
    const [nameHeader, setNameHeader] = useState('Acadêmico')

    useEffect(() => {
        listRoutesFinanceiro.find( rt => {
            if(rt.route == location.pathname){
                setNameHeader(rt.header)
            }
        })
    })

    return (
        <>
            <Header txt={nameHeader} route={routeHeader} />
            <Routes>
                <Route path="/" element={<SubjectAva />} />
                <Route path="/problemas-nas-avaliacoes" element={<ProblemsReviews />} />
            </Routes>
        </>
    );
};

export default RoutesApp;
