import { faBan, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

export const ButtonAgregarCancelar = ({ruta}) => {
  const navegacion = useNavigate();

  const inicio = () => {
    navegacion(ruta);
  };

  return (
    <div className="text-center">
      <button type="submit" className="btn-1-crud">
      <FontAwesomeIcon icon={faFloppyDisk} /> Guardar
      </button>
      <button type="button" onClick={inicio} className="btn btn-danger">
      <FontAwesomeIcon icon={faBan} /> Cancelar
      </button>
    </div>

  );
};
