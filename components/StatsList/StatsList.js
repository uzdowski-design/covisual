import StatCard from '@components/StatCard';
const StatsList = ({ latestStats }) => {
  const { total } = latestStats;
  const totalArray = Object.entries(total);

  return (
    <div>
      {total &&
        Object.entries(total).map((stat, index) => {
          const name = stat[0];
          const value = stat[1];
          return <StatCard key={index} name={name} value={value} />;
        })}
    </div>
  );
};

export default StatsList;
