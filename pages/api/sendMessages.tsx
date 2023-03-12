import User from '@/models/User';
import db from '@/utils/db';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    console.log('la data: ', req.body.username);
    return postHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};

const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();
  const newUserMessage = new User({
    username: req.body.username,
    message: req.body.message,
  });
  const user = await newUserMessage.save();
  await db.disconnect();
  res.send({ message: 'Message added successfully', user });
};

export default handler;
