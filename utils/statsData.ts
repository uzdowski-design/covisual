export type StructuredEntry ={
    _id: string,
    statsDate: string,
    statsDay: string,
    sourceDate: string,
    total: Total,
    daily: Daily,
    regions: NewRegion[],
};

type Total = {
    totalInfected: number,
    newlyInfected: number,
    reInfected: number,
    deceased: number,
    recovered: number,
}
type Daily = {
    dailyTotalInfected?: number,
    dailyNewlyInfected?: number,
    dailyReInfected?: number,
    dailyTested?: number,
    dailyPositiveTests?: number,
    dailyDeceased?: number,
    dailyDeceasedCovidOnly?: number,
    dailyDeceasedCovidWithOtherDiseases?: number,
    dailyRecovered?: number,
    dailyQuarantine?: number,
}
export type Regions = {
    name: string,
    population: number,
    deceased: number,
    deceasedCovidOnly: number,
    deceasedWithOtherDiseases: number,
    quarantied: number,
    testsDone: number,
    testsPositive: number,
    testsNegative: number,
    testsFromPOZ: number,
    testsOthers: number,
    recovered: number,
    reInfected: number,
    totalInfected: number,
    newlyInfectedPer10k: number,
    reInfectedPer10k: number,
    totalInfectedPer10k: number,
    newlyInfected: number
}
export type NewRegion = {
    name: string,
    population: number,
    totalInfected: number,
    newlyInfected: number,
    reInfected: number,
    recovered: number,
    deceased: number,
    deceasedCovidOnly: number,
    deceasedWithOtherDiseases: number,
    testsDone: number,
    testsPositive: number,
    quarantied: number,
    totalInfectedPer10k: number,
    newlyInfectedPer10k: number,
    reInfectedPer10k: number,
}

type NumberOrNull = number | null

export type GlobalStatsRegion = {
    continent: string,
    country: string,
    population: NumberOrNull,
    cases: {
      new: NumberOrNull,
      active: NumberOrNull,
      critical: NumberOrNull,
      recovered: NumberOrNull,
      '1M_pop': string,
      total: NumberOrNull
    },
    deaths: { new: NumberOrNull, '1M_pop': string, total: NumberOrNull },
    tests: { '1M_pop': string, total: NumberOrNull },
    day: string,
    time: string
  }

export type GlobalStats = {
    get: string,
    parameters: [],
    errors: [],
    results: NumberOrNull,
    response: GlobalStatsRegion[],
  }

export const getDataPoland = async () => {
    const response = await fetch(`http://${process.env.VERCEL_URL}/api/stats`, {
        next: {
            revalidate: 60 * 60 // 1h
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch Poland data.');
    }
    const data = await response.json();
    return data;
};

export const getDataGlobal = async () => {
    const response = await fetch(process.env.GLOBAL_STATS_URL, {
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_API_HOST
        },
        next: {
            revalidate: 60 * 60 // 1h
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch Global data.');
    }
    const data = await response.json();
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

export const getRegionsData = (stats): Regions => {
    return stats.regions;
};

export const getSortedRegionsData = (regions) => {

    const sortedRegions = regions.map((element) => {
        const newRegion: NewRegion = {
            name: element.name,
            population: element.population,
            totalInfected: element.totalInfected,
    
            newlyInfected: element.newlyInfected,
            reInfected: element.reInfected,
    
            recovered: element.recovered,
            deceased: element.deceased,
    
            deceasedCovidOnly: element.deceasedCovidOnly,
            deceasedWithOtherDiseases: element.deceasedWithOtherDiseases,
    
            testsDone: element.testsDone,
            testsPositive: element.testsPositive,
            quarantied: element.quarantied,
            totalInfectedPer10k: element.totalInfectedPer10k,
            newlyInfectedPer10k: element.newlyInfectedPer10k,
            reInfectedPer10k: element.reInfectedPer10k,
        };
        return newRegion;
    });
    return sortedRegions;
};

const structuredEntry = (entry) => {
    let daily: Daily ={}
    const regions: Regions[] = getSortedRegionsData(entry.regions);

    const total: Total = {
        totalInfected: entry.totalInfected,
        newlyInfected: entry.newlyInfected,
        reInfected: entry.reInfected,
        deceased: entry.deceased,
        recovered: entry.recovered,
    }

    for (const key in entry) {
        if (key.includes('daily')) {
            daily[key] = entry[key];
        }
    }

    let structuredEntry: StructuredEntry = {
        _id: entry._id,
        statsDate: entry.statsDate,
        statsDay: entry.statsDay,
        sourceDate: entry.sourceDate,
        total: total,
        daily: daily,
        regions: regions,
    }

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
