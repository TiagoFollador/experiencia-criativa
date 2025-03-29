import React from "react";
import { FaUserPlus } from "react-icons/fa";
import "./style.css";

export const ButtonModalCreateEditUser = ({ handleModal }) => (
    <button className="styled-button" onClick={() => handleModal()}>
        <FaUserPlus style={{ marginRight: "8px" }} /> Criar Usuário
    </button>
)