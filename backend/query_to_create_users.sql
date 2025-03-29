CREATE TABLE usuarios (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome varchar(50) DEFAULT NULL,
  email varchar(100) DEFAULT NULL,
  data_nascimento DATE
)