import {
  getDataPoland,
  getDataGlobal,
  getLatestRecordPoland,
  getStructuredStatsPoland
} from '@utils/statsData';

import Header from '@components/Header';
import Map from '@components/Map';
import Details from '@components/Details';

export default async function Home() {
  const dataPoland = await getDataPoland();
  const allStatsPoland = getStructuredStatsPoland(dataPoland);
  const latestStatsPoland = getLatestRecordPoland(allStatsPoland);

  const globalStats = await getDataGlobal();

  return (
    <main className="relative flex min-h-screen flex-col items-center w-full max-w-4xl mx-auto">
      <Header />
      <Map />
      <Details
        country="Polska"
        allStatsPoland={allStatsPoland}
        latestStatsPoland={latestStatsPoland}
      />
    </main>
  );
}
