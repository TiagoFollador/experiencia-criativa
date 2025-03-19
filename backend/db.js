import mysql from "mysql2";
//precisa ser mysql2 por conta da senha, para rodar via xamp sem senha, mysql normal

export const db = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "123456",
    database: "users",
});