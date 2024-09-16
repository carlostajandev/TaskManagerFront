import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { crearUsuario, EditUser, getTaskById } from "../../../../services/task.service";
import { useNavigate} from "react-router-dom";
import { ButtonAgregarCancelar } from "../../components/utils/ButtonAgregarCancelar";
import { useAuth } from "../../../../aplication/contexts/AuthContext";

export const TaskEdit = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const navegacion = useNavigate();

  const authData = useAuth();
  console.log(authData);
  const token = authData.auth;

  useEffect(() => {
    const updateTask = async () => {
      const respuesta = await getTasksById(token, id);
      const task = respuesta;
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
      setAssignedTo(task.assignedTo);
    };
      updateTask();
  }, [id]);

  const update = async (e) => {
    e.preventDefault();
    const resultado = await EditTaskr(token, id,
      title,
    description,
    status,
    assignedTo
    );

    navegacion("/dashboard/task");

  };


  return (
    <>

      <Card className=" mb-4">
        <Card.Header className="text-center" style={{ color: "blue", fontSize: "24px", fontWeight: "bold" }}>
          Edit Task
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <form onSubmit={update}>
              <div className="row p-4">
                <div className="form-group col-md-6 mb-2">
                  <label htmlFor="nombres">
                    Title <span className="texto-error">*</span>
                  </label>
                  <input
                    value={userName}
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="userNtitleame"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6  mb-2 ">
                  <label htmlFor="description">
                  description <span className="texto-error">*</span>
                  </label>
                  <input
                    value={email}
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="assignedTo">
                  AssignedTo <span className="texto-error">*</span>
                  </label>
                  <input
                    value={password}
                    type="assignedTo"
                    className="form-control"
                    id="assignedTo"
                    placeholder="assignedTo"
                    onChange={(e) => setAssignedTo(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-3  mb-2">
                  <label htmlFor="status">
                  status <span className="texto-error">*</span>
                  </label>
                  <select
                    value={roles}
                    className="form-control"
                    onChange={(e) => setRoles(e.target.value)}
                    id="status"
                    required
                  >
                     <option value={"Pending"}>Pending</option>
                    <option value={"In Progress"}>In Progress</option>
                    <option value={"Complete"}>Complete</option>
                  </select>
                </div>
              </div>
              <ButtonAgregarCancelar ruta={"/dashboard/task"}></ButtonAgregarCancelar>
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
