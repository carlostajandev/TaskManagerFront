import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../../aplication/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { getAllTasks } from "../../../services/task.service";

export const Task = () => {
  const authData = useAuth();
  //const token = authData.auth.token;
  const [Task, setTask] = useState([]);

  useEffect(() => {
    const loadTask = async () => {
      const respuesta = await getAllTasks();
      setTask(respuesta);
    };
    loadTask();
  }, []);
  const navegacion = useNavigate();
  const [operation, setOperation] = useState(1);
  const openModal = (op) => {
    setOperation(op);
    if (op === 1) {
      navegacion("/dashboard/task/create");
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
                  <i className='fa-solid fa-circle-plus'></i> New Task
                </button>
              </div>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
              <div className='table-responsive'>
                <table className='table table-bordered'>
                  <thead>
                    <tr><th>Title</th><th>Description</th><th>Status</th><th></th></tr>
                  </thead>
                  <tbody className='table-group-divider'>
                    {Task.map((item) => (
                      <tr key={item["id"]}>
                        <td>{item["title"]}</td>
                        <td>{item["description"]}</td>
                        <td>{item["status"]}</td>
                        <td>
                          <Link
                            to={"/dashboard/task/edit/" + item["id"]}
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
