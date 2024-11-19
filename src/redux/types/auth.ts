export interface User {
  email: string;
  password: string;
}

export interface AuthState {
  users: User[];
  currentUser: User | null;
  error: string | null;
  authenticated: boolean; // Nuevo campo para estado de autenticación
  loading: boolean;
}
