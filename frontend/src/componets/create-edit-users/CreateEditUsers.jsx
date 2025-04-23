
import { FormLabel, TextField } from "@mui/material"
import "./style.css"
import { useContext } from "react"
import { FormContext } from "./create-form-context"


export const CreateEditUsers = ({ data = {} }) => {
      const {
        register,
        setValue,
        handleSubmit,
        watch,
        formState: { errors },
      } = useContext(FormContext);

      const handleDateChange = (e) => {
        let value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    
        if (value.length > 2 && value.length <= 4) {
          value = `${value.slice(0, 2)}/${value.slice(2)}`; // Adiciona a primeira barra
        } else if (value.length > 4) {
          value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`; // Adiciona a segunda barra
        }
    
        e.target.value = value;
        
        setValue("data_nascimento", value)// Atualiza o valor no React Hook Form
      };

    return (
        <div className="card__input-group__container">
          <div className="card__input-subgroup__container">

            <div className="card__input__container">
              <FormLabel>Nome</FormLabel>
              <TextField
                size="small"
                variant="outlined"
                defaultValue={data.nome || ""}
                {...register("nome")}
              />
            </div>

            <div className="card__input__container">
              <FormLabel>E-mail</FormLabel>
              <TextField
                size="small"
                variant="outlined"
                defaultValue={data.email || ""}
                {...register("email")}
              />
            </div>

          </div>

          <div className="card__input-subgroup__container">

            <div className="card__input__container">
              <FormLabel>Apelido</FormLabel>
              <TextField
                size="small"
                variant="outlined"
                defaultValue={data.apelido || ""}
                {...register("apelido")}
              />
            </div>

            <div className="card__input__container">
              <FormLabel>Data de Nascimento</FormLabel>
              <TextField
            size="small"
            variant="outlined"
            defaultValue={data.data_nascimento || ""}
            onChange={handleDateChange} 
            placeholder="dd/mm/yyyy"
          />
            </div>
    
          </div>
        </div>
    )
}