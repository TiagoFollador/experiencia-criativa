import { db } from "../db.js";
import { users } from "./fake-data.js";


export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios;";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ 
      error: err,
      teste: err.message,
      db: db.config
    });
    else {
      if (data.length > 0) { // dados do banco
        res.status(200).json(data);
      } else { // simulando caso o banco esteja vazio
        res.status(201).json(users);
      }
    }
  });
};

export const storeUser = (header, res) => {
  const q = "SELECT * FROM usuarios;";


  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ 
      error: err,
      teste: err.message,
      db: db.config
    });
    
    else {
      if (data.length > 0) { // dados do banco
        res.status(200).json(data);
      } else { // simulando caso o banco esteja vazio
        res.status(201).json(users);
      }
    }
  });
};

export const editUser = (_, res) => {
  const q = "SELECT * FROM usuarios;";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ 
      error: err,
      teste: err.message,
      db: db.config
    });
    else {
      if (data.length > 0) { // dados do banco
        res.status(200).json(data);
      } else { // simulando caso o banco esteja vazio
        res.status(201).json(users);
      }
    }
  });
};

export const deleteUser = (_, res) => {
  const q = "SELECT * FROM usuarios;";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ 
      error: err,
      teste: err.message,
      db: db.config
    });
    else {
      if (data.length > 0) { // dados do banco
        res.status(200).json(data);
      } else { // simulando caso o banco esteja vazio
        res.status(201).json(users);
      }
    }
  });
};
