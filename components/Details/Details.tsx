import StatsSection from '@components/StatsSection/StatsSection';
import { StructuredEntry } from '@utils/statsData';

type DetailsProps = {
    country: string,
    latestStatsPoland: StructuredEntry,
    allStatsPoland: StructuredEntry[]
}

const Details = ({ country, allStatsPoland, latestStatsPoland }: DetailsProps) => {
    return (
        <div className="absolute z-10 top-[60%] vertical_light_gradient w-full text-center rounded-t-lg gradient_line">
            <h2 className="text-4xl mt-3">{country}</h2>
            <p className="text-gray-500">{latestStatsPoland?.statsDay}</p>
            <div className='mb-20'>
            {latestStatsPoland?.total && (
                <StatsSection
                    title={'Statystyki ogólne'}
                    stats={latestStatsPoland}
                    statsGroup={'total'}
                />
            )}

            {latestStatsPoland?.daily  && (
                <StatsSection
                    title={'Statystyki dzienne'}
                    stats={latestStatsPoland}
                    statsGroup={'daily'}
                    allStatsPoland={allStatsPoland}
                    showChart={true}
                />
            )}

            {latestStatsPoland?.regions && (
                <StatsSection
                    title={'Statystyki regionalne'}
                    stats={latestStatsPoland}
                    statsGroup={'regions'}
                    allStatsPoland={allStatsPoland}
                    showChart={true}
                />
            )}
            </div>
        </div>
    );
};

export default Details;
