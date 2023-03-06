import React from "react";
import InputButton from "../InputButton/InputButton";
import InputGeneral from "../InputGeneral/InputGeneral";
import "./loginview.css";
import { FaEye } from "react-icons/fa";

export default function LoginView() {
  return (
    <div className="login-view">
        <span className="login-view-span">
          <img src="./logo-familia30.png" alt="" />
        </span>
      <div className="login-view-container">
        <form>
          <InputGeneral text="Correo electrónico" type="email" />
          <InputGeneral text="Contraseña" type="password" icon={<FaEye />} />
          <InputButton
            value="Iniciar sesión"
            type="submit"
            text="¿No tienes cuenta? Regístrate"
          />
        </form>
      </div>
    </div>
  );
}
