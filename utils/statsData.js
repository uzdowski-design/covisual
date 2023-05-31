export const getData = async () => {
  const response = await fetch(`${process.env.URL}/api/stats`);
  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }
  return response.json();
};

export const getStructuredStats = (stats) => {
  const structuredStats = [];
  for (const [index, entry] of stats.entries()) {
    structuredStats.push(structuredEntry(entry));
  }
  return structuredStats;
};

export const getLatestRecord = (stats) => {
  let latestRecord = stats[0];
  for (const [index, entry] of stats.entries()) {
    if (new Date(entry.statsDate) > new Date(latestRecord.statsDate)) {
      latestRecord = stats[index];
    }
  }
  return latestRecord;
};

export const getRegionsData = (stats) => {
  return stats.regions;
};

const structuredEntry = (entry) => {
  const structuredEntry = {};
  const total = {};
  const daily = {};
  const regions = entry.regions;

  structuredEntry._id = entry._id;
  structuredEntry.statsDate = entry.statsDate;
  structuredEntry.statsDay = entry.statsDay;
  structuredEntry.sourceDate = entry.sourceDate;

  total.totalInfected = entry.totalInfected;
  total.newlyInfected = entry.newlyInfected;
  total.reInfected = entry.reInfected;
  total.deceased = entry.deceased;
  total.recovered = entry.recovered;

  for (const key in entry) {
    if (key.includes('daily')) {
      daily[key] = entry[key];
    }
  }
  structuredEntry.total = total;
  structuredEntry.daily = daily;
  structuredEntry.regions = regions;

  return structuredEntry;
};
