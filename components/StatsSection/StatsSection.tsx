import LineChart from '@components/LineChart/LineChart';
import StatsList from '@components/StatsList/StatsList';
import TitleWrapper from '@components/TitleWrapper/TitleWrapper';
import { StructuredEntry } from '@utils/statsData';

type StatsSectionProps = {
    title: string;
    stats: StructuredEntry;
    statsGroup: string;
    allStatsPoland?: StructuredEntry[];
    showChart?: boolean;
};

const StatsSection = ({
    title,
    stats,
    statsGroup = null,
    allStatsPoland = null,
    showChart = false
}: StatsSectionProps) => {
    return (
        <div className="mb-10">
            <TitleWrapper title={title} />
            {showChart && (
                <LineChart stats={allStatsPoland} statsGroup={statsGroup} />
            )}
            <StatsList stats={stats} statsGroup={statsGroup} />
        </div>
    );
};

export default StatsSection;
