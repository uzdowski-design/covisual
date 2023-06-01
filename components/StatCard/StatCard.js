import { POLAND_MAIN_STATS_NAMES } from '@utils/constants';

const StatCard = ({ stat }) => {
  const name = stat[0];
  const value = stat[1];

  return (
    <div className="min-w-[170px] border-solid border-2 border-sky-500 rounded-md p-2 shadow-md">
      <h3 className="text-xl">{value.toLocaleString('pl-PL')}</h3>
      <p className="text-xs">{POLAND_MAIN_STATS_NAMES[name]}</p>
    </div>
  );
};

export default StatCard;
