import { createContext, useState } from "react";

export const DataContext = createContext({})

const DataProvider = ({ children }) => {
    const [txtHeader, setTxtHeader] = useState('')
    const [routeHeader, setRouteHeader] = useState('')

    const data = {
        txtHeader, setTxtHeader,
        routeHeader, setRouteHeader
    }

    return (
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
    )
}

export default DataProvider