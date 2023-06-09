'use client';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export function ContextWrapper({ children }) {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    return (
        <AppContext.Provider value={[isSidebarVisible, setIsSidebarVisible]}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
