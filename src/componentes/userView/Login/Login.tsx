// src/componentes/Login.tsx

import styles from './loginStyle.module.css'
import { useNavigate } from "react-router-dom";

// Componente de Login
const Login = () => {
    const navigate = useNavigate();

    async function validarCredenciales(email: string, password: string) {
        let error = ""
        const patronCorreo = /^[a-zA-Z0-9._%+-]{6,30}@uv\.mx$/

        if (email === "") error = "Usuario requerido"
        if (password === "") error += "Contraseña requerida"
        if (!patronCorreo.test(email)) return "Usuario y/o contraseña incorrectos"

        return error
    }

    function mostrarMensajeError(error: string) {
        console.log(error)
    }

    function eliminarMensajeError() {
        console.log("Se elimina")
    }


    // > > > > > E  N  V  I  O   D  E   F  O  R  M  U  L  A  R  I  O  < < < < < <
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const emailElement = document.getElementById('email') as HTMLInputElement;
        const passwordElement = document.getElementById('password') as HTMLInputElement;

        const email = emailElement ? emailElement.value : '';
        const password = passwordElement ? passwordElement.value : '';

        const error = await validarCredenciales(email, password);
        if (error) {
            mostrarMensajeError(error)
        } else {
            eliminarMensajeError()
            const url = 'http://localhost:1235/user/session/login'; // Cambia la URL a la ruta de tu servidor
            
            const body = {
                correo: email,
                clave: password
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });


            if (response.ok) {
                const data = await response.json();
                if (!data.error) {
                    navigate('/');
                } else {
                    mostrarMensajeError(data.error)
                }
            } else {
                mostrarMensajeError(error)
            }

        };



    };


    return (
        <div className={styles.container}>
            <div className={styles.bannerSideContainer}>
                <img className={styles.bannerSideImg} src="/assets/images/academia-src/banner.jpg" alt="Imagen de computadora" height="100px"></img>
            </div>

            <div className={styles.loginSideContainer}>
                <div className={styles.loginContainer}>
                    <div className={styles.logoAcademiaContainer}>
                        <img className={styles.logoAcademia} src="/assets/images/academia-src/a-logo.png" alt="Logo de Academia" />
                        <span className={styles.errorInfo}>El usuario y/o la contraseña es incorrecta</span>
                        <h1 className={styles.titulo}>Iniciar sesión</h1>

                        <div className={styles.loginFormContainer}>
                            <form className={styles.loginForm} onSubmit={handleSubmit}>

                                <div className={styles.inputContainer}>
                                    <input className={styles.formInput} type="email" id="email" name="correo" placeholder="" required />
                                    <label className={styles.formLabel} htmlFor="email">Email</label>
                                </div>

                                <div className={styles.inputContainer}>
                                    <input className={styles.formInput} type="password" id="password" name="contrasenia" placeholder="" required />
                                    <label className={styles.formLabel} htmlFor="password">Contraseña</label>

                                </div>

                                <button className={styles.button} type="submit">Iniciar sesión</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;