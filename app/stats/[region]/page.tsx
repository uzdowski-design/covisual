import { getCountryHistoricaldata, getDataGlobal } from '@utils/statsData';
import GlobalStats from '@components/GlobalStats/GlobalStats';

export function generateMetadata({ params }) {
    return { title: params.region.toUpperCase() };
}

const RegionData = async ({ params }) => {
    const globalStats = await getDataGlobal();
    const historicalData = await getCountryHistoricaldata(params.region);

    const regionStats = globalStats.response.filter(
        (region) => region.country.toLowerCase() === params.region
    );

    return (
        <div className="vertical_light_gradient w-full text-center min-h-screen">
            <GlobalStats
                stats={regionStats}
                historicalData={historicalData.response}
            />
        </div>
    );
};

export default RegionData;
