import styles from './mainContainerStyle.module.css'


const BarraSuperior = () => {

    return (
        <header className={styles.header}>

            <span className={styles.mainTitle}>Universidad Veracruzana</span>

            <div className={styles.topBar}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src="/assets/images/academia-src/a-logo-blanco.png" alt="logo Academia"></img>
                </div>

                <div className={styles.userContainer}>
                    <span className={styles.userName}>{"FELIPE DE JESIS LUCIDO LOZANO"}</span>
                    <div role="boton" className={styles.perfilButton}>
                        <img className={styles.perfilImage} src={'/assets/images/perfil/gallo.jpg'}></img>
                    </div>
                </div>

                
            </div>
        </header>
    );
}

export default BarraSuperior