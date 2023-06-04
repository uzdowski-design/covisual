import StatsSection from '@components/StatsSection';

const Details = ({ country, latestStatsPoland }) => {
  return (
    <div className="absolute z-10 top-[80%] vertical_light_gradient w-full text-center min-h-[85vh] rounded-t-lg gradient_line">
      <h2 className="text-4xl mt-3">{country}</h2>
      <p className="text-gray-500">{latestStatsPoland.statsDay}</p>
      {latestStatsPoland.total && (
        <StatsSection
          title={'Statystyki ogólne'}
          stats={latestStatsPoland}
          statsGroup={'total'}
        />
      )}
      {latestStatsPoland.daily && (
        <StatsSection
          title={'Statystyki dzienne'}
          stats={latestStatsPoland}
          statsGroup={'daily'}
        />
      )}
      {latestStatsPoland.regions && (
        <StatsSection
          title={'Statystyki regionalne'}
          stats={latestStatsPoland}
          statsGroup={'regions'}
        />
      )}
    </div>
  );
};

export default Details;
