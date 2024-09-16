import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { crearUsuario, DeletUser, EditUser, getUsersById } from "../../../services/user.service";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonAgregarCancelar } from "./utils/ButtonAgregarCancelar";
import { useAuth } from "../../../aplication/contexts/AuthContext";

export const UserDelete = () => {
  const { id } = useParams();
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");

  const navegacion = useNavigate();

  const authData = useAuth();
  console.log(authData);
  const token = authData.auth;

  useEffect(() => {
    const cargarUsuario = async () => {
      const respuesta = await getUsersById(token, id);
      const usuario = respuesta;
      setEmail(usuario.email);
      setRoles(usuario.role);
      setName(usuario.userName);
      setPassword(usuario.password);
    };
    cargarUsuario();
  }, [id]);

  const Eliminar = async (e) => {
    e.preventDefault();
    const resultado = await DeletUser(token, id,
    );

    navegacion("/dashboard/user");

  };


  return (
    <>

      <Card className=" mb-4">
        <Card.Header className="text-center">
          Are you sure you want to delete this user ?{userName}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <button className="btn btn-danger btn-lg custom-btn" onClick={Eliminar}>
              Delete
            </button>

          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
