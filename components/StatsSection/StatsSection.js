import StatsList from '@components/StatsList';
import TitleWrapper from '@components/TitleWrapper/TitleWrapper';

const StatsSection = ({ title, stats, statsGroup }) => {
  return (
    <div className="my-10">
      <TitleWrapper title={title} />
      <StatsList stats={stats} statsGroup={statsGroup} />
    </div>
  );
};

export default StatsSection;
