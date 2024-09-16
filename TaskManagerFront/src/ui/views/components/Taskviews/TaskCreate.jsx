import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { ButtonAgregarCancelar } from "../../components/utils/ButtonAgregarCancelar";
import { useAuth } from "../../../../aplication/contexts/AuthContext";
import { saveTask } from "../../../../services/task.service";

export const TaskCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const navegacion = useNavigate();

  const authData = useAuth();
  const token = authData.auth;

  const save = async (e) => {
    e.preventDefault();
    const resultado = await saveTask(token,
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
        <Card.Header className="text-center">
          New Task
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <form onSubmit={save}>
              <div className="row p-4">
                <div className="form-group col-md-6 mb-2">
                  <label htmlFor="Title">
                    Title <span className="texto-error">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="description">
                    Description <span className="texto-error">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-3  mb-2">
                  <label htmlFor="status">
                    status <span className="texto-error">*</span>
                  </label>
                  <select
                    className="form-control"
                    onChange={(e) => setStatus(e.target.value)}
                    id="status"
                    required
                  >
                    <option value={"Pending"}>Pending</option>
                    <option value={"In Progress"}>In Progress</option>
                    <option value={"Complete"}>Complete</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="assignedTo">AssignedTo<span className="texto-error">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="assignedTo"
                    placeholder="AssignedTo"
                    onChange={(e) => setAssignedTo(e.target.value)}
                    required
                  />
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
