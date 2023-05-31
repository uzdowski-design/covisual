import { POLAND_MAIN_STATS_NAMES } from '@utils/constants';

const StatCard = ({ name, value }) => {
  return (
    <div>
      <h2>{value}</h2>
      <p>{POLAND_MAIN_STATS_NAMES[name]}</p>
    </div>
  );
};

export default StatCard;
