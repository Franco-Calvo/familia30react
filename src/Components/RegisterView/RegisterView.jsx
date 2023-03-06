import React from "react";
import InputButton from "../InputButton/InputButton";
import InputGeneral from "../InputGeneral/InputGeneral";
import { FaEye } from "react-icons/fa";
import './registerview.css'

export default function RegisterView() {
  return (
    <div className="login-view">
      <span className="login-view-span">
        <img src="./logo-familia30.png" alt="" />
      </span>
      <div className="register-view-container">
        <form>
          <InputGeneral text="Nombre" type="email" />
          <InputGeneral text="Correo electrónico" type="email" />
          <InputGeneral text="Contraseña" type="password" icon={<FaEye />} />
          <InputGeneral text="Confirmar contraseña" type="password" icon={<FaEye />} />
          <InputButton
            value="Registrarse"
            type="submit"
            text="¿Ya tienes cuenta? Ingresar"
          />
        </form>
      </div>
    </div>
  );
}
