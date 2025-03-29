import React from 'react';
import './style.css'; 

export const ModalCreateUser = () => {
    return (
        <div className="modal__container">
            <h2 className="modal__title">Criar Usuário</h2>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Data de Nascimento" />
            <div className="modal__actions">
                <button className="cancel__button">Cancelar</button>
                <button className="confirm__button">Confirmar</button>
            </div>
        </div>
    );
};