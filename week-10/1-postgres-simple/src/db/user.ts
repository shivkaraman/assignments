import { client } from '..';

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
    username: string,
    password: string,
    name: string
) {
    try {
        const query =
            'INSERT INTO users (username, password, name) VALUES($1, $2, $3) RETURNING username,password,name';
        const values = [username, password, name];
        const result = await client.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.log('Error inserting user: ', err);
        return null;
    }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try {
        const result = await client.query('SELECT * from users WHERE id = $1', [
            userId,
        ]);
        return result.rows[0];
    } catch (err) {
        console.log('Error getting user: ', err);
        return null;
    }
}
