import { MongoClient } from 'mongodb';

const DB_NAME = process.env.NODE_ENV === 'test' ? 'tdd_es6_test' : 'tdd_es6';

export const getUserByUsername = async (username) => {
  const client = new MongoClient('mongodb://127.0.0.1:27017');

  await client.connect();
  const db = client.db(DB_NAME);

  const result = await db.collection('users').findOne({ username });
  client.close();

  return result;
};
