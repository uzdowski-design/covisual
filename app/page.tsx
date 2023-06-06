import {
    getDataPoland,
    getDataGlobal,
    getLatestRecordPoland,
    getStructuredStatsPoland
} from '@utils/statsData';
import dynamic from 'next/dynamic';

import Details from '@components/Details/Details';
import Sidebar from '@components/Sidebar/Sidebar';

const DynamicCovidMap = dynamic(() => import('@components/CovidMap/CovidMap'), {
    ssr: false
});

export default async function Home() {
    const dataPoland = await getDataPoland();
    const allStatsPoland = getStructuredStatsPoland(dataPoland);
    const latestStatsPoland = getLatestRecordPoland(allStatsPoland);

    const globalStats = await getDataGlobal();

    return (
        <div className="relative flex min-h-screen flex-col items-center w-full max-w-4xl mx-auto overflow-x-hidden">
            <DynamicCovidMap stats={latestStatsPoland} />
            <Details
                country="Polska"
                // allStatsPoland={allStatsPoland}
                latestStatsPoland={latestStatsPoland}
            />
            <Sidebar globalStats={globalStats} />
        </div>
    );
}
