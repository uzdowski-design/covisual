import StatCard from '@components/StatCard';
const StatsList = ({ stats, statsGroup }) => {
  const { total, daily } = stats;
  const group = {
    total,
    daily
  };

  const statsToDisplay = group[statsGroup];

  return (
    <div className="flex flex-wrap justify-center gap-4 mx-2">
      {statsToDisplay &&
        Object.entries(statsToDisplay).map((stat, index) => {
          const name = stat[0];
          const value = stat[1];
          return <StatCard key={index} name={name} value={value} />;
        })}
    </div>
  );
};

export default StatsList;
