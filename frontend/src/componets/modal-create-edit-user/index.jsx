import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import { baseHeader, baseUrl } from '../../url';
import axios from 'axios';
import Swal from 'sweetalert2';
import { UserContext } from '../../contexts/UserContext';

export const ModalCreateEditUser = ({ handleModal, editUser = null  }) => {
    const { getUsersData } = useContext(UserContext);
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');



    const [isLoading, setIsLoading] = useState(false);



    const handleSubmit = async () => {
        setIsLoading(true);
        const userData = { nome, email, dataNascimento };
        
        try {
            let response;
            
            if (editUser) {
                response = await axios.put(
                    `${baseUrl}/${editUser.id}`,
                    userData,
                    baseHeader
                );
            } else {
                response = await axios.post(
                    baseUrl,
                    userData,
                    baseHeader,
                );
            }

            if (response.status === 201 || response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: editUser ? 'Usuário atualizado!' : 'Usuário criado!',
                    confirmButtonText: 'Fechar'
                }).then(() => {
                    handleModal();
                    getUsersData();
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Verifique os campos e tente novamente',
                confirmButtonText: 'Tentar novamente'
            });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        
        if (editUser) {
            setNome(editUser.nome);
            setEmail(editUser.email);
            setDataNascimento(editUser.data_nascimento ? new Date(editUser.data_nascimento).toISOString().split('T')[0] : '');
        } else {
            setNome('');
            setEmail('');
            setDataNascimento('');
        }
    }, [editUser]);


    return (
        <div className="modal__container">
        <h2 className="modal__title">
            {editUser ? 'Editar Usuário' : 'Criar Usuário'}
        </h2>
        
        <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => {
                
                setNome(e.target.value)}}
        />
        
        <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
            type="date"
            className="date__input"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            onClick={(e) => e.target.showPicker()}
        />
        
        <div className="modal__actions">
            <button 
                className="cancel__button" 
                onClick={handleModal}
                disabled={isLoading}
            >
                Cancelar
            </button>
            
            <button 
                className="confirm__button"
                onClick={handleSubmit}
                disabled={isLoading}
                
            >
                {isLoading ? 'Carregando...' : 'Confirmar'}
            </button>
        </div>
    </div>
    );
};
