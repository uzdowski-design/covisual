import StatCard from '@components/StatCard';
const StatsList = ({ stats = [] }) => {
  return (
    <div>
      {stats.length && stats.map((stat) => <StatCard key={stat} stat={stat} />)}
    </div>
  );
};

export default StatsList;
