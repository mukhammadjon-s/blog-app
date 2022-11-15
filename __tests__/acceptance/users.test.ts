/* eslint-disable @typescript-eslint/no-var-requires */
import {createConnection} from "typeorm";
import * as request from 'supertest';
import app from "../../src/app";
require('dotenv').config();

let connection, server;

const testUser =  {
  first_name: "Phantom",
  pass: 'password',
  lastName: "Assassin",
  age: 24
}

beforeEach(async() => {
  connection = await createConnection();
  await connection.synchronize(true)
  server = app.listen(process.env.PORT)
});

afterEach(() => {
  connection.close();
  server.close();
});


it('should be no users initially', async() => {
  const response = await request(app).get('/users')
  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual([])
})

it('should create a user', async() => {
  const response = await request(app).post('/users').send(testUser)
  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual({...testUser, id:1})
})