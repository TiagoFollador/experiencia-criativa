import { Button } from "@mui/material";
import "./style.css";
import Swal from "sweetalert2";
import { CreateEditUsers } from "./CreateEditUsers";
import { useContext } from "react";
import { FormContext } from "./create-form-context";
import axios from "axios";
import { baseUrl } from "../../url";
import { useNavigate } from "react-router-dom";

export const FormEditUser = ({ userData }) => {
  const navigate = useNavigate();
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
    console.log(data);

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
      .put(`${baseUrl}/${userData.id}`, body)
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

  const handleDelete = async () => {
    Swal.fire({
      title: "Tem certeza?",
      text: `Você deseja apagar o usuario de id ${userData.id}?`,
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Não, cancelar!",
      confirmButtonText: "Sim, deletar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser();
      }
    });
  };

  const deleteUser = async () => {
    await axios
      .delete(`${baseUrl}/${userData.id}`, header)
      .then((data) => {
        
        if (data.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Parabens!",
            text: "Pessoa deletada com sucesso!",
          }).then(() => {
            navigate("/");
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Erro interno",
            text: "Algo deu errado ao deletar o usuario!",
          });
        }
      })
      .catch((error) => {
        console.log("Erro");
        Swal.fire({
          icon: "error",
          title: "Erro interno",
          text: "Algo deu errado durante a exclusão do usuario, tente novamente mais tarde",
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
      <div className="buttonDelete__container">

      <Button
        className="buttonActionFormDelete__size"
        color="error"
        onClick={handleDelete}
      >
        X
      </Button>
      </div>
      <form
        style={{ margin: "1em", marginTop: "0px" }}
        className="base-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CreateEditUsers data={userData} />
        <div className="submitButton__container">
          <Button
            className="buttonActionFormEdit__size"
            variant="contained"
            type="submit"
          >
            Editar
          </Button>
        </div>
      </form>
    </div>
  );
};

