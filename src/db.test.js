import { expect } from 'chai';
import { getUserByUsername } from './db';
import {
  getDatabaseData,
  setDatabaseData,
  resetDatabase,
} from './test-helpers';

describe('getUserByUsername', () => {
  it('gets the correct user from the database given a username', async () => {
    const fakeData = [
      {
        id: '123',
        username: 'abc',
        email: 'abc@example.com',
      },
      {
        id: '124',
        username: 'wrong',
        email: 'wrong@example.com',
      },
    ];

    await setDatabaseData('users', fakeData);

    const actual = await getUserByUsername('abc');
    const finalDBState = await getDatabaseData('users');
    await resetDatabase();

    const expected = {
      id: '123',
      username: 'abc',
      email: 'abc@example.com',
    };

    expect(actual).excludingEvery('_id').to.deep.equal(expected);
    expect(finalDBState).excludingEvery('_id').to.deep.equal(fakeData);
  });
});