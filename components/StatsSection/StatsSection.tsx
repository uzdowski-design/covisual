import StatsList from '@components/StatsList/StatsList';
import TitleWrapper from '@components/TitleWrapper/TitleWrapper';
import { StructuredEntry } from '@utils/statsData';

type StatsSectionProps = {
    title: string,
    stats: StructuredEntry,
    statsGroup: string,
}


const StatsSection = ({ title, stats, statsGroup = null }: StatsSectionProps) => {
    return (
        <div className="mb-10">
            <TitleWrapper title={title} />
            <StatsList stats={stats} statsGroup={statsGroup} />
        </div>
    );
};

export default StatsSection;
