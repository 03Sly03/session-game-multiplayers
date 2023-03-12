import User from '../../models/User';
import db from '../../utils/db';
import data from '../../utils/data';
import { NextApiHandler } from 'next';

const Handler: NextApiHandler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};

export default Handler;
