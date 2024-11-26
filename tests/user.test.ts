import server from '../server';
import request from 'supertest';

afterEach(done => {
  server.close();
  done();
});

describe('users', () => {
  it ('should return all users', async () => {
    const response = await request(server).get('/users');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.users).toHaveLength(2);
  });
});
