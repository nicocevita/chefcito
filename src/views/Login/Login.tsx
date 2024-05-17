import React, { useContext } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("GlobalContext is not defined");
  }

  const { setUser } = context;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    setUser({ email, loggedIn: true, avatar: "", id: "", name: "" });
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-black mb-1 w-[400px]">
          Bienvenido a CHEFCITO
        </h1>
        <h2 className="text-md italic text-gray-500 mb-12">
          Iniciar sesión en tu cuenta para continuar
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="Correo electronico" />
          <Input type="password" name="password" placeholder="Contraseña" />
          <Button text="Iniciar sesion" type="submit" />
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
