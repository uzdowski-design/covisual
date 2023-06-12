import { connectToDb } from '@utils/database';
import Stats from '@models/stats';

export const GET = async (request) => {
  try {
    await connectToDb();

    const stats = await Stats.find({}).populate('statsDay');

    return new Response(JSON.stringify(stats), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch stats.', { status: 500 });
  }
};
