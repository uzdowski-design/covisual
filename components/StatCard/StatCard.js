const StatCard = (stat = 'Infected', number = 3_131_213) => {
  return (
    <div>
      <h2>{number}</h2>
      <p>{stat}</p>
    </div>
  );
};

export default StatCard;
