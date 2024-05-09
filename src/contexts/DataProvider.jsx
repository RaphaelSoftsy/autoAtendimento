import { createContext, useState } from "react";

export const DataContext = createContext({})

const DataProvider = ({ children }) => {
    let txtRouteStorage = localStorage.getItem('txtRoute')

    const [routeHeader, setRouteHeader] = useState(txtRouteStorage != undefined ? txtRouteStorage : '/')
    const [oldRouteHeader, setOldRouteHeader] = useState(txtRouteStorage != undefined ? txtRouteStorage : '/')

    const data = {
        routeHeader, setRouteHeader,
        oldRouteHeader, setOldRouteHeader
    }

    return (
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
    )
}

export default DataProvider