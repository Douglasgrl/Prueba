import { AppDispatch, RootState } from "../store";
import {
  registerUserSuccess,
  registerUserFailure,
  registerUserStart,
  loginUserSuccess,
  loginUserFailure,
  loginUserStart,
} from "../reducers/auth";
import { User } from "../types/auth";
import { baseUrl } from "../../config";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

export const registerUser =
  (user: User) =>
  async (dispatch: AppDispatch): Promise<boolean> => {
    dispatch(registerUserStart());

    try {
      const savedUsers = localStorage.getItem("users");
      const existingUsers = savedUsers ? JSON.parse(savedUsers) : [];

      const userExists = existingUsers.some(
        (existingUser: User) => existingUser.email === user.email
      );

      if (userExists) {
        dispatch(registerUserFailure("El usuario ya existe"));
        return false;
      }

      if (user.password.length < 6) {
        dispatch(
          registerUserFailure("La contraseña debe tener al menos 6 caracteres")
        );
        return false;
      }

      dispatch(registerUserSuccess(user));
      const updatedUsers = [...existingUsers, user];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return true; // Indica que el registro fue exitoso
    } catch (error) {
      dispatch(registerUserFailure("Error al registrar el usuario"));
      return false;
    }
  };

export const loginUser =
  (email: string, password: string) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(loginUserStart());

    try {
      // Validación del email
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        dispatch(loginUserFailure("El correo electrónico no es válido."));
        return;
      }

      // Verificar si la contraseña cumple con los requisitos (ejemplo: al menos 6 caracteres)
      if (password.length < 6) {
        dispatch(
          loginUserFailure("La contraseña debe tener al menos 6 caracteres")
        );
        return;
      }

      const { users } = getState().auth;
      const user = users.find((user: any) => user.email === email);

      if (!user || user.password !== password) {
        dispatch(loginUserFailure("Usuario o contraseña incorrectos"));
        return;
      }

      dispatch(loginUserSuccess(user));
      localStorage.setItem("user", JSON.stringify(user)); // Guardar usuario autenticado
    } catch (error: any) {
      dispatch(loginUserFailure("Error al iniciar sesión"));
    }
  };
