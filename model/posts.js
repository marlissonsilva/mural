const mysql = require('mysql')
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'muraldb'
})

conn.connect()
module.exports = {

    getAll() {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM tbl_posts', (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },

    newPosts(title, description) {
        conn.query(
            `INSERT INTO tbl_posts (title, description) VALUES (?,?)`,
            [title, description]
        )

    }
}