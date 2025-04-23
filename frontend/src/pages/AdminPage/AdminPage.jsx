import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FormCreateUsers } from "../../componets/create-edit-users/FormCreateUsers";
import { FormProvider } from "../../componets/create-edit-users/create-form-context";

export const AdminPage = () => {
    return <div>

        <div>
            <h1>Pagina do Administrador</h1>
            <Link to="/">
                <Button variant="outlined">
                    {"Voltar"}
                </Button>
            </Link>
        </div>
        <div className="card">
            <FormProvider>

            <FormCreateUsers/>
            </FormProvider>
        </div>

    </div>;
};