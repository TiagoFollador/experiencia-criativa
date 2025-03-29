import { db } from "../db.js";
import { users } from "./fake-data.js";


export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios;";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ 
      error: err,
    });
    else {
      if (data.length > 0) { // dados do banco
        res.status(200).json({
          users:data
        });
      } else { // simulando caso o banco esteja vazio
        res.status(201).json(users);
      }
    }
  });
};
export const showUsers = (req, res) => {
  const {id} = req.params
  if (!id) {
    return res.status(400).json({ error: 'Missing required fields.',
      teste: req.params,
      recived: [id]
     });
  }
  const q = "SELECT * FROM usuarios WHERE id = ?;";

  db.query(q, [id], (err, data) => {
    if (err) return res.status(500).json({ 
      error: err,
    });
    else {
      if (data.length > 0) { // dados do banco
        res.status(200).json({
          users:data
        });
      } else { // simulando caso o banco esteja vazio
        res.status(404).json({ error: 'Nothing found.' });
      }
    }
  });
};



export const storeUser = (req, res) => {
  const { nome, email, dataNascimento } = req.body;

  if (!nome || !email || !dataNascimento) {
    return res.status(400).json({ error: 'Missing required fields.',
      teste: req.body,
      recived: [nome, email, dataNascimento]
     });
  }

  const q = "INSERT INTO usuarios (nome, email, data_nascimento) VALUES (?, ?, ?)";
  db.query(q, [nome, email, dataNascimento], (err, data) => {
    if (err) return res.status(500).json({ 
      error: err,
      teste: err.message,

    });

    else {
      res.status(201).json({
        message: "User has been created successfully!",
        userId: data.insertId
      });
    }
  });
};


export const editUser = (req, res) => {
  const {id} = req.params
  const {nome, email, dataNascimento} = req.body

  if (!id || !nome || !email || !dataNascimento) {
    return res.status(400).json({ error: 'Missing required fields.',
      recived: [id, nome, email, dataNascimento]
     });
  }

  const q = "UPDATE usuarios SET nome = ?, email = ?, data_nascimento = ? WHERE id = ?;";

  db.query(q, [nome, email, dataNascimento, id], (err, data) => {
    if (err) return res.status(500).json({ 
      error: err,
      teste: err.message,
    });
    else {
      if (data.affectedRows > 0) { // dados do banco
        res.status(200).json({
          message: `User with id ${id} has been updated successfully!`
        });
      } else { // simulando caso o banco esteja vazio
        res.status(404).json({ error: 'Nothing found.' });
      }
    }
  });
};

export const deleteUser = (req, res) => {
  const {id} = req.params

  if (!id) {
    return res.status(400).json({ error: 'Missing required fields.',
      recived: [id]
     });
  }

  const q = "DELETE FROM usuarios WHERE id = ?;";

  db.query(q, [id], (err, data) => {
    if (err) return res.status(500).json({ 
      error: err,
      teste: err.message,
    });
    else {
      if (data.affectedRows > 0) { // dados do banco
        res.status(200).json({
          message: `User with id ${id} has been deleted successfully!`
        });
      } else { // simulando caso o banco esteja vazio
        res.status(404).json({ error: 'Nothing found.' });
      }
    }
  });
};
