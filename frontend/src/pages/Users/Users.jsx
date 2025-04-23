import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../url";
import "./style.css";
import { ModalCreateUser } from "../../componets/modalCreateUser";
import { ListUsers } from "../../componets/list-users/ListUsers";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const header = {
    Accept: "application/json",
  };

  const getUsersData = async () => {
    setIsLoading(true);

    await axios
      .get(`${baseUrl}/`, header)
      .then((data) => {
        setUsersData(data.data.users);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Erro");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado, verifique sua conexão!",
        })
      });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div>
      <div>
        <h1>Dados dos Usuarios</h1>
        <Link to="/admin">
        <Button variant="outlined">
          Admin
        </Button>
        </Link>
      </div>
      <div className="scroll-area">

        <ListUsers usersData={usersData} />
      </div>
    </div>
  );
};

export default Users;
