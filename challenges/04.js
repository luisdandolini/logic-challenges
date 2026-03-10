// 4) Modelo lógico de banco de dados para cadastro de clientes

/*
-- Tabela de estados
CREATE TABLE estado (
  cod_estado CHAR(2)     PRIMARY KEY,  
  nome_estado VARCHAR(50) NOT NULL
);

-- Tabela de tipos de telefone
CREATE TABLE tipo_telefone (
  id_tipo    INT          PRIMARY KEY,  
  descricao  VARCHAR(50)  NOT NULL
);

-- Tabela de clientes
CREATE TABLE cliente (
  id_cliente   INT          PRIMARY KEY,  
  razao_social VARCHAR(100) NOT NULL,
  cod_estado   CHAR(2)      NOT NULL,     
  FOREIGN KEY (cod_estado) REFERENCES estado(cod_estado)
);

-- Tabela de telefones
CREATE TABLE telefone (
  id_telefone INT         PRIMARY KEY,
  numero      VARCHAR(20) NOT NULL,
  id_cliente  INT         NOT NULL,     
  id_tipo     INT         NOT NULL,     
  FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
  FOREIGN KEY (id_tipo)    REFERENCES tipo_telefone(id_tipo)
);

-- Busca: código, razão social e telefone(s) de clientes de SP
SELECT
  c.id_cliente,
  c.razao_social,
  t.numero,
  tt.descricao AS tipo_telefone
FROM cliente c
INNER JOIN telefone t      ON t.id_cliente = c.id_cliente
INNER JOIN tipo_telefone tt ON tt.id_tipo   = t.id_tipo
WHERE c.cod_estado = 'SP'
ORDER BY c.razao_social;

*/
