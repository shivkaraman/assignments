import { Client } from 'pg';
import { DB_URL } from './config';
import { getTodos } from './db/todo';

export const client = new Client({
    connectionString: DB_URL,
});
