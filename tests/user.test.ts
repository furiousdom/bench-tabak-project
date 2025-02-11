import serverPromise from '../server';
import request from 'supertest';
import http from 'http';

let server: http.Server;

afterEach(done => {
  server.close();
  done();
});

beforeAll(async () => {
  server = await serverPromise;
});

describe('users', () => {
  it ('should return all users', async () => {
    const response = await request(server).get('/users');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.users).toHaveLength(2);
  });

  it ('should return a requested user', async () => {
    const userId = 1;
    const response = await request(server).get(`/users/${userId}`);
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.user.name).toEqual('Alice');
  });

  it ('should create a user', async () => {
    const response = await request(server)
      .post(`/users`)
      .send({ name: 'John Doe' });
    expect(response.status).toEqual(201);
  });
});
