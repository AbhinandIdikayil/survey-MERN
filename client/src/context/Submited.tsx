import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type SubmitedContextType = {
    submited: boolean,
    setSubmited: Dispatch<SetStateAction<boolean>>;
}


const SubmitedContext = createContext<SubmitedContextType | null>(null)


export const useSubmitedContext = () => {
    const context = useContext(SubmitedContext);
    if (!context) {
        throw new Error('useSubmitedContext must be used within a SubmitedContextProvider');
    }
    return context;
};

export const SubmitedContextProvider = ({ children }: { children: ReactNode }) => {
    const [submited, setSubmited] = useState<boolean>(false)

    return (
        <SubmitedContext.Provider value={{ submited, setSubmited }} >
            {children}
        </SubmitedContext.Provider>
    )
}