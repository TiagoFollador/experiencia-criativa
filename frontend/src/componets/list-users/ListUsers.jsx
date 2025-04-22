import React from "react";
import "./style.css"

export const ListUsers = ({usersData,isEditing = false, ...props}) => {

    function dateFormat(date) {
        const dateObj = new Date(date);
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const year = dateObj.getFullYear();
        return `${day}/${month}/${year}`;
    }
    
   return ( <div className="user-container" {...props}>
                {usersData.map((user) => (
                    <div className="user-card" key={user.id}>
                        <p className="user-info">Nome: {user.nome}</p>
                        <p className="user-info">E-mail: {user.email}</p>
                        <p className="user-info">Data de Nascimento: {dateFormat(user.data_nascimento)}</p>
                    </div>
                ))}
            </div>)
}