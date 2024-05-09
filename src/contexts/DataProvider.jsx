import { createContext, useState } from "react";

export const DataContext = createContext({})

const DataProvider = ({ children }) => {
    let txtHeaderStorage = localStorage.getItem('txtHeader')
    let txtRouteStorage = localStorage.getItem('txtRoute')

    const [txtHeader, setTxtHeader] = useState(txtHeaderStorage != undefined ? JSON.parse(txtHeaderStorage) : [])

    //const [oldTxtHeader, setOldTxtHeader] = useState(txtHeaderStorage != undefined ? [txtHeaderStorage] : [])
    const [routeHeader, setRouteHeader] = useState(txtRouteStorage != undefined ? txtRouteStorage : '/')
    const [oldRouteHeader, setOldRouteHeader] = useState(txtRouteStorage != undefined ? txtRouteStorage : '/')

    const data = {
        txtHeader, setTxtHeader,
        routeHeader, setRouteHeader,
        //oldTxtHeader, setOldTxtHeader,
        oldRouteHeader, setOldRouteHeader
    }

    return (
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
    )
}

export default DataProvider