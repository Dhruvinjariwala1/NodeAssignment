const mysql = require('mysql2/promise');

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'emp'
};

async function main() {

    const connection = await mysql.createConnection(config);

    try {

        const insertQuery = 'INSERT INTO employee (name, position, salary) VALUES (?, ?, ?)';
        const [insertResult] = await connection.execute(insertQuery, ['Akshay', 'Data Engineer', 40000]);
        console.log('Inserted record ID:', insertResult.insertId);


        const selectQuery = 'SELECT * FROM employee';
        const [rows] = await connection.execute(selectQuery);

        console.log('All employees:');
        rows.forEach(row => {
            console.log(`ID: ${row.id}, Name: ${row.name}, Position: ${row.position}, Salary: ${row.salary}`);
        });
    } catch (error) {
        console.error('Error:', error);
    } finally {

        await connection.end();
    }
}

main();