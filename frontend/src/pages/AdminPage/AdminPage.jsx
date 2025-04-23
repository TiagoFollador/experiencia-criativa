import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
      <div className="i">

      </div>
        
    </div>;
};