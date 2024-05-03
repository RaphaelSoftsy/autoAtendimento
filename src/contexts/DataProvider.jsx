import { createContext, useState } from "react";

export const DataContext = createContext({})

const DataProvider = () => {
    const [txtHeader, setTxtHeader] = useState('')

    const data = {
        txtHeader, setTxtHeader
    }

    return (
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
    )
}

export default DataProvider