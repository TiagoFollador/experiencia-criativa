CREATE SCHEMA users;

USE users;

CREATE TABLE usuarios (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome varchar(50) DEFAULT NULL,
  apelido varchar(50) DEFAULT NULL,
  email varchar(100) DEFAULT NULL,
  data_nascimento DATE
);


INSERT INTO usuarios (nome, apelido, email, data_nascimento) VALUES
('João Silva', 'Joãozinho', 'joao.silva@example.com', '1990-05-15'),
('Maria Oliveira', 'Malu', 'maria.oliveira@example.com', '1985-08-20'),
('Carlos Santos', 'Carlinhos', 'carlos.santos@example.com', '1995-03-10'),
('Ana Pereira', 'Aninha', 'ana.pereira@example.com', '2000-11-25'),
("Juliana norki" , "Junomaco",  "Junorkinha13@gmail.com", "2003-10-30");