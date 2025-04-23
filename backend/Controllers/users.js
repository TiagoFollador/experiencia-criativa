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

export const storeUser = (req, res) => {
  const { nome, email, data_nascimento, apelido } = req.body;

  if (!nome || !email || !data_nascimento || !apelido) {
    return res.status(400).json({ error: 'Missing required fields.',
      teste: req.body,
      recived: [nome, email, data_nascimento, apelido]
     });
  }

  const q = "INSERT INTO usuarios (nome, email, data_nascimento, apelido) VALUES (?, ?, ?, ?)";
  db.query(q, [nome, email, data_nascimento, apelido], (err, data) => {
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
  const { user_id } = req.params;
  const { nome, email, data_nascimento, apelido } = req.body;

    if (!user_id || !nome || !email || !data_nascimento || !apelido) {
    return res.status(400).json({ error: 'Missing required fields.',
      teste: req.body,
      recived: [user_id]
     });
  }

  const q = "UPDATE usuarios SET nome = ?, email = ?, data_nascimento = ?, apelido = ? WHERE id = ?";
  db.query(q, [nome, email, data_nascimento, apelido], (err, data) => {
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

export const deleteUser = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Missing required fields.',
      teste: req.body,
      recived: [id]
     });
  }

  const q = "DELETE FROM usuarios WHERE id = ?";
  db.query(q, [id], (err, data) => {
    if (err) return res.status(500).json({ 
      error: err,
      teste: err.message,

    });

    else {
      res.status(200).json({
        message: "User has been deleted successfully!",
        userId: id
      });
    }
  });
};
