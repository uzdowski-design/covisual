'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [stats, setStats] = useState([]);

  const fetchStats = async () => {
    const response = await fetch('/api/stats');
    const data = await response.json();
    console.log(data);
    setStats(data);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {stats.map((stat) => (
        <h1 key={stat._id}>{stat._id}</h1>
      ))}
      {JSON.stringify(stats)}
    </main>
  );
}
