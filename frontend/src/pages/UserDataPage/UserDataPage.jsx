import { Button } from "@mui/material";
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
        <h1>Pagina do Usuário</h1>
        <Link to="/">
          <Button variant="outlined">{"Voltar"}</Button>
        </Link>
      </div>
      <FormProvider>
        <FormEditUser userData={userData} />
      </FormProvider>
    </>
  );
};
