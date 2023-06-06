import StatsList from '@components/StatsList/StatsList';
import TitleWrapper from '@components/TitleWrapper/TitleWrapper';

const StatsSection = ({ title, stats, statsGroup = null }) => {
    return (
        <div className="mb-10">
            <TitleWrapper title={title} />
            <StatsList stats={stats} statsGroup={statsGroup} />
        </div>
    );
};

export default StatsSection;
