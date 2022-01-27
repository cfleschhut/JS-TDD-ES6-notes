import { MongoClient } from 'mongodb';

export const setDatabaseData = async (collectionName, data) => {
  const client = new MongoClient('mongodb://127.0.0.1:27017');

  await client.connect();

  const db = client.db('tdd_es6_test');

  await db.collection(collectionName).insertMany(data);

  client.close();
};

export const getDatabaseData = async (collectionName) => {
  const client = new MongoClient('mongodb://127.0.0.1:27017');

  await client.connect();

  const db = client.db('tdd_es6_test');

  const result = await db.collection(collectionName).find().toArray();

  client.close();

  return result;
};

export const resetDatabase = async () => {
  const client = new MongoClient('mongodb://127.0.0.1:27017');

  await client.connect();

  const db = client.db('tdd_es6_test');

  await db.dropDatabase();
  client.close();
};
