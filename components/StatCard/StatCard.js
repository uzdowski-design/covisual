import { removeEmptyNumbers } from '@utils/statsData';
const StatCard = ({ stat, aliases }) => {
    const name = stat[0];
    const value = stat[1];

    return (
        <div className="min-w-[170px] border-solid border-2 border-sky-500 rounded-md p-2 shadow-md">
            <h3 className="text-xl">
                {removeEmptyNumbers(value)?.toLocaleString('pl-PL')}
            </h3>
            <p className="text-xs">{aliases[name]}</p>
        </div>
    );
};

export default StatCard;
