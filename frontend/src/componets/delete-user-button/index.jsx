import React, { useContext } from "react"
import { baseHeader, baseUrl } from "../../url";
import { UserContext } from "../../contexts/UserContext";
import Swal from "sweetalert2";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

export const DeleteUserButton = ({ userId, setIsLoading }) => {
    const { getUsersData, isLoading } = useContext(UserContext);
    

    const deleteUser = async (id) => {
            setIsLoading(true)
    
            await axios.delete(`${baseUrl}/${id}`, { headers: baseHeader })
                .then((res) => {
                if (res.status === 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Usuário deletado com sucesso!",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Fechar",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            getUsersData();
                        }
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Erro ao deletar usuário!",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Fechar",
                    });
                }
            }).catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Erro ao deletar usuário!",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "Fechar",
                });
            }).finally(() => {
                setIsLoading(false);
            });
    
        }
    
    return (
    <button
        className="delete__button"
        onClick={() => deleteUser(userId)}
        disabled={isLoading}
    >
        <FaTrash size={20} color="#ff4444" />
    </button>
);}
