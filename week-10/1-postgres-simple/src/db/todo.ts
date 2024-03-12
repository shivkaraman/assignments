import { client } from '..';
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
    userId: number,
    title: string,
    description: string
) {
    try {
        const query =
            'INSERT INTO todos (user_id, title, description)  VALUES($1, $2, $3) RETURNING *';
        const values = [userId, title, description];
        const result = await client.query(query, values);
        return result.rows[0];
    } catch (err) {
        console.log('Error inserting todo: ', err);
        return null;
    }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try {
        const result = await client.query(
            'UPDATE todos SET done=true WHERE id = $1 RETURNING *',
            [todoId]
        );
        return result.rows[0];
    } catch (err) {
        console.log('Error updating todo: ', err);
        return null;
    }
}
/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    try {
        const query = 'SELECT * FROM todos WHERE user_id = $1';
        const value = [userId];
        const result = await client.query(query, value);
        return result.rows;
    } catch (err) {
        console.log('Error getting todos: ', err);
        return null;
    }
}
