import Layout from '@/components/Layout';
import User from '@/models/User';
import db from '@/utils/db';
import axios from 'axios';
import { useState } from 'react';

type MessageT = {
  username: string;
  message: string;
};

type Props = {
  users: MessageT[];
};

export default function Home({ users }: Props) {
  console.log('les users & allMessages: ', users);
  const [username, setUsername] = useState('username');
  const [messages, setMessages] = useState<MessageT[]>([]);
  const [message, setMessage] = useState('');
  const submit = async (e: any) => {
    e.preventDefault();
    console.log('test: ', username, message);
    try {
      await axios({
        method: 'post',
        url: `/api/sendMessages`,
        data: { username: username, message: message },
      });
      console.log('message added successfully');
    } catch (error) {
      console.log('message not added: ', error);
    }
  };
  return (
    <Layout title="Accueil">
      <div className="flex flex-col space-y-10 items-center">
        <h1 className="text-center text-7xl">Game Test</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-black p-2 text-center w-fit"
        />
        <div className="border-t-2 w-[90vw] p-10 min-h-[45vh]">
          {users.map((message, index) => {
            return (
              <div key={index}>
                <h2 className="font-bold">{message.username}</h2>
                <p>{message.message}</p>
              </div>
            );
          })}
        </div>
        <form onSubmit={submit} className="w-full">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 border border-black w-full"
            placeholder="écivez votre message ici"
          />
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const users = await User.find().lean();
  // let allMessages: string[];
  // users.map((user) => allMessages.push(user.message));
  return {
    props: {
      // allMessages: allMessages ,
      users: users.map(db.convertDocToObj),
    },
  };
}
