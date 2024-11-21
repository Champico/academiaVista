// src/componentes/userView/MainContainer.tsx

import BarraSuperior from './BarraSuperior'
import Menu from './Menu'
import { UserProvider } from './UserContext';
import styles from './mainContainerStyle.module.css'
import AcademiasHome from './Academias/AcademiasHome';

const UserView = () => {

    const cambiarVentana = async (id: string) => {
        switch (id) {
            case 'academias':
                console.log('Se cambia a ventana principañl')
                break;
            case 'miacademia':
                console.log('Se cambia a mi academia')
                break;
            case 'academia':
                console.log('se cambia a una ventana especifica')
                break;
            default:
                console.log('Error')
        }
    }

    return (
        <UserProvider>
            <div className={styles.container}>
                <BarraSuperior></BarraSuperior>
                <div className={styles.centerContainer}>
                    <Menu cambiarVentana={cambiarVentana}></Menu>
                    <div className={styles.dinamicContainer}>
                        <AcademiasHome></AcademiasHome>
                    </div>
                </div>
                <footer className={styles.footer}></footer>
            </div>
        </UserProvider>
    );
}

export default UserView;