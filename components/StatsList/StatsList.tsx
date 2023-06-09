'use client';

import {
    POLAND_MAIN_STATS_NAMES,
    POLAND_REGION_STATS_NAMES
} from '@utils/constants';
import { useEffect, useState } from 'react';
import { StructuredEntry, regionsSort } from '@utils/statsData';

import StatCard from '@components/StatCard/StatCard';
import RegionStatsDropdown from './RegionStatsDropdown';
import { useAppContext } from '@context/state';

type StatsListProps = {
    stats: StructuredEntry,
    statsGroup: string,
}

const StatsList = ({ stats, statsGroup }:StatsListProps ) => {
    const { total, daily, regions } = stats;
    const group = {
        total,
        daily,
        regions
    };
    let aliases = {};
    const statsToDisplay = group[statsGroup];

    const [state, setState] = useAppContext();
    const sortedRegions = regions.sort(regionsSort);

    // const [region, setRegion] = useState(sortedRegions[0]);

    switch (statsGroup) {
        case 'total':
        case 'daily':
            aliases = POLAND_MAIN_STATS_NAMES;

            return (
                <div className="flex flex-wrap justify-center gap-4 mx-2">
                    {statsToDisplay &&
                        Object.entries(statsToDisplay).map((stat, index)  => {
                            return (
                                <StatCard
                                    key={index}
                                    stat={stat}
                                    aliases={aliases}
                                />
                            );
                        })}
                </div>
            );

        case 'regions':
            aliases = POLAND_REGION_STATS_NAMES;

            const handleChange = (e) => {
                const newRegion = regions.filter(
                    (region) => region.name === e.target.value
                );
                setState((prev) => ({...prev, region: newRegion[0]}));
            };

            return (
                <>
                    <RegionStatsDropdown
                        sortedRegions={sortedRegions}
                        region={state.region}
                        handleChange={handleChange}
                    />
                    <div className="flex flex-wrap justify-center gap-4 mx-2">
                        {state.region &&
                            Object.entries(state.region)
                                .filter((entry) => entry[0] !== 'name')
                                .map((stat, index) => {
                                    return (
                                        <StatCard
                                            key={index}
                                            stat={stat}
                                            aliases={aliases}
                                        />
                                    );
                                })}
                    </div>
                </>
            );
    }
};

export default StatsList;
