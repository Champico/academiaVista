// componentes/helpView/HelpPage.tsx

import styles from './HelpPageStyle.module.css'

const HelpPage = () => {
    return (

        <div className={styles.background}>
            <header className={styles.encabezado}>
                <span>Universidad Veracruzana</span>
            </header>
            <div className={styles.container}>
                <main className={styles.contenidoPrincipal}>
                    <h1 className={styles.titulo}>Acerca de Academia</h1>

                    <section className={`${styles.section} ${styles.descripcionAplicacion}`}>
                        <p className={styles.mainInfo}>
                            En este articulo encontraras información acerca de el propósito de esta aplicación además de un manual de usuario.</p>
                    </section>

                    <section className={`${styles.section} ${styles.descripcionAcademia}`}>
                        <h2>¿Qué son las academias?</h2>
                        <p>
                            La Universidad Veracruzana con el fin de mejorar la organización y desarrollo de sus
                            funciones cuenta con diversos organismos como la Junta Académica, el Consejo Técnico y
                            las Academias por Área de Conocimiento, Programa Académico y de Investigación.
                            Según lo establecido en el "Reglamento de Academias por área de Conocimiento, por
                            programa académico y de investigación”, una academia se define como un cuerpo colegiado
                            cuya finalidad es constituirse en espacio permanente de análisis, planeación, organización,
                            integración, seguimiento y evaluación de las funciones sustantivas de la universidad para
                            el mejoramiento del proceso educativo.
                        </p>
                    </section>

                    <section className={`${styles.section} ${styles.usuarios}`}>
                        <h2>¿Quiénes son los usuarios?</h2>
                        <p>
                            La aplicación está diseñada para ser utilizada por tres tipos de usuarios principales:
                        </p>
                        <ul>
                            <li>Docente</li>
                            <li>Coordinador</li>
                            <li>Administrador</li>
                        </ul>
                    </section>

                    <section className={`${styles.section} ${styles.manualUsuario}`}>
                        <h2>Manual de Usuario</h2>
                        <article className={styles.funcionalidadesDocente}>
                            <h3>Funcionalidades para el usuario Docente</h3>
                            <ul>
                                <li>Iniciar sesión</li>
                                <li>Cerrar sesión</li>
                                <li>Ver academias a las que pertenece</li>
                                <li>Ver avisos y actividades programadas.</li>
                                <li>Subir archivos relevantes para su academia.</li>
                                <li>Comunicarse con otros miembros del sistema.</li>
                            </ul>
                        </article>
                        <article className={`${styles.section} ${styles.funcionalidadesAdministrador}`}>
                            <h3>Funcionalidades para el usuario Administrador</h3>
                            <ul>
                                <li>Crear, modificar y eliminar academias.</li>
                                <li>Asignar o quitar coordinadores de academia.</li>
                                <li>Gestionar usuarios y sus roles en el sistema.</li>
                            </ul>
                        </article>

                        <article className={`${styles.article} ${styles.iniciarSesion}`}>
                            <h2>Iniciar sesión</h2>
                            <p>
                                El usuario debe ingresar su nombre de usuario y contraseña en el formulario de inicio de sesión. Después, deberá hacer clic en el botón "Iniciar sesión" para acceder al sistema.
                            </p>
                        </article>

                        <article className={`${styles.article} ${styles.cerrarSesion}`}>
                            <h2>Cerrar sesión</h2>
                            <p>
                                El usuario puede cerrar sesión haciendo clic en el icono de perfil y seleccionando la opción "Cerrar sesión". Esto lo redirigirá a la página de inicio de sesión.
                            </p>
                        </article>

                        <article className={`${styles.article} ${styles.verPerfil}`}>
                            <h2>Ver perfil</h2>
                            <p>
                                El usuario puede ver su perfil haciendo clic en el icono de "Perfil" y seleccionando "Ver perfil". Allí podrá visualizar sus datos personales y académicos.
                            </p>
                        </article>

                        <article className={`${styles.article} ${styles.editarPerfil}`}>
                            <h2>Editar perfil</h2>
                            <p>
                                En la sección de perfil, el usuario puede hacer clic en "Editar" para modificar su información personal, como nombre, correo electrónico y foto de perfil. Luego deberá hacer clic en "Guardar" para aplicar los cambios.
                            </p>
                        </article>

                        <article className={`${styles.article} ${styles.crearChat}`}>
                            <h2>Crear chat</h2>
                            <p>
                                El usuario puede iniciar un chat seleccionando la opción "Crear chat". Debe ingresar los participantes y definir un tema de conversación. El chat se creará y se podrá empezar a enviar mensajes.
                            </p>
                        </article>

                        <article className={`${styles.article} ${styles.mandarMensaje}`}>
                            <h2>Mandar mensaje</h2>
                            <p>
                                Dentro de un chat, el usuario puede escribir un mensaje en el campo correspondiente y hacer clic en "Enviar" para mandar el mensaje al destinatario.
                            </p>
                        </article>

                        <article className={`${styles.article} ${styles.eliminarMensaje}`}>
                            <h2>Eliminar mensaje</h2>
                            <p>
                                El usuario puede eliminar un mensaje dentro de un chat haciendo clic en el mensaje y seleccionando la opción "Eliminar". Este mensaje será removido de la conversación.
                            </p>
                        </article>

                        <article className={`${styles.article} ${styles.verAcademias}`}>
                            <h2>Ver academias</h2>
                            <p>
                                El usuario puede acceder a la lista de academias disponibles en el sistema seleccionando la opción "Ver academias" desde el menú principal. Allí podrá explorar las academias a las que pertenece o tiene acceso.
                            </p>
                        </article>
                    </section>
                </main>
            </div>
        </div>

    )
};




export default HelpPage

