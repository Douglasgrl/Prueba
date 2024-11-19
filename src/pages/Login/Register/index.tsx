import { useState } from "react";
import InputGeneral from "../../../components/InputGeneral";
import Button from "../../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { registerUser } from "../../../redux/actions/auth";
import { ArrowLeft } from "../../../utils/svg";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const error = useSelector((state: RootState) => state.auth.error);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    const success = await dispatch(registerUser({ email, password }));

    if (success) {
      navigate("/home");
    } else {
      alert(
        "Hubo un error al registrar el usuario. Por favor, revisa los datos."
      );
    }
  };

  return (
    <div className="flex flex-row px-7 lg:pt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-full lg:w-[50%] bg-white rounded-[8px] lg:px-[2.81rem] py-0 max-w-[550px] mx-auto lg:max-w-full"
      >
        <div className="flex flex-col w-full">
          <div className="flex pb-8">
            <Link className="flex items-center gap-3" to="/">
              <ArrowLeft />
              <p className="hidden lg:flex text-[14px] font-book text-argenpesos-textos">
                Volver
              </p>
            </Link>
          </div>
          <h2 className="text-[clamp(1.25rem,0.357rem_+_2.381vw,2.5rem)] text-rick-textos font-book leading-[120%] tracking-[-0.6px] lg:mt-10 lg:font-medium">
            Registro
          </h2>
          <p className="text-[clamp(0.75rem,0.571rem_+_0.476vw,1rem)] font-book text-rick-textos lg:mt-1">
            Complete los campos para crear una cuenta
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
          <InputGeneral
            onChange={handleChange}
            value={data.confirmPassword}
            name="confirmPassword"
            type="password"
            label="Confirmar contraseña"
            className="text-[16px] text-[#111827CC] font-light lg:h-[50px] w-full"
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}
        <Button
          className="w-full lg:my-5 lg:text-[16px]"
          type="submit"
          // disabled={loading}
          text={"Registrarse"}
        />
        <div className="flex items-center justify-center space-x-[12px] w-full mb-8 lg:mb-5">
          <div className="bg-[#E9E9E9] flex-grow h-[1px]"></div>
          <div className="text-[#8F8F8F] text-center text-[14px] font-regular leading-[120%]">
            O
          </div>
          <div className="bg-[#E9E9E9] flex-grow h-[1px]"></div>
        </div>
        <p className="pt-14 text-[12px] lg:text-[16px] text-center text-rick-textos font-book leading-[100%]">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login">
            <span className="text-rick-skyBlue">Iniciar sesión</span>
          </Link>
        </p>
      </form>

      <img
        className="w-[70%] h-[90vh] hidden object-cover lg:flex rounded-[13px]"
        src="/img_login.jpg"
        alt="image_register"
      ></img>
    </div>
  );
};

export default Register;
