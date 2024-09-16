import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { crearUsuario } from "../../../services/user.service";
import { useNavigate } from "react-router-dom";
import { ButtonAgregarCancelar } from "../components/utils/ButtonAgregarCancelar";
import { useAuth } from "../../../aplication/contexts/AuthContext";

export const UserCreate = () => {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");
  
  const navegacion = useNavigate();

  const authData = useAuth();
  const token = authData.auth;
 
  const guardar = async (e) => {
    e.preventDefault();   
    const resultado = await crearUsuario(token, 
      userName,
      email,
      password,
      roles
    );
  
      navegacion("/dashboard/user");

  };

  return (
    <>
     
      <Card className=" mb-4">
        <Card.Header className="text-center">
          New User
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <form onSubmit={guardar}>
              <div className="row p-4">
                <div className="form-group col-md-6 mb-2">
                  <label htmlFor="nombres">
                    User Name <span className="texto-error">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    placeholder="userName"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6  mb-2 ">
                  <label htmlFor="email">
                    Email <span className="texto-error">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="password">
                    Password <span className="texto-error">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"                   
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-3  mb-2">
                  <label htmlFor="roles">
                    Roles <span className="texto-error">*</span>
                  </label>
                  <select
                    className="form-control"
                    onChange={(e) => setRoles(e.target.value)}
                    id="roles"
                    required
                  >
                    <option value={"Admin"}>Admin</option>
                    <option value={"Supervisor"}>Supervisor</option>
                    <option value={"Employee"}>Employee</option>
                  </select>
                </div>
              </div>
              <ButtonAgregarCancelar ruta={"/dashboard"}></ButtonAgregarCancelar>
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};