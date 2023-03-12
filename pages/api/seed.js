import User from '../../models/User';
import theData from '../../utils/data.js';
import db from '../../utils/db';

const Handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(theData.users);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};

export default Handler;
