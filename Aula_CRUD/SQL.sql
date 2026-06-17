create database aula_sesi;
use aula_sesi;
create table aluno(
id int not null primary key auto_increment, # O incret adiciona 1 a cada registro. Exemplo: (id: 1, nome: Luiz), id: 2, nome: Gustavo)
nome varchar(67) NOT NULL,
serie INT NOT NULL, 
turma char(1)
);
