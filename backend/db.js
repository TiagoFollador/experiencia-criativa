import mysql2 from "mysql2";
import mysql from "mysql";
//precisa ser mysql2 por conta da senha, para rodar via xamp sem senha, mysql normal

export const db = mysql2.createConnection({ // mysql Server com senha
    host: "localhost",
    port: 3307,
    user: "root",
    password: "123456",
    database: "users",
});

// export const db = mysql2.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "",
//     database: "users",
// });

/**
 * 
 * 
 */