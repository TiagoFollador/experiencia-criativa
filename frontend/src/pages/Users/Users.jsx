import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseHeader, baseUrl } from "../../url";
import "./style.css"
import { ModalCreateEditUser } from "../../componets/modal-create-edit-user";
import { ButtonModalCreateEditUser } from "../../componets/button-modal-create-edit-user";
import { UserContext } from "../../contexts/UserContext";
import { DeleteUserButton } from "../../componets/delete-user-button";
import { EditUserButton } from "../../componets/edit-user-button";


const Users = () => {
    const [usersData, setUsersData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [editUser, setEditUser] = useState(null);

    const handleModal = (user = null) => {
        setEditUser(user);
        setModal((prev) => !prev)
    }

    const handleFormatDate = (date) => {
        const newDate = new Date(date);
        return newDate.toLocaleDateString("pt-BR");
    }

    const getUsersData = async () => {
        setIsLoading(true)

        await axios.get(`${baseUrl}/`, baseHeader)
            .then((data) => {
                setUsersData(data.data.users)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log("Erro");
            })
    }

    useEffect(() => {
        getUsersData()
    }, []);

    return (
        <UserContext.Provider value={{ getUsersData, usersData, isLoading }}>
            <div>
                <h1>Dados dos Usuarios</h1>

                {/* Container principal com skeleton */}
                <div className="user__container">
                    {isLoading ? (
                        // Skeleton loader
                        Array.from({ length: 3 }).map((_, index) => (
                            <div className="skeleton__card" key={index}>
                                <div className="skeleton__line skeleton__name" />
                                <div className="skeleton__line skeleton__email" />
                                <div className="skeleton__line skeleton__date" />
                            </div>
                        ))
                    ) : (
                        usersData.map((user) => (
                            <div className="user__card" key={user.id}>
                                <div className="user__info__container">
                                    <div>
                                        <p className="user__info">Nome: {user.nome}</p>
                                        <p className="user__info">E-mail: {user.email}</p>
                                        <p className="user__info">Data de Nascimento: {handleFormatDate(user.data_nascimento)}</p>
                                    </div>
                                    <div>
                                        <DeleteUserButton userId={user.id}
                                            setIsLoading={setIsLoading}
                                        />
                                        <EditUserButton
                                            handleEdit={handleModal}
                                            isLoading={isLoading}
                                            user={user}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <ButtonModalCreateEditUser handleModal={handleModal} />
                {modal && <ModalCreateEditUser
                    handleModal={handleModal}
                    editUser={editUser} />}
            </div>
        </UserContext.Provider>
    );
}

export default Users;
