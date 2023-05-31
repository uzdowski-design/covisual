import { getData, getLatestRecord, getStructuredStats } from '@utils/statsData';

import Header from '@components/Header';
import Map from '@components/Map';
import Details from '@components/Details';

export default async function Home() {
  const data = await getData();
  const allStats = getStructuredStats(data);
  const latestStats = getLatestRecord(allStats);

  return (
    <main className="relative flex min-h-screen flex-col items-center w-full max-w-4xl mx-auto">
      <Header />
      <Map />
      <Details country="Polska" allStats={allStats} latestStats={latestStats} />
    </main>
  );
}
