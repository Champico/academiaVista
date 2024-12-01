// src/types/User.ts

export interface User {
  correo: string;
  nombre: string;
  rol: "docente" | "coordinador";


  id?: number | null;
  clave?: string | null;
  paterno?: string | null
  materno?: string | null;
  fecha_creacion?: Date | null;
  foto_perfil_ref?: string | null;
  id_facultad?: number | null;

};


