import { createContext, useState } from "react";

export const DataContext = createContext({})

const DataProvider = ({ children }) => {
    let txtHeaderStorage = localStorage.getItem('txtHeader')
    let txtRouteStorage = localStorage.getItem('txtRoute')
    const [txtHeader, setTxtHeader] = useState(txtHeaderStorage != undefined ? txtHeaderStorage : '')
    const [routeHeader, setRouteHeader] = useState(txtRouteStorage != undefined ? txtRouteStorage : '/')

    const data = {
        txtHeader, setTxtHeader,
        routeHeader, setRouteHeader
    }

    return (
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
    )
}

export default DataProvider