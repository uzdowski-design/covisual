import { getData } from '@utils/getData';

import Header from '@components/Header';
import Map from '@components/Map';
import Details from '@components/Details';

export default async function Home() {
  const stats = await getData();

  return (
    <main className="relative flex min-h-screen flex-col items-center w-full max-w-4xl mx-auto">
      <Header />
      <Map />
      <Details country="Polska" stats={stats} />
    </main>
  );
}
