import StatsList from '@components/StatsList';

const Details = ({ country, stats }) => {
  console.log('🚀 ~ file: Details.js:4 ~ Details ~ stats:', stats);
  return (
    <div className="absolute z-10 top-[80%] vertical_light_gradient w-full text-center min-h-[85vh] rounded-t-lg gradient_line">
      <h2 className="text-2xl mt-2">{country}</h2>
      {/* <StatsList stats={stats} /> */}
    </div>
  );
};

export default Details;
