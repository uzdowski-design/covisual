'use client';

import { useState, useEffect } from 'react';

import Header from '@components/Header';
import Map from '@components/Map';
import Details from '@components/Details';

export default function Home() {
  const [stats, setStats] = useState([]);

  const fetchStats = async () => {
    const response = await fetch('/api/stats');
    const data = await response.json();
    setStats(data);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <Map />
      <Details />
      {/* <h1>Entries: {stats.length}</h1> */}
      {/* {stats.map((stat) => (
        <h3 key={stat._id}>{stat._id}</h3>
      ))} */}
    </main>
  );
}
