// tests/helpers/insertTestUser.ts
import { Client } from 'pg';

export async function insertTestUser() {
  const client = new Client({
    connectionString: 'postgresql://postgres:notastupidpassword@db:5432/my_local_db?sslmode=disable',
  });

  await client.connect();
  await client.query(`
        INSERT INTO users (
        username,
        email,
        password,
        created_at,
        email_verified,
        verification_token,
        verification_token_expires_at,
        refresh_token_hash
      ) VALUES (
        'testuser',
        'test@example.com',
        '$2a$12$9uStKaScB0NN3Sw7.JSdDOY4OoU5N/CHCzgk1Lg3pBfXbCJdxHeny',
        NOW(),
        true,
        'example-token',
        NOW() + INTERVAL '24 hours',
        NULL
      );
 `);

  // const resultAfterInsert = await client.query('SELECT * FROM users');
  // console.log('Users table after insert:', resultAfterInsert.rows);
  await client.end();
}
