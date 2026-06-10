#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages( id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, message TEXT, username TEXT );

INSERT INTO messages (message, username) 
VALUES
  ('Hola', 'Bryan'),
  ('Glad to see you', 'Leon'),
  ('House meeting', 'Smith'),
  ('Notify me', 'Kirk');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
