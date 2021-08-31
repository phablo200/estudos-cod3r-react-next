import { createContext, useEffect, useState } from 'react';

interface AppContextProps {
    tema: string;
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({
    tema: null
});

export function AppProvider (props) {    
    const [tema, setTema] = useState('dark');

    const alternarTema = () => {
        setTema(tema === '' ? 'dark' : '');
        localStorage.setItem('tema', tema === '' ? 'dark' : '');
    };

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema');
        setTema(temaSalvo);
    }, []);

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContext;
export const AppConsumer = AppContext.Consumer;