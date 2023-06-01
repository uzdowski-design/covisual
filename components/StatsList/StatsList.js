import StatCard from '@components/StatCard';
const StatsList = ({ stats, statsGroup }) => {
  const { total, daily, regions } = stats;
  const group = {
    total,
    daily,
    regions
  };

  const statsToDisplay = group[statsGroup];

  return (
    <div className="flex flex-wrap justify-center gap-4 mx-2">
      {statsToDisplay &&
        Object.entries(statsToDisplay).map((stat, index) => {
          return <StatCard key={index} stat={stat} />;
        })}
    </div>
  );
};

export default StatsList;
