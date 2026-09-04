import pool from "../configs/database.js";

const userRepository = {
    selecionar: async () =>{
        const sql = 'SELECT * FROM users;';
        const [rows] = await pool.execute(sql);
        return rows;
    },
    selecionarPorID: async (userId) =>{
        const sql = 'SELECT * FROM users WHERE id = ?;';
        const [rows] = await pool.execute(sql, [userId]);
        return rows;
    },
    deletar: async (userId) =>{
        const sql = 'DELETE * FROM users WHERE id = ?;';
        const [rows] = await pool.execute(sql, [userId]);
        return rows;
    },
    criar: async (name, email, passworld) =>{
        const sql = 'INSERT INTO users VALUES(null, ?, ?, ?);';
        const [rows] = await pool.execute(sql, [name, email, passworld]);
        return rows;
    },
    atualizar: async (name, email, passworld, userId) =>{
        const sql = 'UPDATE users SET name = ?, email = ?, passworld = ? WHERE id = ?';
        const [rows] = await pool.execute(sql, [name, email, passworld, userId]);
        return rows;
    },
}

export default userRepository;