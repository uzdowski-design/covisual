import {
  getDataPoland,
  getDataGlobal,
  getLatestRecordPoland,
  getStructuredStatsPoland
} from '@utils/statsData';

import Map from '@components/Map';
import Details from '@components/Details';
import Sidebar from '@components/Sidebar/Sidebar';

export default async function Home() {
  const dataPoland = await getDataPoland();
  const allStatsPoland = getStructuredStatsPoland(dataPoland);
  const latestStatsPoland = getLatestRecordPoland(allStatsPoland);

  const globalStats = await getDataGlobal();

  return (
    <div className="relative flex min-h-screen flex-col items-center w-full max-w-4xl mx-auto overflow-x-hidden">
      <Map />
      <Details
        country="Polska"
        allStatsPoland={allStatsPoland}
        latestStatsPoland={latestStatsPoland}
      />
      <Sidebar globalStats={globalStats} />
    </div>
  );
}
