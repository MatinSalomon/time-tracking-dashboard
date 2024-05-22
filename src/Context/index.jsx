import { createContext, useState } from 'react';
import { useFetch } from '../useFetch'

export const DataContext = createContext();



export function DataProvider ({children}) {
    const { data } = useFetch('../data.json')

    const [daily, setDaily] = useState(false)
    const [weekly, setWeekly] = useState(true)
    const [monthly, setMonthly] = useState(false)


    return (
        <DataContext.Provider value={{
            data,
            daily,
            setDaily,
            weekly,
            setWeekly,
            monthly,
            setMonthly
            }}>
            {children}
        </DataContext.Provider>

    )
}