export const getDataPoland = async () => {
    const response = await fetch(`${process.env.URL}/api/stats`, {
        next: {
            revalidate: 60 * 60 // 1h
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch data.');
    }
    return response.json();
};

export const getDataGlobal = async () => {
    const result = await fetch(process.env.GLOBAL_STATS_URL, {
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_API_HOST
        },
        next: {
            revalidate: 60 * 60 // 1h
        }
    });
    const data = await result.json();
    return data;
};

export const getStructuredStatsPoland = (stats) => {
    const structuredStats = [];
    for (const [index, entry] of stats.entries()) {
        structuredStats.push(structuredEntry(entry));
    }
    return structuredStats;
};

export const getLatestRecordPoland = (stats) => {
    let latestRecord = stats[0];
    for (const [index, entry] of stats.entries()) {
        if (new Date(entry.sourceDate) > new Date(latestRecord.sourceDate)) {
            latestRecord = stats[index];
        }
    }
    return latestRecord;
};

export const getRegionsData = (stats) => {
    return stats.regions;
};

export const getSortedRegionsData = (regions) => {
    const sortedRegions = regions.map((element) => {
        const newRegion = {};
        newRegion.name = element.name;
        newRegion.population = element.population;
        newRegion.totalInfected = element.totalInfected;

        newRegion.newlyInfected = element.newlyInfected;
        newRegion.reInfected = element.reInfected;

        newRegion.recovered = element.recovered;
        newRegion.deceased = element.deceased;

        newRegion.deceasedCovidOnly = element.deceasedCovidOnly;
        newRegion.deceasedWithOtherDiseases = element.deceasedWithOtherDiseases;

        newRegion.testsDone = element.testsDone;
        newRegion.testsPositive = element.testsPositive;
        newRegion.quarantied = element.quarantied;
        newRegion.totalInfectedPer10k = element.totalInfectedPer10k;
        newRegion.newlyInfectedPer10k = element.newlyInfectedPer10k;
        newRegion.reInfectedPer10k = element.reInfectedPer10k;
        return newRegion;
    });
    return sortedRegions;
};

const structuredEntry = (entry) => {
    const structuredEntry = {};
    const total = {};
    const daily = {};
    const regions = getSortedRegionsData(entry.regions);

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

export const regionsSort = (a, b) => {
    const nameA = removePolishSigns(a.name.toLowerCase()); // ignore upper and lowercase
    const nameB = removePolishSigns(b.name.toLowerCase()); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
};

export const countriesSortByActiveCases = (a, b) => {
    const nameA = a.cases.active;
    const nameB = b.cases.active;
    if (nameA < nameB) {
        return 1;
    }
    if (nameA > nameB) {
        return -1;
    }

    return 0;
};

const removePolishSigns = (string) => {
    string = string.replace('ę', 'e');
    string = string.replace('ó', 'o');
    string = string.replace('ą', 'a');
    string = string.replace('ś', 's');
    string = string.replace('ł', 'l');
    string = string.replace('ż', 'z');
    string = string.replace('ź', 'z');
    string = string.replace('ć', 'c');
    string = string.replace('ń', 'n');
    return string;
};

export const removeEmptyNumbers = (number) => {
    if (number === null || number === undefined || number < 0) return 0;
    return number;
};

export const getStatsLevel = (stat, max) => {
    if (stat < max / 3) return 'LOW';
    if (stat >= max / 3 && stat < (max / 3) * 2) return 'MEDIUM';
    return 'HIGH';
};

export const getMaxInfected = (stats) => {
    let max = 0;
    stats.forEach((stat) => {
        if (stat.totalInfected > max) {
            max = stat.totalInfected;
        }
    });
    return max;
};
