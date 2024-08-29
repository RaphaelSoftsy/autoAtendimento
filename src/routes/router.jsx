import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/Header";
import DataProvider, { DataContext } from "../contexts/DataProvider";
import { RAProvider } from "../contexts/RAContext";
import { listRoutesAcademic, listRoutesAva, listRoutesFinanceiro } from "../hook/routes";
import AcademicRequests from "../pages/Academic/AcademicRequests";
import AcademicSpecificDeclaration from "../pages/Academic/AcademicSpecificDeclaration";
import AcademicSpecificDeclarationServiceNumber from "../pages/Academic/AcademicSpecificDeclarationServiceNumber";
import AdditionalActivities from "../pages/Academic/AdditionalActivities";
import AdditionalActivitiesOpenDemand from "../pages/Academic/AdditionalActivitiesOpenDemand";
import AdditionalActivitiesServiceNumber from "../pages/Academic/AdditionalActivitiesServiceNumber";
import CourseCancellation from "../pages/Academic/CourseCancellation";
import Diplomas from "../pages/Academic/Diplomas";
import DuplicateDiploma from "../pages/Academic/DuplicateDiploma";
import DuplicateDiplomaServiceNumber from "../pages/Academic/DuplicateDiplomaServiceNumber";
import Enade from "../pages/Academic/Enade";
import EnadeOpenDemand from "../pages/Academic/EnadeOpenDemand";
import EnadeServiceNumber from "../pages/Academic/EnadeServiceNumber";
import Expedition from "../pages/Academic/Expedition";
import Internship from "../pages/Academic/Internship";
import InternshipReportSubmission from "../pages/Academic/InternshipReportSubmission";
import InternshipReportSubmissionServiceNumber from "../pages/Academic/InternshipReportSubmissionServiceNumber";
import Notes from "../pages/Academic/Notes";
import NotesServiceNumber from "../pages/Academic/NotesServiceNumber";
import OpenCollection from "../pages/Academic/OpenCollection";
import PrintedDiplomaServiceNumber from "../pages/Academic/PrintedDiplomaServiceNumber";
import ProgramContent from "../pages/Academic/ProgramContent";
import ProgramContentServiceNumber from "../pages/Academic/ProgramContentServiceNumber";
import ProofRequest from "../pages/Academic/ProofRequest";
import ProofRequestSelect from "../pages/Academic/ProofRequestSelect";
import ProofRequestSelectServiceNumber from "../pages/Academic/ProofRequestSelectServiceNumber";
import ReEnrollment from "../pages/Academic/ReEnrollment";
import RegistrationDeclaration from "../pages/Academic/RegistrationDeclaration";
import RegistrationDeclarationOpenDemand from "../pages/Academic/RegistrationDeclarationOpenDemand";
import RegistrationDeclarationServiceNumber from "../pages/Academic/RegistrationDeclarationServiceNumber";
import RejectionAdaptation from "../pages/Academic/RejectionAdaptation";
import SchoolBus from "../pages/Academic/SchoolBus";
import SchoolBusServiceNumber from "../pages/Academic/SchoolBusServiceNumber";
import SchoolRecords from "../pages/Academic/SchoolRecords";
import SchoolRecordsOpenDemand from "../pages/Academic/SchoolRecordsOpenDemand";
import SchoolRecordsServiceNumber from "../pages/Academic/SchoolRecordsServiceNumber";
import SigningInternshipContract from "../pages/Academic/SigningInternshipContract";
import SigningInternshipContractServiceNumber from "../pages/Academic/SigningInternshipContractServiceNumber";
import SpecialDegreeConferral from "../pages/Academic/SpecialDegreeConferral";
import SpecialDegreeConferralServiceNumber from "../pages/Academic/SpecialDegreeConferralServiceNumber";
import StatementConclusion from "../pages/Academic/StatementConclusion";
import StatementConclusionOpenDemand from "../pages/Academic/StatementConclusionOpenDemand";
import StatementConclusionServiceNumber from "../pages/Academic/StatementConclusionServiceNumber";
import SubjectAcd from "../pages/Academic/SubjectAcd";
import SubmissionInternshipReport from "../pages/Academic/SubmissionInternshipReport";
import SubmissionInternshipReportServiceNumber from "../pages/Academic/SubmissionInternshipReportServiceNumber";
import TerminationInternshipContract from "../pages/Academic/TerminationInternshipContract";
import TerminationInternshipContractServiceNumber from "../pages/Academic/TerminationInternshipContractServiceNumber";
import UndergraduateCoverLetter from "../pages/Academic/UndergraduateCoverLetter";
import UtilizationStudies from "../pages/Academic/UtilizationStudies";
import UtilizationStudiesServiceNumber from "../pages/Academic/UtilizationStudiesServiceNumber";
import ProblemsAccessingAVA from "../pages/Ava/ProblemsAccessingAVA";
import ProblemsAccessingAVAServiceNumber from "../pages/Ava/ProblemsAccessingAVAServiceNumber";
import ProblemsAccessingDiscipline from "../pages/Ava/ProblemsAccessingDiscipline";
import ProblemsAccessingDisciplineOpenDemand from "../pages/Ava/ProblemsAccessingDisciplineOpenDemand";
import ProblemsAccessingDisciplineServiceNumber from "../pages/Ava/ProblemsAccessingDisciplineServiceNumber";
import ProblemsActivities from "../pages/Ava/ProblemsActivities";
import ProblemsActivitiesOpenDemand from "../pages/Ava/ProblemsActivitiesOpenDemand";
import ProblemsActivitiesServiceNumber from "../pages/Ava/ProblemsActivitiesServiceNumber";
import ProblemsReviews from "../pages/Ava/ProblemsReviews";
import ProblemsReviewsSelect from "../pages/Ava/ProblemsReviewsSelect";
import ProblemsReviewsSelectOpenDemand from "../pages/Ava/ProblemsReviewsSelectOpenDemand";
import ProblemsReviewsSelectServiceNumber from "../pages/Ava/ProblemsReviewsSelectServiceNumber";
import SubjectAva from "../pages/Ava/SubjectAva";
import AddCreditCard from "../pages/Finance/AddCreditCard";
import AddSwapPayment from "../pages/Finance/AddSwapPayment";
import CardChoice from "../pages/Finance/CardChoice";
import CashBack from "../pages/Finance/CashBack";
import CashBackServiceNumber from "../pages/Finance/CashBackServiceNumber";
import Charges from "../pages/Finance/Charges";
import ChargesOpenDemand from "../pages/Finance/ChargesOpenDemand";
import ChargesServiceNumber from "../pages/Finance/ChargesServiceNumber";
import ConsentLetter from "../pages/Finance/ConsentLetter";
import DischargeDeclaration from "../pages/Finance/DischargeDeclaration";
import FiesSumare from "../pages/Finance/FiesSumare";
import Fies from "../pages/Finance/FiesSumare/Fies";
import FiesServiceNumber from "../pages/Finance/FiesSumare/Fies/FiesServiceNumber";
import Sumare from "../pages/Finance/FiesSumare/Sumare";
import SumareServiceNumber from "../pages/Finance/FiesSumare/Sumare/SumareServiceNumber";
import FinancialStatement from "../pages/Finance/FinancialStatement";
import Handbag from "../pages/Finance/Handbag";
import HandbagServiceNumber from "../pages/Finance/HandbagServiceNumber";
import MonthlyPayment from "../pages/Finance/MonthlyPayment";
import MonthlyPaymentOpenDemand from "../pages/Finance/MonthlyPaymentOpenDemand";
import MonthlyPaymentServiceNumber from "../pages/Finance/MonthlyPaymentServiceNumber";
import OutherSubjects from "../pages/Finance/OutherSubjects";
import Pay from "../pages/Finance/Pay";
import PaymentDetails from "../pages/Finance/PaymentDetails";
import Boleto from "../pages/Finance/PaymentDetails/Boleto";
import Cartao from "../pages/Finance/PaymentDetails/Cartao";
import Pix from "../pages/Finance/PaymentDetails/Pix";
import PaymentDetailsAccord from "../pages/Finance/PaymentDetailsAccord";
import BoletoAccord from "../pages/Finance/PaymentDetailsAccord/Boleto";
import CartaoAccord from "../pages/Finance/PaymentDetailsAccord/Cartao";
import PixAccord from "../pages/Finance/PaymentDetailsAccord/Pix";
import PerformAccord from "../pages/Finance/PerformAccord";
import PerformPayment from "../pages/Finance/PerformPayment";
import Repayment from "../pages/Finance/Repayment";
import RepaymentServiceNumber from "../pages/Finance/RepaymentServiceNumber";
import RequestDocument from "../pages/Finance/RequestDocument";
import RescueChecks from "../pages/Finance/RescueChecks";
import RescueChecksServiceNumber from "../pages/Finance/RescueChecksServiceNumber";
import SendDeclarationFinancial from "../pages/Finance/SendDeclarationFinancial";
import SpecificFinancialStatement from "../pages/Finance/SpecificFinancialStatement";
import SubjectFinance from "../pages/Finance/SubjectFinance";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyRequests from "../pages/Menu/MyRequests";
import CreateNewPassword from "../pages/Password/CreateNewPassword";
import ForgetPassword from "../pages/Password/ForgetPassword";
import PasswordRecovery from "../pages/Password/PasswordRecovery";
import Verification from "../pages/Password/Verification";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <DataProvider>
                <RAProvider>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/esquecer-senha" element={<ForgetPassword />} />
                        <Route path="/recuperacao-senha" element={<PasswordRecovery />} />
                        <Route path="/verificacao" element={<Verification />} />
                        <Route path="/criar-nova-senha" element={<CreateNewPassword />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/minhas-solicitacoes" element={<MyRequests />} />
                        <Route path="/financeiro/*" element={<FinanceiroRoutes />} />
                        <Route path="/academico/*" element={<AcademicRoutes />} />
                        <Route path="/ava/*" element={<AvaRoutes />} />
                    </Routes>
                </RAProvider>
            </DataProvider>
        </BrowserRouter>
    );
};

const FinanceiroRoutes = () => {
    const { routeHeader } = useContext(DataContext)
    const location = useLocation()
    const [nameHeader, setNameHeader] = useState('Financeiro')

    useEffect(() => {
        listRoutesFinanceiro.find(rt => {
            if (rt.route == location.pathname) {
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
                <Route path="/realizar-pagamento/detalhes-pagamento/boleto" element={<Boleto />} />
                <Route path="/realizar-pagamento/detalhes-pagamento/cartao" element={<Cartao />} />
                <Route path="/realizar-pagamento/detalhes-pagamento/cartao/escolha" element={<CardChoice />} />
                <Route path="/realizar-pagamento/pago" element={<Pay />} />
                <Route path="/realizar-acordo" element={<PerformAccord />} />
                <Route path="/realizar-acordo/detalhes-pagamento" element={<PaymentDetailsAccord />} />
                <Route path="/realizar-acordo/detalhes-pagamento/pix" element={<PixAccord />} />
                <Route path="/realizar-acordo/detalhes-pagamento/boleto" element={<BoletoAccord />} />
                <Route path="/realizar-acordo/detalhes-pagamento/cartao" element={<CartaoAccord />} />
                <Route path="/realizar-acordo/detalhes-pagamento/cartao/escolha" element={<CardChoice />} />
                <Route path="/solicitar-documentos" element={<RequestDocument />} />
                <Route path="/solicitar-documentos/declaracao-financeira" element={<FinancialStatement />} />
                <Route path="/solicitar-documentos/declaracao-financeira/emitir-declaracao" element={<SendDeclarationFinancial />} />
                <Route path="/solicitar-documentos/carta-de-anuencia" element={<ConsentLetter />} />
                <Route path="/solicitar-documentos/declaracao-de-quitacao" element={<DischargeDeclaration />} />
                <Route path="/solicitar-documentos/declaracao-especifica-financeira" element={<SpecificFinancialStatement />} />
                <Route path="/acrescentar-ou-trocar-meios-de-pagamento" element={<AddSwapPayment />} />
                <Route path="/adicionar-cartao" element={<AddCreditCard />} />
                <Route path="/outros-assuntos" element={<OutherSubjects />} />
                <Route path="/outros-assuntos/bolsa" element={<Handbag />} />
                <Route path="/outros-assuntos/bolsa/numero-servico" element={<HandbagServiceNumber />} />
                <Route path="/outros-assuntos/reembolso" element={<Repayment />} />
                <Route path="/outros-assuntos/reembolso/numero-servico" element={<RepaymentServiceNumber />} />
                <Route path="/outros-assuntos/mensalidades-servicos" element={<MonthlyPayment />} />
                <Route path="/outros-assuntos/mensalidades-servicos/abrir-demanda" element={<MonthlyPaymentOpenDemand />} />
                <Route path="/outros-assuntos/mensalidades-servicos/abrir-demanda/numero-servico" element={<MonthlyPaymentServiceNumber />} />
                {/* <Route path="/outros-assuntos/mensalidades-servicos/mensalidade" element={<TuitionMonthlyService />} />
                <Route path="/outros-assuntos/mensalidades-servicos/servicos" element={<ServiceMonthlyService />} />
                <Route path="/outros-assuntos/mensalidades-servicos/acordo" element={<AccordMonthlyService />} /> */}
                <Route path="/outros-assuntos/fies-sumare" element={<FiesSumare />} />
                <Route path="/outros-assuntos/fies-sumare/fies" element={<Fies />} />
                <Route path="/outros-assuntos/fies-sumare/fies/numero-servico" element={<FiesServiceNumber />} />
                <Route path="/outros-assuntos/fies-sumare/sumare" element={<Sumare />} />
                <Route path="/outros-assuntos/fies-sumare/sumare/numero-servico" element={<SumareServiceNumber />} />
                <Route path="/outros-assuntos/cashback" element={<CashBack />} />
                <Route path="/outros-assuntos/cashback/numero-servico" element={<CashBackServiceNumber />} />
                {/* <Route path="/outros-assuntos/cashback/mensalidades" element={<TuitionCashBack />} />
                <Route path="/outros-assuntos/cashback/servicos" element={<ServiceCashBack />} />
                <Route path="/outros-assuntos/cashback/todos" element={<EveryCashBack />} /> */}
                <Route path="/outros-assuntos/cobrança-indevida" element={<Charges />} />
                <Route path="/outros-assuntos/cobrança-indevida/abrir-demanda" element={<ChargesOpenDemand />} />
                <Route path="/outros-assuntos/cobrança-indevida/abrir-demanda/numero-servico" element={<ChargesServiceNumber />} />
                {/* <Route path="/outros-assuntos/cobrança-indevida/mensalidades" element={<TuitionCharges />} />
                <Route path="/outros-assuntos/cobrança-indevida/servicos" element={<ServiceCharges />} />
                <Route path="/outros-assuntos/cobrança-indevida/acordo" element={<AccordCharges />} />
                <Route path="/outros-assuntos/cobrança-indevida/todos" element={<EveryCharges />} /> */}
                <Route path="/outros-assuntos/resgate-cheque" element={<RescueChecks />} />
                <Route path="/outros-assuntos/resgate-cheque/numero-servico" element={<RescueChecksServiceNumber />} />
            </Routes>
        </>
    );
};

const AcademicRoutes = () => {
    const { routeHeader } = useContext(DataContext)
    const location = useLocation()
    const [nameHeader, setNameHeader] = useState('Acadêmico')

    useEffect(() => {
        listRoutesAcademic.find(rt => {
            if (rt.route == location.pathname) {
                setNameHeader(rt.header)
            }
        })
    })

    return (
        <>
            <Header txt={nameHeader} route={routeHeader} />
            <Routes>
                <Route path="/" element={<SubjectAcd />} />
                <Route path="/avaliacoes-e-notas" element={<Notes />} />
                <Route path="/avaliacoes-e-notas/numero-servico" element={<NotesServiceNumber />} />
                <Route path="/matricula-em-reprovacao-adaptacao" element={<RejectionAdaptation />} />  {/*proxima tela é de carrinho*/}
                <Route path="/solicitacoes-academicas" element={<AcademicRequests />} />
                <Route path="/solicitacoes-academicas/aproveitamento-de-estudos" element={<UtilizationStudies />} />
                <Route path="/solicitacoes-academicas/aproveitamento-de-estudos/numero-servico" element={<UtilizationStudiesServiceNumber />} />
                <Route path="/solicitacoes-academicas/solicitacao-de-prova" element={<ProofRequest />} />
                <Route path="/solicitacoes-academicas/solicitacao-de-prova/escolha" element={<ProofRequestSelect />} />
                <Route path="/solicitacoes-academicas/solicitacao-de-prova/escolha/numero-servico" element={<ProofRequestSelectServiceNumber />} />
                {/* <Route path="/solicitacoes-academicas/solicitacao-de-prova/escolha/abrir-demanda" element={<ProofRequestOpenDemand />} /> */}
                <Route path="/solicitacoes-academicas/diplomas" element={<Diplomas />} />
                <Route path="/solicitacoes-academicas/diplomas/numero-servico" element={<PrintedDiplomaServiceNumber />} />
                <Route path="/solicitacoes-academicas/diplomas/colacao-de-grau-especial" element={<SpecialDegreeConferral />} />
                <Route path="/solicitacoes-academicas/diplomas/colacao-de-grau-especial/numero-servico" element={<SpecialDegreeConferralServiceNumber />} />
                <Route path="/solicitacoes-academicas/diplomas/segunda-via-de-diploma" element={<DuplicateDiploma />} />
                <Route path="/solicitacoes-academicas/diplomas/segunda-via-de-diploma/numero-servico" element={<DuplicateDiplomaServiceNumber />} />
                <Route path="/solicitacoes-academicas/estagio" element={<Internship />} />
                <Route path="/solicitacoes-academicas/estagio/assinatura-de-contrato-de-estagio" element={<SigningInternshipContract />} />
                <Route path="/solicitacoes-academicas/estagio/assinatura-de-contrato-de-estagio/numero-servico" element={<SigningInternshipContractServiceNumber />} />
                <Route path="/solicitacoes-academicas/estagio/entrega-de-relatorio-de-estagio" element={<InternshipReportSubmission />} />
                <Route path="/solicitacoes-academicas/estagio/entrega-de-relatorio-de-estagio/numero-servico" element={<InternshipReportSubmissionServiceNumber />} />
                <Route path="/solicitacoes-academicas/estagio/rescisao-de-contrato-de-estagio" element={<SubmissionInternshipReport />} />
                <Route path="/solicitacoes-academicas/estagio/rescisao-de-contrato-de-estagio/numero-servico" element={<SubmissionInternshipReportServiceNumber />} />
                <Route path="/solicitacoes-academicas/estagio/convalidacao-de-horas" element={<TerminationInternshipContract />} />
                <Route path="/solicitacoes-academicas/estagio/convalidacao-de-horas/numero-servico" element={<TerminationInternshipContractServiceNumber />} />
                <Route path="/solicitacoes-academicas/estagio/carta-de-apresentacao-licenciatura" element={<UndergraduateCoverLetter />} />
                <Route path="/solicitacoes-academicas/atividades-complementares" element={<AdditionalActivities />} />
                <Route path="/solicitacoes-academicas/atividades-complementares/abrir-demanda" element={<AdditionalActivitiesOpenDemand />} />
                <Route path="/solicitacoes-academicas/atividades-complementares/abrir-demanda/numero-servico" element={<AdditionalActivitiesServiceNumber />} />
                <Route path="/solicitacoes-academicas/enade" element={<Enade />} />
                <Route path="/solicitacoes-academicas/enade/abrir-demanda" element={<EnadeOpenDemand />} />
                <Route path="/solicitacoes-academicas/enade/abrir-demanda/numero-servico" element={<EnadeServiceNumber />} />
                <Route path="/solicitacoes-academicas/rematricula" element={<ReEnrollment />} />
                <Route path="/solicitacoes-academicas/transporte-escolar" element={<SchoolBus />} />
                <Route path="/solicitacoes-academicas/transporte-escolar/numero-servico" element={<SchoolBusServiceNumber />} />
                <Route path="/expedicao-de-documentos" element={<Expedition />} />
                <Route path="/expedicao-de-documentos/declaracao-de-matricula" element={<RegistrationDeclaration />} />
                <Route path="/expedicao-de-documentos/declaracao-de-matricula/abrir-demanda" element={<RegistrationDeclarationOpenDemand />} />
                <Route path="/expedicao-de-documentos/declaracao-de-matricula/abrir-demanda/numero-servico" element={<RegistrationDeclarationServiceNumber />} />
                <Route path="/expedicao-de-documentos/historico-escolar" element={<SchoolRecords />} />
                <Route path="/expedicao-de-documentos/historico-escolar/abrir-demanda" element={<SchoolRecordsOpenDemand />} />
                <Route path="/expedicao-de-documentos/historico-escolar/abrir-demanda/numero-servico" element={<SchoolRecordsServiceNumber />} />
                <Route path="/expedicao-de-documentos/declaracao-de-conclusao" element={<StatementConclusion />} />
                <Route path="/expedicao-de-documentos/declaracao-de-conclusao/abrir-demanda" element={<StatementConclusionOpenDemand />} />
                <Route path="/expedicao-de-documentos/declaracao-de-conclusao/abrir-demanda/numero-servico" element={<StatementConclusionServiceNumber />} />
                <Route path="/expedicao-de-documentos/declaracao-especifica-academica" element={<AcademicSpecificDeclaration />} />
                <Route path="/expedicao-de-documentos/declaracao-especifica-academica/numero-servico" element={<AcademicSpecificDeclarationServiceNumber />} />
                <Route path="/expedicao-de-documentos/conteudo-programatico" element={<ProgramContent />} />
                <Route path="/expedicao-de-documentos/conteudo-programatico/numero-servico" element={<ProgramContentServiceNumber />} />
                <Route path="/cancelamento-do-curso" element={<CourseCancellation />} />
                <Route path="/cancelamento-do-curso/cobrancas" element={<OpenCollection />} />
            </Routes>
        </>
    );
};

const AvaRoutes = () => {
    const { routeHeader } = useContext(DataContext)
    const location = useLocation()
    const [nameHeader, setNameHeader] = useState('Ava')

    useEffect(() => {
        listRoutesAva.find(rt => {
            if (rt.route == location.pathname) {
                setNameHeader(rt.header)
            }
        })
    })

    return (
        <>
            <Header txt={nameHeader} route={routeHeader} />
            <Routes>
                <Route path="/" element={<SubjectAva />} />
                <Route path="/problemas-com-acesso-ao-ava" element={<ProblemsAccessingAVA />} />
                <Route path="/problemas-com-acesso-ao-ava/numero-servico" element={<ProblemsAccessingAVAServiceNumber />} />
                <Route path="/problemas-com-acesso-as-disciplinas" element={<ProblemsAccessingDiscipline />} />
                <Route path="/problemas-com-acesso-as-disciplinas/abrir-demanda" element={<ProblemsAccessingDisciplineOpenDemand />} />
                <Route path="/problemas-com-acesso-as-disciplinas/abrir-demanda/numero-servico" element={<ProblemsAccessingDisciplineServiceNumber />} />
                <Route path="/problemas-na-atividade" element={<ProblemsActivities />} />
                <Route path="/problemas-na-atividade/abrir-demanda" element={<ProblemsActivitiesOpenDemand />} />
                <Route path="/problemas-na-atividade/abrir-demanda/numero-servico" element={<ProblemsActivitiesServiceNumber />} />
                <Route path="/problemas-nas-avaliacoes" element={<ProblemsReviews />} />
                <Route path="/problemas-nas-avaliacoes/escolha" element={<ProblemsReviewsSelect />} />
                <Route path="/problemas-nas-avaliacoes/escolha/abrir-demanda" element={<ProblemsReviewsSelectOpenDemand />} />
                <Route path="/problemas-nas-avaliacoes/escolha/abrir-demanda/numero-servico" element={<ProblemsReviewsSelectServiceNumber />} />
            </Routes>
        </>
    );
};

export default RoutesApp;
