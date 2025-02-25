
import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

interface LoadingContextType {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}


interface LoaderProviderProps { 
    children: ReactNode;
}

const LoadingContext = createContext<LoadingContextType |undefined >(undefined);

//here we created our custom hook
export const useLoading = () => {
    const context = useContext(LoadingContext);
    return context;
};

export const LoaderProvider : React.FC<LoaderProviderProps> = ({children}) => {
    const [loading,setLoading] = useState(false);
    
    return(
        <LoadingContext.Provider value={{loading,setLoading}}>
            {children}
        </LoadingContext.Provider>
    )

}