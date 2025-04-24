import { Button, Tooltip } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { baseUrl } from "../../url";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FormEditUser } from "../../componets/create-edit-users/FormEditUser ";
import { FormProvider } from "../../componets/create-edit-users/create-form-context";

export const UserDataPage = () => {
  const id = useParams().id;
  const [userData, setUserData] = useState();

  const getUserData = async (id) => {
    if (!id) {
      return;
    }

    await axios
      .get(`${baseUrl}/${id}`)
      .then((data) => {
        setUserData(data.data.user);
      })
      .catch((error) => {
        console.error({
          message: error.message,
        });

        Swal.fire({
          icon: "error",
          title: "Erro ao buscar os dados",
          text: "Algo deu errado, verifique sua conexão!",
        });
      });
  };
  useEffect(() => {
    getUserData(id);
  }, []);
  return (
    <>
      <div>
        <Tooltip title={`id: ${id}`} style={{display: "flex", justifyContent: "center"}}>

        <h1>Pagina do Usuário - {id}</h1>
        </Tooltip>
        <Link to="/">
          <Button variant="outlined">{"Voltar"}</Button>
        </Link>
      </div>
      <FormProvider>
        <div className="userDataPage__content__container">

        <FormEditUser userData={userData} />
        </div>
      </FormProvider>
    </>
  );
};
