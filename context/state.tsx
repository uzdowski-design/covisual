'use client';
import { createContext, useContext, useState } from 'react';
import { regionsSort } from '@utils/statsData';

const AppContext = createContext(null);

export function ContextWrapper({ latestStatsPoland, children }) {
    const [state, setState] = useState({
        isSidebarVisible: false,
        region: latestStatsPoland.regions.sort(regionsSort)[0]
    });

    return (
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
