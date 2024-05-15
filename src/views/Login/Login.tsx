import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-black mb-1 w-[400px]">Bienvenido a CHEFCITO</h1>
        <h2 className="text-md italic text-gray-500 mb-12">Iniciar sesión en tu cuenta para continuar</h2>
        <form className="flex flex-col gap-4">
          <Input type="email" placeholder="Correo electronico" />
          <Input type="password" placeholder="Contraseña" />
          <Button text="Iniciar sesion" onClick={() => navigate("/")} />
        </form>
      </div>
      <div>
        <img
          src="/chefcito-login.avif"
          alt="Imagen aleatoria"
          className="rounded-r-lg"
        />
      </div>
    </div>
  );
};

export default Login;
