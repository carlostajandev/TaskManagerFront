import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { getAllUsers } from "../../../services/user.service";
import { useAuth } from "../../../aplication/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const User = () => {
  const authData = useAuth();
  //const token = authData.auth.token;
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const cargarUsuarios = async () => {
      const respuesta = await getAllUsers();
      setUsuarios(respuesta);
    };
    cargarUsuarios();
  }, []);
  const navegacion = useNavigate();
  const [operation, setOperation] = useState(1);
  const openModal = (op) => {
    setOperation(op);
    if (op === 1) {
      navegacion("/dashboard/user/create");
    }
    
  }

  return (
    <>
      <div className='App'>
        <div className='container-fluid'>
          <div className='row mt-3'>
            <div className='col-md-4 offset-md-4'>
              <div className='d-grid mx-auto'>
                <button onClick={() => openModal(1)} className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                  <i className='fa-solid fa-circle-plus'></i> New User
                </button>
              </div>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
              <div className='table-responsive'>
                <table className='table table-bordered'>
                  <thead>
                    <tr><th>UserName</th><th>Email</th><th>Password</th><th>Role</th><th></th></tr>
                  </thead>
                  <tbody className='table-group-divider'>
                    {usuarios.map((item) => (
                      <tr key={item["id"]}>
                        <td>{item["userName"]}</td>
                        <td>{item["email"]}</td>
                        <td>{item["password"]}</td>
                        <td>{item["role"]}</td>
                        <td>
                          <Link
                            to={"/dashboard/user/edit/" + item["id"]}
                            className="btn btn-primary mt-2 mb-2">
                            Editar
                          </Link>
                          &nbsp;
                          <Link
                            to={"/dashboard/user/delete/" + item["id"]}
                            className="btn btn-danger mt-2 mb-2">
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
