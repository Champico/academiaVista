//userView/Academias/AcademiasHome

import styles from './AcademiaHomeStyle.module.css'

//Hooks
import { useState, useEffect } from 'react';
import { useUserSession } from '../contextos/UserSessionContext';


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
    //Hooks
    const [userAcademias, setUserAcademias] = useState<Academia[] | null>(null); //Academias
    const { setUser } = useUserSession(); //User

    useEffect(() => {
        let isMounted = true;

        fetchUserData(isMounted)

        return () => { isMounted = false; };
    }, []);


    const fetchUserData = async (isMounted : boolean) => {
        try {
            const response = await fetch('http://localhost:1235/user/main', {
                method: 'GET',
                credentials: 'include',
            });

            console.log("!INFO > Fetch para obtener academias iniciales")
            if (response.ok) {
                const data = await response.json();
                if (data.message === 'No ha iniciado sesión') {
                    if (isMounted) { 
                    setUser(null);
                    }
                } else {
                    const academias = data.academias || [];
                    const miAcademia = data.miAcademia || [];
                    const academiasFinal = miAcademia.length > 0 ? [...miAcademia, ...academias] : academias;
                    setUserAcademias(academiasFinal);
                }
            } else {
                if (isMounted) { 
                setUserAcademias(null);
                }
            }
        } catch {
            if (isMounted) { 
            setUserAcademias(null);
            }
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
