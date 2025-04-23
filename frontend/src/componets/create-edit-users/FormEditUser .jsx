import { Button } from "@mui/material";
import "./style.css";
import Swal from "sweetalert2";
import { CreateEditUsers } from "./CreateEditUsers";
import { useContext } from "react";
import { FormContext } from "./create-form-context";
import axios from "axios";
import { baseUrl } from "../../url";

export const FormEditUser = ({ userData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useContext(FormContext);

  const header = {
    Accept: "application/json",
  };

  const formatDateToSQL = (date) => {
    const [day, month, year] = date.split("/");

    if (Number(year) > 2025 || Number(month) > 12 || Number(day) > 31) {
      return false;
    }

    return `${year}-${month}-${day}`;
  };

  const onSubmit = async (data) => {
    if (!data.nome || !data.email || !data.data_nascimento || !data.apelido) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Preencha todos os campos!",
      });
      return;
    }

    if (!validarEmail(data.email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Insira um e-mail valido! Ex: mail@example.com",
      });
      return;
    }

    if (!formatDateToSQL(data.data_nascimento)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Insira uma data valida!",
      });
      return;
    }

    const body = {
      nome: data.nome,
      email: data.email,
      data_nascimento: formatDateToSQL(data.data_nascimento),
      apelido: data.apelido,
    };

    await axios
      .put(`${baseUrl}/${data.id}`, body, header)
      .then((data) => {
        if (data.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Parabens!",
            text: "Pessoa editada com sucesso!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Erro interno",
            text: "Algo deu errado ao editar o usuario!",
          });
        }
      })
      .catch((error) => {
        console.log("Erro");
        Swal.fire({
          icon: "error",
          title: "Erro interno",
          text: "Algo deu errado durante a edição do usuario, tente novamente mais tarde",
        });
      });
  };

  const validarEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!regex.test(email)) {
      return false;
    }
    return true;
  };

  return (
    <div className="card-container">
      <form
        style={{ margin: "1em" }}
        className="base-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CreateEditUsers data={userData} />
        <Button variant="contained" type="submit">
          Editar
        </Button>
      </form>
    </div>
  );
};
