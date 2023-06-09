import TitleWrapper from '@components/TitleWrapper/TitleWrapper';
import StatCard from '@components/StatCard/StatCard';

type GlobalStatsSectionProps = {
    title: string,
    stats: { [key: string]: string | null | number },
    aliases: { [key: string]: string }
}

const GlobalStatsSection = ({ title, stats, aliases }: GlobalStatsSectionProps) => {
    return (
        <div className="mb-10">
            <TitleWrapper title={title} />
            <div className="flex flex-wrap justify-center gap-4 mx-2">
                {stats &&
                    Object.entries(stats).map((stat, index)  => {
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
