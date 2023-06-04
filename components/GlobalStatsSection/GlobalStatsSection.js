import TitleWrapper from '@components/TitleWrapper/TitleWrapper';
import StatCard from '@components/StatCard/StatCard';

const GlobalStatsSection = ({ title, stats, aliases }) => {
    return (
        <div className="mb-10">
            <TitleWrapper title={title} />
            <div className="flex flex-wrap justify-center gap-4 mx-2">
                {stats &&
                    Object.entries(stats).map((stat, index) => {
                        return (
                            <StatCard
                                key={index}
                                stat={stat}
                                aliases={aliases}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default GlobalStatsSection;
