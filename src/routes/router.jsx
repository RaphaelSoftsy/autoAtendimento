import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AssuntoAcd from "../pages/Academico/AssuntoAcd";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assunto-academico" element={<AssuntoAcd />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp