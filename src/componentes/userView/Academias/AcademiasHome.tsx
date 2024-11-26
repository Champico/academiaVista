//userView/Academias/AcademiasHome

import styles from './AcademiaHomeStyle.module.css'
import { useState, useEffect } from 'react';

interface Academia {
    id: number;
    academia: string;
    periodo?: string;
    coordinador?: string;
    codigo?: string;
    icono?: string; 
}

/*interface MenuProps {
    cambiarVentana: (idVentana: string) => void;
const AcademiasHome = ({ cambiarVentana }: MenuProps) => {
}*/

const AcademiasHome = () => {
    const [userAcademias, setUserAcademias] = useState<Academia[] | null>(null);

    useEffect(() => {
        fetchUserData()
    }, []);


    const fetchUserData = async () => {
        try {
            const response = await fetch('http://localhost:1235/user/main', {
                method: 'GET',
                credentials: 'include',
            });
    
            console.log("SE CARGA PAGINA DE ACADEMIAS")
            if (response.ok) {  // Verifica que la respuesta fue exitosa
                const data = await response.json();
                if (data.message === 'No ha iniciado sesión') {
                    console.log("NO HAY SESION")
                } else {
                    console.log("SI HAY SESION XD")
                    const academias = data.academias || [];
                    const miAcademia = data.miAcademia || [];
    
                    // Si el usuario es coordinador, combina academias con miAcademia
                    const academiasFinal = miAcademia.length > 0 ? [ ...miAcademia,...academias] : academias;
    
                    // Establece las academias en el estado
                    setUserAcademias(academiasFinal);
                    console.log("ACADEMIAS AGREGADAS")
                }
            } else {
                setUserAcademias(null); // En caso de error en la respuesta
            }
        } catch (error) {
            console.error("Error fetching user data: ", error);
            setUserAcademias(null); // En caso de error en la petición
        }
    };

   /* const cambiarAVentanaAcademia = () =>{
        cambiarVentana('Academia')
    }*/

        const mostrarAcademias = () => {
            if (!userAcademias || userAcademias.length === 0) {
                return <h2 className={styles.mensajeNoAcademias}>No tiene academias</h2>;
            }
        
            return (
                <>
                    {userAcademias[0].codigo && (
                        <>
                            <h2 className={styles.tituloMisAcademias}>Mi academia</h2>
                            <AcademiaTarjeta academia={userAcademias[0]} />
                        </>
                    )}
        
                    {userAcademias.length > 1 && (
                        <>
                            <h2 className={styles.titulAcademias}>Academias</h2>
                            <div className={styles.academiasContainer}>
                                {userAcademias.slice(1).map((academia, index) => (
                                    <AcademiaTarjeta key={index} academia={academia} />
                                ))}
                            </div>
                        </>
                    )}
                </>
            );
        };
        

        
    return (
        <div className={styles.academiasHomeContainer}>
            {mostrarAcademias()}
        </div>
    );
};

export default AcademiasHome;


// Componente AcademiaTarjeta
export const AcademiaTarjeta = ({ academia }: { academia: Academia }) => {
    return (
        <div className={styles.tarjetaContainer}>
            <img src="/assets/iconos/icon.png" alt={academia.academia} className={styles.iconoAcademia} />
            <div>
                <label className={styles.nombreAcademiaTarjeta}>{academia.academia}</label>
                <p className={styles.nombrePeriodo}>{academia.periodo}</p>
                <p className={styles.nombreCoordinadorTarjeta}>{`Coordinador: ${academia.coordinador}`}</p>
            </div>
        </div>
    );
};
