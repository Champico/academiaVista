// src/componentes/userView/UserView.tsx

import BarraSuperior from './BarraSuperior'
import Menu from './Menu'
import styles from './mainContainerStyle.module.css'
import AcademiasHome from './Academias/AcademiasHome';
import AcademiaPerfilContainer from './Academias/AcademiaPerfilContainer';
import AcademiaCoordinadorPerContainer from './Academias/AcademiaCoordinadorPerContainer';
import { useState} from 'react';
import ChatTab from './Chat/chatTab';
import ActivityTab from './Actividad/ActivityTab';
import CalendarioTab from './Calendario/CalendarTab';

const UserView = () => {

    const [ventana, setVentana] = useState<string>('Academias')

    const cambiarVentana = async (idVentana: string) => {
        setVentana(idVentana)
    }

    const renderizarCambioVentana = () => {
        console.log("Se renderiza Nueva ventana:::::::::::::::::::::::::")
        switch (ventana) {
            case 'Academias':
                return <AcademiasHome></AcademiasHome>
                break;
            case 'Academia':
                return <AcademiaPerfilContainer></AcademiaPerfilContainer>
                break;
            case 'MiAcademia':
                return <AcademiaCoordinadorPerContainer></AcademiaCoordinadorPerContainer>
                break;
            case 'Mensajes':
                return <ChatTab></ChatTab>
                break;
                case 'Actividad':
                    return <ActivityTab></ActivityTab>
                    break;
                    case 'Calendario':
                        return <CalendarioTab></CalendarioTab>
                        break;
            default:
                <div>Error :C</div>
        }
    }

    return (
        <>
            <div className={styles.container}>
                <BarraSuperior></BarraSuperior>
                <div className={styles.centerContainer}>
                    <Menu cambiarVentana={cambiarVentana}></Menu>
                    <div className={styles.dinamicContainer}>
                        {renderizarCambioVentana()}
                    </div>
                </div>
                <footer className={styles.footer}></footer>
            </div>
        </>
    );
}

export default UserView;