// src/componentes/Login.tsx

import styles from './loginStyle.module.css'
import { useState} from 'react';
import { useUserSession } from '../../../contextos/UserSessionContext'

const Login = () => {
    //Contexto
    const {setUserSession} = useUserSession();

    const [error, setError] = useState<string>("Correcto")

    async function validarCredenciales(email: string, password: string) {
        let errorMsg = ""
        const patronCorreo = /^[a-zA-Z0-9._%+-]{6,30}@uv\.mx$/

        if (email === "") errorMsg = "Usuario requerido"
        if (password === "") errorMsg += "Contraseña requerida"
        if (!patronCorreo.test(email)) return "Usuario y/o contraseña incorrectos"

        return errorMsg
    }

    function mostrarMensajeError(error: string) {
        setError(error)
    }

    function eliminarMensajeError() {
        setError("Correcto")
    }

    function errorMensaje(){

        if(error !== "Correcto"){
            return <span className={styles.errorInfo}>{error}</span>
        }else{
            return
        }

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
                credentials: 'include',
                body: JSON.stringify(body)
            });

            console.log("Respuesta del servidor: ", response)

            if (response.ok) {
                const data = await response.json();
                if (!data.error) {
                    setUserSession(1)
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

            <span className={styles.tituloUv}>Universidad Veracruzana</span>
            <span className={styles.copyright}>© 2024 Universidad Veracruzana. Todos los derechos reservados</span>


            <div className={styles.bannerSideContainer}>
                <img className={styles.bannerSideImg} src="/assets/images/academia-src/banner.jpg" alt="Imagen de computadora" height="100px"></img>
            </div>

            <div className={styles.loginSideContainer}>
                <div className={styles.loginContainer}>
                    <div className={styles.logoAcademiaContainer}>
                        <img className={styles.logoAcademia} src="/assets/images/academia-src/a-logo.png" alt="Logo de Academia" />
                        {errorMensaje()}
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