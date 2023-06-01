import Footer from '@components/Footer';
import StatsSection from '@components/StatsSection';

const Details = ({ country, latestStats }) => {
  return (
    <div className="absolute z-10 top-[80%] vertical_light_gradient w-full text-center min-h-[85vh] rounded-t-lg gradient_line">
      <h2 className="text-4xl my-2">{country}</h2>
      <StatsSection
        title={'Statystyki ogólne'}
        stats={latestStats}
        statsGroup={'total'}
      />
      <StatsSection
        title={'Statystyki dzienne'}
        stats={latestStats}
        statsGroup={'daily'}
      />
      <StatsSection
        title={'Statystyki regionalne'}
        stats={latestStats}
        statsGroup={'regions'}
      />
      <Footer sourceDate={latestStats.sourceDate} />
    </div>
  );
};

export default Details;
