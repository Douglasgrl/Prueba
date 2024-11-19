import { useEffect, useState } from "react";
import InputGeneral from "../../components/InputGeneral";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { loginUser } from "../../redux/actions/auth";

const LogIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { loading, error, currentUser } = useSelector((state: RootState) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (currentUser) {
      // Verifica si el usuario está autenticado
      navigate("/home"); // Redirige a la página principal si el login es exitoso
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser(data.email, data.password));
  };

  return (
    <div className="flex flex-row px-7 lg:pt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-full lg:w-[50%] bg-white rounded-[8px] lg:px-[2.81rem] py-0 max-w-[550px] mx-auto lg:max-w-full"
      >
        <div className="flex flex-col w-full">
          <h2 className="text-[clamp(1.25rem,0.357rem_+_2.381vw,2.5rem)] text-rick-textos font-book leading-[120%] tracking-[-0.6px] lg:mt-10 lg:font-medium">
            Inicio de sesión
          </h2>
          <p className="text-[clamp(0.75rem,0.571rem_+_0.476vw,1rem)] font-book text-rick-textos lg:mt-1">
            Ingrese su email y contraseña para continuar
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full mt-6">
          <InputGeneral
            onChange={handleChange}
            value={data.email}
            name="email"
            type="email"
            label="Email"
            className="text-[16px] text-[#111827CC] font-light lg:h-[50px] w-full"
          />
          <InputGeneral
            onChange={handleChange}
            value={data.password}
            name="password"
            type="password"
            label="Contraseña"
            className="text-[16px] text-[#111827CC] font-light lg:h-[50px] w-full"
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}
        <Button
          className="w-full lg:my-5 lg:text-[16px]"
          type="submit"
          disabled={loading} // Deshabilita mientras carga
          text={loading ? "Cargando..." : "Iniciar sesión"} // Muestra estado de carga
        />
        <div className="flex items-center justify-center space-x-[12px] w-full mb-8 lg:mb-5">
          <div className="bg-[#E9E9E9] flex-grow h-[1px]"></div>
          <div className="text-[#8F8F8F] text-center text-[14px] font-regular leading-[120%]">
            O
          </div>
          <div className="bg-[#E9E9E9] flex-grow h-[1px]"></div>
        </div>
        <p className="pt-14 text-[12px] lg:text-[16px] text-[#111827] text-center">
          ¿No tienes cuenta?{" "}
          <Link
            to="/register"
            className="text-[#0061F2] text-[14px] font-semibold"
          >
            Regístrate aquí
          </Link>
        </p>
      </form>

      <img
        className="w-[70%] h-[90vh] hidden object-cover lg:flex rounded-[13px]"
        src="/img_login.jpg"
        alt="image_login"
      ></img>
    </div>
  );
};

export default LogIn;
