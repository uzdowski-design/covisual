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

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Covisual',
    description: 'Wizualizacja danych COVID-19'
};

export default async function RootLayout({ children }) {
    const latestStatsPoland = getLatestRecordPoland(
        getStructuredStatsPoland(await getDataPoland())
    );

    return (
        <ContextWrapper>
            <html lang="en">
                <body className={inter.className}>
                    <Header />
                    <main>{children}</main>
                    <Footer sourceDate={latestStatsPoland.sourceDate} />
                </body>
            </html>
        </ContextWrapper>
    );
}
