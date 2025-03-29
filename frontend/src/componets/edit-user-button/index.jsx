import React from "react";
import "./style.css";

export const EditUserButton = ({ user, handleEdit, isLoading }) => {
    
    
    return (
        <button
            className="edit-button"
            onClick={() => {handleEdit(user)}}
            disabled={isLoading}
        >
            ✏️ Editar
        </button>
    )
}