// src/componentes/userView/UserView.tsx

//Hooks
import { useMenuType } from './contextos/MenuTypeContext';
import { useVentana } from './contextos/VentanaContext';

//Componentes principales
import BarraSuperior from './componentesPrincipales/BarraSuperior'
import Menu from './componentesPrincipales/Menu'

//Estilos
import styles from './componentesPrincipales/userViewContainerStyle.module.css'

//Ventanas
import AcademiasHome from './Academias/AcademiasHome';
import AcademiaPerfilContainer from './Academias/AcademiaPerfilContainer';
import AcademiaCoordinadorPerContainer from './Academias/AcademiaCoordinadorPerContainer';
import ChatTab from './Chat/chatTab';
import ActivityTab from './Actividad/ActivityTab';
import CalendarioTab from './Calendario/CalendarTab';
import { useScreenSize } from '../../ScreenSizeContext';


const UserView = () => {
    const { ventana } = useVentana() //Cambio de ventana
    const { menuType} = useMenuType() //Tipo de menu
    const { screenSize } = useScreenSize() //Tamaño de ventana


    const renderizarCambioVentana = () => {
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

    const getDinamicContainerClass = () => {
        const baseClass = `${styles.dinmicContainer}`;
    
        if (screenSize === 'large') {
            if (menuType === 'extendido') {
                return `${baseClass} ${styles.dinamicContainerMenuExtendido}`;
            }
            if (menuType === 'reducido') {
                return `${baseClass} ${styles.dinamicContainerMenuReducido}`;
            }
            if (menuType === 'oculto') {
                return `${baseClass} ${styles.dinamicContainerMenuOculto}`;
            }
        }
    
        if (screenSize === 'medium') {
            if (menuType === 'extendido') {
                return `${baseClass} ${styles.dinamicContainerMenuReducido}`;
            }
            if (menuType === 'reducido') {
                return `${baseClass} ${styles.dinamicContainerMenuReducido}`;
            }
            if (menuType === 'oculto') {
                return `${baseClass} ${styles.dinamicContainerMenuOculto}`;
            }
        }
    
        if (screenSize === 'small') {
            if (menuType === 'extendido') {
                return `${baseClass} ${styles.dinamicContainerMenuOculto}`;
            }
            if (menuType === 'reducido') {
                return `${baseClass} ${styles.dinamicContainerMenuOculto}`;
            }
            if (menuType === 'oculto') {
                return `${baseClass} ${styles.dinamicContainerMenuOculto}`;
            }
        }
    
        return baseClass;
    };




    return (
        <>
            <div className={styles.container}>
                <BarraSuperior></BarraSuperior>
                <div className={styles.contentContainer}>
                    <Menu></Menu>
                    <div className={getDinamicContainerClass()}>
                        {renderizarCambioVentana()}
                    </div>
                </div>
                <footer className={styles.footer}></footer>
            </div>
        </>
    );
}

export default UserView;