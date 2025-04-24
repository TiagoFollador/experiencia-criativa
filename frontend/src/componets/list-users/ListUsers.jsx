import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const ListUsers = ({ usersData, isEditing = false, ...props }) => {
  function dateFormat(date) {
    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="user-container" {...props}>
      {usersData.length > 0
        ? usersData.map((user) => (
            <Link key={user.id} to={`/user/${user.id}`} className="no-styles-a">
              <div className="user-card">
                <p className="user-info">Nome: {user.nome}</p>
                <p className="user-info">Apelido: {user.apelido}</p>
                <p className="user-info">E-mail: {user.email}</p>
                <p className="user-info">
                  Data de Nascimento: {dateFormat(user.data_nascimento)}
                </p>
              </div>
            </Link>
          ))
        : "Nenhum usuário cadastrado"}
    </div>
  );
};
