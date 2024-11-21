// src/componentes/Menu.tsx

import styles from './mainContainerStyle.module.css'
import { useState } from 'react'

interface MenuProps {
    cambiarVentana: (ventana: string) => void; // Función recibida desde el componente padre
}

const Menu = ({ cambiarVentana }: MenuProps) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    // Función para manejar la selección de un elemento del menú
    const handleSelect = (item: string) => {
        setSelectedItem(item); // Cambia el elemento seleccionado
        cambiarVentana(item);  // Llama a la función de cambio de ventana del padre
    };


    return (
        <div className={styles.menuContainer}>
            <nav className={styles.menu}>
                <ul className={styles.menuList}>
                    <li
                        className={`${styles.menuItem} ${selectedItem === 'Academias' ? styles.menuItemSelected : ''}`}
                        onClick={() => handleSelect('Academias')}
                    >
                        <img className={styles.iconItem} src="/assets/iconos/team-icon.png" alt="Academias Icon" />
                        <span className={styles.textItem}>Academias</span>
                    </li>
                    <li
                        className={`${styles.menuItem} ${selectedItem === 'Mensajes' ? styles.menuItemSelected : ''}`}
                        onClick={() => handleSelect('Mensajes')}
                    >
                        <img className={styles.iconItem} src="/assets/iconos/chat-icon.png" alt="Mensajes Icon" />
                        <span className={styles.textItem}>Mensajes</span>
                    </li>
                    <li
                        className={`${styles.menuItem} ${selectedItem === 'Actividad' ? styles.menuItemSelected : ''}`}
                        onClick={() => handleSelect('Actividad')}
                    >
                        <img className={styles.iconItem} src="/assets/iconos/notif-icon.png" alt="Actividad Icon" />
                        <span className={styles.textItem}>Actividad</span>
                    </li>
                    <li
                        className={`${styles.menuItem} ${selectedItem === 'Calendario' ? styles.menuItemSelected : ''}`}
                        onClick={() => handleSelect('Calendario')}
                    >
                        <img className={styles.iconItem} src="/assets/iconos/calendar-icon.png" alt="Calendario Icon" />
                        <span className={styles.textItem}>Calendario</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;