import styles from './mainContainerStyle.module.css'
import { useUser } from './UserContext';


const BarraSuperior = () => {

    const { user } = useUser();

    return (
        <header className={styles.header}>

            <span className={styles.mainTitle}>Universidad Veracruzana</span>

            <div className={styles.topBar}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src="/assets/images/academia-src/a-logo-blanco.png" alt="logo Academia"></img>
                </div>

                <div className={styles.userContainer}>
                    <span className={styles.userName}>{user.nombre}</span>
                    <div role="boton" className={styles.perfilButton}>
                        <img className={styles.perfilImage} src={user.src}></img>
                    </div>
                </div>

                
            </div>
        </header>
    );
}

export default BarraSuperior