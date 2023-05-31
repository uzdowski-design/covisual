export const getData = async () => {
  const response = await fetch(`${process.env.URL}/api/stats`);
  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }
  return response.json();
};
