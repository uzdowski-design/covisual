import { Inter } from 'next/font/google';

import { ContextWrapper } from '@context/state';
import {
    getDataPoland,
    getStructuredStatsPoland,
    getLatestRecordPoland
} from '@utils/statsData';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

import '@styles/globals.css';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Covisual',
    description: 'Wizualizacja danych COVID-19'
};

export default async function RootLayout({ children }: { children: ReactNode }): Promise<JSX.Element>  {
    const latestStatsPoland = getLatestRecordPoland(
        getStructuredStatsPoland(await getDataPoland())
    );

    return (
        <ContextWrapper latestStatsPoland={latestStatsPoland}>
            <html lang="en">
                <body className={`${inter.className} max-h-[100vh]`  }>
                    <Header />
                    <main>{children}</main>
                    <Footer sourceDate={latestStatsPoland.sourceDate} />
                </body>
            </html>
        </ContextWrapper>
    );
}
