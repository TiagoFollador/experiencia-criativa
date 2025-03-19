import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../url";
import "./style.css"


const Users = () => {
    const [usersData, setUsersData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const header = {
        "Accept": "application/json",
    }

    const getUsersData = async () => {
        setIsLoading(true)

        await axios.get(`${baseUrl}/`, header)
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
    }, [])

    return (
        <div>
            <h1>Dados dos Usuarios</h1>
            <div className="user-container">
                {usersData.map((user) => (
                    <div className="user-card" key={user.email}>
                        <p className="user-info">Nome: {user.name}</p>
                        <p className="user-info">E-mail: {user.email}</p>
                        <p className="user-info">Aniversário: {user.birthday}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users;