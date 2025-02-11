import serverPromise from '../server';
import request from 'supertest';
import http from 'http';
import { randomInt } from 'crypto';

const MAX_INT = 10000;
let server: http.Server;

afterEach(done => {
  done();
});

beforeAll(async () => {
  server = await serverPromise;
});

afterAll(() => {
  server.close();
});

describe('users', () => {
  it ('should return all users', async () => {
    const response = await request(server).get('/users');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.users).toBeInstanceOf(Array);
    expect(response.body.users.length).toBeGreaterThan(0);
    expect(response.body.users[0]).toHaveProperty('id');
    expect(response.body.users[0]).toHaveProperty('email');
  });

  it ('should return a requested user', async () => {
    const userId = 1;
    const response = await request(server).get(`/users/${userId}`);
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.user.id).toEqual(1);
    expect(response.body.user.email).toEqual('test@test.com');
  });

  it ('should create a user', async () => {
    const randomNumber = randomInt(MAX_INT);
    const data = { id: randomNumber, email: `${randomNumber}@test.com` };
    const response = await request(server)
      .post(`/users`)
      .send(data);
    expect(response.status).toEqual(201);
    expect(response.body.user.id).toEqual(data.id);
    expect(response.body.user.email).toEqual(data.email);
  });
});
