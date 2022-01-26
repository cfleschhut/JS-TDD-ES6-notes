import { MongoClient } from 'mongodb';

export const getUserByUsername = async (username) => {
  const client = new MongoClient('mongodb://127.0.0.1:27017');

  await client.connect();
  const db = client.db('tdd_es6_test');

  const result = await db.collection('users').findOne({ username });
  client.close();

  return result;
};
