import styles from './AcademiaHomeStyle.module.css'

interface Academia {
    nombre: string;
    icono: string;
    coordinador: string;
}


const AcademiasHome = () => {
    // Arreglo de academias
    const academias: Academia[] = [
        {
            nombre: 'Arquitectura y sistemas',
            icono: '/assets/iconos/icon.png',  // Puedes poner cualquier icono
            coordinador: 'Miguel Angel Ortigoza Clemente',
        },
        {
            nombre: 'Sistemas de Informacion y Conocimiento',
            icono: '/assets/iconos/icon.png',
            coordinador: 'Maria Dolores Vargas Cerdan',
        },
        {
            nombre: 'Interaccion Humano Computadora',
            icono: '/assets/iconos/icon.png',
            coordinador: 'Ma. del Carmen Mezura',
        },
        {
            nombre: 'Entorno social',
            icono: '/assets/iconos/icon.png',
            coordinador: 'Candy Obdulia Sosa Jimenez',
        },
        {
            nombre: 'Sistemas y Tecnologias Web',
            icono: '/assets/iconos/icon.png',
            coordinador: 'José Rafael Rojano Cáceres',
        },
    ];

    const miAcademia: Academia = {
        nombre: 'Matematicas',
        icono: '/assets/iconos/icon.png',
        coordinador: 'Felipe de Jesus'
    }

    return (
        <div className={styles.academiasHomeContainer}>
            <h2 className={styles.tituloMisAcademias}>Mis academias</h2>
            <AcademiaTarjeta academia={miAcademia}></AcademiaTarjeta>
            <h2 className={styles.titulAcademias}>Academias</h2>
            <div className={styles.academiasContainer}>
            {academias.map((academia, index) => (
                <AcademiaTarjeta key={index} academia={academia} />
            ))}
            </div>
        </div>
    );
};

export default AcademiasHome;




// Componente AcademiaTarjeta
export const AcademiaTarjeta = ({ academia }: { academia: Academia }) => {
    return (
        <div className={styles.tarjetaContainer}>
            <img src={academia.icono} alt={academia.nombre} className={styles.iconoAcademia} />
            <div>
                <label className={styles.nombreAcademiaTarjeta}>{academia.nombre}</label>
                <p className={styles.nombreCoordinadorTarjeta}>{`Coordinador: ${academia.coordinador}`}</p>
            </div>
        </div>
    );
};
