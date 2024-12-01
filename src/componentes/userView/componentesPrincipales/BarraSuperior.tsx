// src/componentes/BarraSuperior.tsx

import styles from './userViewContainerStyle.module.css'

//Hooks
import { useState } from 'react';
import { useUserSession } from '../contextos/UserSessionContext';
import { useMenuType } from '../contextos/MenuTypeContext';
import { useScreenSize } from '../../../ScreenSizeContext';
import { useNavigate } from 'react-router-dom';

const BarraSuperior = () => {
    const { user, setUser } = useUserSession(); //Usuario
    const { menuType, setMenuType } = useMenuType(); //Tipo de menu
    const { screenSize } = useScreenSize() //Tamaño de pantalla
    const [showCard, setShowCard] = useState(false); //Mostrar/ocultar contraseña


    const handleLogout = () => {
        setUser(null);
    }

    const handleMenu = () => {
        console.log("CLICK HAMBURGUESA > ScrenSize:", screenSize, "MenuType", menuType)
        switch (screenSize) {
            case 'small':
                switch(menuType){
                    case 'extendido': setMenuType('oculto')
                    break
                    case 'reducido': setMenuType('oculto')
                    break
                    case 'oculto': setMenuType('extendido')
                    break  
                }
                break
            case 'medium':
                switch(menuType){
                    case 'extendido': setMenuType('reducido')
                    break
                    case 'reducido': setMenuType('extendido')
                    break
                    case 'oculto': setMenuType('extendido')
                    break;        
                }
                break
            case 'large':
                switch(menuType){
                    case 'extendido': setMenuType('reducido')
                    break
                    case 'reducido': setMenuType('extendido')
                    break
                    case 'oculto': setMenuType('extendido')
                    break;        
                }
        }
    }

    const getFullName = () => {
        if (user && user.correo && user.nombre) {
            return `${user.nombre.toUpperCase()} ${user.paterno?.toUpperCase() || ''} ${user.materno?.toUpperCase() || ''}`;
        } else {
            return ''
        }
    };

    const getCorreo = () => {
        if (user && user.correo) {
            return user.correo
        } else {
            return ''
        }
    };

    const navigate = useNavigate();

  const goToHelp = () => {
    navigate('/help');
  };

    const salirIcon = (<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M661 5105 c-150 -33 -254 -83 -363 -175 -117 -97 -209 -237 -255 -385 l-28 -90 0 -1895 0 -1895 28 -90 c80 -259 283 -462 542 -542 l90 -28 1140 0 1140 0 90 28 c259 80 463 284 542 542 27 90 27 91 28 390 0 299 0 300 -24 338 -13 21 -42 50 -64 65 -34 23 -52 27 -107 27 -55 0 -73 -4 -107 -27 -22 -15 -51 -44 -64 -65 -23 -37 -24 -46 -30 -313 -5 -255 -7 -279 -28 -333 -43 -110 -132 -195 -245 -234 -48 -17 -118 -18 -1136 -18 l-1085 0 -58 23 c-111 45 -195 133 -234 246 -17 48 -18 146 -18 1886 0 1740 1 1838 18 1886 39 113 123 201 234 246 l58 23 1085 0 c1018 0 1088 -1 1136 -18 113 -39 202 -124 245 -234 21 -54 23 -78 28 -334 l6 -276 27 -40 c41 -62 90 -88 168 -88 78 0 127 26 168 88 l27 41 0 300 c-1 300 -1 301 -28 391 -79 258 -283 462 -542 542 l-90 28 -1115 2 c-924 1 -1126 -1 -1179 -12z" />
            <path d="M4315 3391 c-88 -41 -133 -131 -113 -227 9 -46 23 -62 191 -231 l181 -183 -1235 -2 -1235 -3 -41 -27 c-63 -41 -88 -90 -88 -169 0 -54 5 -72 27 -106 15 -22 44 -51 65 -64 l38 -24 1234 -3 1235 -2 -181 -183 c-168 -169 -182 -185 -191 -231 -34 -162 126 -295 273 -227 26 12 132 112 306 287 247 250 268 274 300 344 33 74 34 77 34 210 0 133 -1 136 -34 210 -32 70 -53 94 -300 344 -174 175 -280 275 -306 287 -51 24 -109 24 -160 0z" />
        </g>
    </svg>)

    const perfilIcon = (<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M2420 5114 c-322 -40 -591 -171 -815 -398 -199 -201 -313 -415 -372 -696 -24 -118 -24 -382 0 -500 59 -281 174 -496 372 -696 201 -203 421 -322 705 -381 117 -24 380 -24 502 0 270 54 494 174 694 372 202 199 322 421 381 705 24 118 24 382 0 500 -39 185 -110 356 -212 510 -63 95 -258 291 -351 352 -161 107 -335 180 -506 213 -81 16 -328 28 -398 19z" />
            <path d="M2023 2104 c-560 -68 -1065 -385 -1390 -874 -191 -286 -300 -624 -319 -985 -6 -111 -5 -124 15 -163 14 -28 34 -48 61 -62 39 -20 54 -20 2170 -20 2116 0 2131 0 2170 20 27 14 47 34 61 62 20 39 21 52 15 163 -26 493 -214 925 -556 1279 -324 335 -742 539 -1199 586 -151 15 -889 11 -1028 -6z" />
        </g>
    </svg>
    )

    const configuracionIcon = (<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M2245 5111 c-50 -13 -112 -49 -151 -88 -65 -64 -81 -117 -111 -354 -14 -118 -31 -219 -36 -226 -5 -7 -25 -17 -45 -23 -20 -7 -83 -32 -140 -57 l-103 -46 -37 30 c-173 137 -304 234 -342 253 -61 31 -159 38 -236 15 -57 -16 -67 -25 -291 -248 -223 -224 -232 -234 -248 -291 -23 -78 -16 -175 15 -236 13 -25 77 -115 143 -200 66 -85 125 -161 130 -167 6 -9 -5 -46 -36 -115 -25 -57 -50 -120 -57 -140 -6 -20 -16 -40 -23 -45 -7 -5 -109 -22 -227 -37 -238 -30 -289 -46 -353 -110 -21 -20 -49 -60 -65 -89 l-27 -52 0 -320 0 -320 26 -56 c15 -31 43 -73 64 -94 66 -66 118 -82 356 -112 118 -14 219 -31 226 -36 7 -5 17 -25 23 -45 7 -20 32 -83 57 -140 31 -69 42 -106 36 -115 -5 -6 -64 -82 -130 -167 -66 -85 -130 -175 -143 -200 -31 -62 -38 -158 -15 -236 16 -56 26 -68 233 -277 259 -261 275 -272 407 -272 76 0 97 4 135 24 35 19 172 121 368 274 8 7 36 -1 90 -26 42 -19 108 -46 145 -58 49 -17 69 -30 72 -44 2 -11 16 -112 30 -225 28 -227 45 -279 110 -345 21 -21 63 -49 94 -64 l56 -26 315 0 315 0 56 26 c31 15 73 43 94 64 66 67 82 118 112 356 14 118 31 219 37 225 6 6 45 24 86 39 41 15 102 41 135 58 70 35 47 46 250 -113 83 -64 170 -127 195 -140 62 -31 158 -38 236 -15 56 16 68 26 277 233 261 259 272 275 272 407 0 113 -8 128 -168 335 -66 85 -125 161 -130 167 -6 9 5 46 36 115 25 57 50 120 57 140 6 20 16 40 23 45 7 5 108 22 226 36 238 30 287 45 355 112 21 21 51 64 65 94 l26 56 0 315 0 315 -26 56 c-15 31 -43 73 -64 94 -66 66 -118 82 -356 112 -118 14 -219 31 -226 36 -7 5 -17 25 -23 45 -7 20 -32 83 -57 140 -31 69 -42 106 -36 115 5 6 64 82 130 167 66 85 130 175 143 200 31 61 38 158 15 236 -16 57 -25 67 -248 291 -224 223 -234 232 -291 248 -78 23 -175 16 -236 -15 -25 -13 -112 -76 -195 -140 -203 -159 -180 -148 -250 -113 -33 17 -94 43 -135 58 -41 15 -80 33 -86 39 -6 6 -23 107 -37 225 -30 238 -46 289 -112 356 -21 21 -63 49 -94 64 l-56 26 -300 2 c-165 1 -313 -2 -330 -6z m425 -1491 c124 -14 229 -44 335 -94 238 -112 409 -283 520 -519 192 -407 102 -894 -223 -1209 -322 -311 -790 -392 -1188 -204 -121 58 -203 114 -296 204 -325 315 -415 802 -223 1209 176 372 538 609 950 622 22 0 78 -4 125 -9z" />
        </g>
    </svg>)

    const helpIcon = (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M2315 5109 c-597 -61 -1141 -318 -1563 -739 -1002 -1000 -1002 -2620 0 -3620 406 -405 901 -648 1493 -732 119 -17 512 -16 635 1 580 80 1089 330 1489 732 464 467 723 1061 748 1719 26 711 -242 1393 -749 1900 -393 394 -891 643 -1453 726 -122 18 -477 26 -600 13z m615 -378 c464 -84 859 -290 1185 -616 419 -419 645 -964 645 -1555 0 -591 -226 -1136 -645 -1555 -419 -419 -964 -645 -1555 -645 -590 0 -1137 227 -1555 645 -331 331 -536 730 -622 1210 -25 143 -25 547 0 690 86 480 291 879 622 1210 357 357 789 566 1310 635 123 16 484 5 615 -19z" />
                <path d="M2427 3839 c-172 -14 -328 -81 -434 -185 -151 -148 -170 -337 -42 -416 101 -63 181 -45 254 56 86 121 148 157 283 164 212 12 342 -84 330 -242 -9 -110 -51 -167 -223 -306 -176 -142 -237 -225 -276 -378 -26 -104 -26 -280 0 -339 27 -59 66 -77 167 -77 145 0 194 46 194 184 0 170 46 254 210 391 262 216 381 441 350 661 -47 327 -375 524 -813 487z" />
                <path d="M2405 1868 c-179 -66 -232 -290 -102 -426 102 -107 258 -106 362 1 158 163 56 423 -170 434 -33 1 -73 -3 -90 -9z" />
            </g>
        </svg>
    );

    const menuIcon = (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M307 4839 c-99 -23 -212 -111 -258 -200 -49 -97 -60 -192 -33 -294 38 -150 163 -266 315 -295 77 -15 4392 -13 4461 1 155 33 274 144 312 294 21 79 20 140 -4 217 -37 119 -109 200 -226 255 l-59 28 -2235 2 c-1278 0 -2251 -3 -2273 -8z" />
                <path d="M283 2946 c-106 -34 -194 -113 -246 -224 -29 -61 -32 -76 -32 -162 0 -86 3 -101 32 -162 42 -90 110 -160 192 -201 l66 -32 2265 0 2265 0 66 32 c82 41 150 111 192 201 29 61 32 76 32 162 0 86 -3 101 -32 162 -42 90 -110 160 -192 201 l-66 32 -2250 2 c-1841 1 -2258 -1 -2292 -11z" />
                <path d="M305 1064 c-212 -52 -348 -278 -291 -489 32 -120 110 -214 224 -268 l67 -32 2255 0 2255 0 59 28 c117 55 189 136 226 255 24 77 25 138 4 217 -38 150 -163 267 -313 295 -35 7 -799 10 -2240 9 -1866 -1 -2195 -3 -2246 -15z" />
            </g>
        </svg>
    );

    const card = (
        <div className={`${styles.card} ${showCard ? styles.cardVisible : styles.cardHidden}`}>
            <div className={styles.cardInfoUsuario}>
                <div className={styles.cardPerfilImageContainer}>
                    <img className={styles.cardPerfilImage} src={'/assets/images/perfil/default-perfil.png'}></img>
                </div>
                <div className={styles.cardData}>
                    <span className={styles.cardUserName}>{getFullName()}</span>
                    <span className={styles.cardUserCorreo}>{getCorreo()}</span>
                </div>
            </div>
            <div className={styles.cardMenuContainer}>
                <ul className={styles.cardMenuList}>
                    <button className={`${styles.cardVerPerfilButton} ${styles.cardButton}`}>
                        {perfilIcon}
                        <span className={styles.cardButtonText}>Ver perfil</span>
                    </button>

                    <button className={`${styles.cardConfiguracionButton} ${styles.cardButton}`}>
                        {configuracionIcon}
                        <span className={styles.cardButtonText}>Configuración</span>
                    </button>

                    <button className={`${styles.cardAyudaButton} ${styles.cardButton}`} onClick={goToHelp}>
                        {helpIcon}
                        <span className={styles.cardButtonText}>Ayuda</span>
                    </button>

                    <button className={`${styles.cardCerrarSesionButton} ${styles.cardButton}`} onClick={handleLogout}>
                        {salirIcon}
                        <span className={styles.cardButtonText}>Cerrar sesión</span>
                    </button>
                </ul>
            </div>
        </div>
    );

    return (
        <header className={styles.header}>
            <span className={styles.mainTitle}>Universidad Veracruzana</span>
            <div className={styles.topBar}>
                <div className={styles.logoContainer}>
                    <button className={styles.menuButton} onClick={handleMenu} >
                        {menuIcon}
                    </button>
                    <button className={styles.mainButton}>
                        <img className={styles.logo} src="/assets/images/academia-src/a-logo-blanco.png" alt="logo Academia"></img>
                    </button>

                </div>
                <div className={styles.userContainer}>
                    <span className={styles.userName}>{getFullName()}</span>
                    <div role="boton" className={styles.perfilButton} onClick={() => setShowCard(!showCard)}>
                        <img className={styles.perfilImage} src={'/assets/images/perfil/default-perfil.png'}></img>
                    </div>
                </div>
                {card}
            </div>
        </header>
    );
}

export default BarraSuperior