import { GLOBAL_STATS_NAMES } from '@utils/constants';
import StatCard from '@components/StatCard/StatCard';
import TitleWrapper from '@components/TitleWrapper/TitleWrapper';
import GlobalStatsSection from '@components/GlobalStatsSection/GlobalStatsSection';
import { GlobalStats } from '@utils/statsData';

type GlobalStatsProps = {
    stats: GlobalStats
}

const GlobalStats = ({ stats }: GlobalStatsProps) => {
    const aliases = GLOBAL_STATS_NAMES;
    const cases = { ...stats[0].cases };
    const deaths = { ...stats[0].deaths };
    const tests = { ...stats[0].tests };

    const statSections = [cases, deaths, tests];
    const statSectionsNames = ['Zachorowania', 'Zgony', 'Testy'];

    return (
        <div className="m-0 flex flex-col">
            <h2 className="text-4xl mt-3">{stats[0].country}</h2>
            <p className="text-gray-500">{stats[0].day}</p>
            <div className="mb-10">
                <TitleWrapper title="Informacje ogólne" />
                <div className="flex flex-wrap justify-center gap-4 mx-2">
                    <StatCard
                        stat={['population', stats[0]?.population]}
                        aliases={aliases}
                    />
                    <StatCard
                        stat={['continent', stats[0]?.continent]}
                        aliases={aliases}
                    />
                </div>
            </div>

            {statSections.map((section, index) => (
                <GlobalStatsSection
                    key={index}
                    title={statSectionsNames[index]}
                    stats={section}
                    aliases={aliases}
                />
            ))}
        </div>
    );
};

export default GlobalStats;
