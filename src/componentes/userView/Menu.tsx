// src/componentes/Menu.tsx

import styles from './userViewContainerStyle.module.css'
import { useState } from 'react'

interface MenuProps {
    cambiarVentana: (idVentana: string) => void; // Función recibida desde el componente padre
}

const Menu = ({ cambiarVentana }: MenuProps) => {
    const [selectedItem, setSelectedItem] = useState<string | null>('Academias');


    const cambiarTab = async (idVentana: string) => {
        console.log(idVentana)
        setSelectedItem(idVentana);
        cambiarVentana(idVentana)
    }

    const handleSelect = (item: string) => {
        cambiarTab(item);
    };



    const iconoAcademias = (<svg version="1.0" 
        xmlns="http://www.w3.org/2000/svg"
        width="512.000000pt" 
        height="512.000000pt" 
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
        className={`${styles.iconItem} ${selectedItem === 'Academias' ? styles.activeIcon : styles.inactiveIcon}`}
        >
       
       <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
       <path d="M2452 4420 c-288 -40 -543 -246 -642 -517 -133 -368 13 -770 353 -969 34 -20 102 -50 152 -67 86 -30 97 -32 245 -32 149 0 158 2 250 33 215 75 377 218 471 417 50 107 68 180 75 300 13 236 -66 437 -240 610 -79 79 -105 98 -196 142 -58 28 -134 58 -170 66 -85 20 -219 28 -298 17z"/>
       <path d="M1044 3986 c-33 -8 -92 -29 -130 -47 -94 -45 -218 -168 -262 -259 -113 -235 -71 -500 108 -680 114 -113 253 -170 418 -170 156 0 287 54 399 164 l73 71 -45 90 c-105 213 -133 426 -90 691 7 42 7 42 -40 70 -125 73 -296 101 -431 70z"/>
       <path d="M3835 3990 c-57 -12 -137 -44 -191 -75 -46 -27 -46 -28 -39 -69 43 -265 15 -476 -90 -691 l-44 -90 72 -71 c228 -224 589 -221 817 6 76 77 139 190 159 288 16 75 14 198 -4 267 -50 196 -207 359 -404 421 -56 18 -221 26 -276 14z"/>
       <path d="M1000 2701 c-230 -51 -420 -179 -548 -370 -77 -114 -106 -192 -142 -372 -57 -286 -55 -306 31 -391 133 -130 412 -220 713 -230 l100 -3 42 295 c53 366 77 460 154 615 60 122 118 207 209 304 28 30 50 56 48 57 -1 1 -25 13 -54 28 -153 77 -383 105 -553 67z"/>
       <path d="M2284 2706 c-160 -30 -269 -74 -398 -160 -198 -132 -346 -334 -411 -561 -15 -53 -49 -260 -85 -506 -67 -470 -67 -466 2 -532 74 -71 273 -153 463 -191 451 -90 1107 -80 1508 24 126 32 238 77 312 125 61 39 79 59 100 108 15 36 13 57 -45 461 -33 233 -67 449 -75 480 -77 294 -287 546 -563 673 -41 19 -118 46 -171 60 -88 24 -116 26 -331 29 -166 2 -256 -1 -306 -10z"/>
       <path d="M3808 2710 c-73 -13 -157 -39 -230 -72 l-67 -30 71 -82 c134 -153 228 -327 273 -502 14 -55 45 -232 69 -394 l42 -295 100 3 c125 4 323 36 422 68 116 38 228 101 293 164 84 82 86 105 30 387 -17 82 -44 182 -60 223 -64 158 -210 329 -353 413 -172 102 -404 148 -590 117z"/>
       </g>
       </svg>
       )

    const iconoMensajes = (<svg version="1.0" 
        xmlns="http://www.w3.org/2000/svg"
        width="512.000000pt" 
        height="512.000000pt" 
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet" 
        className={`${styles.iconItem} ${selectedItem === 'Mensajes' ? styles.activeIcon : styles.inactiveIcon}`}
        >
       
       <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
       <path d="M425 4781 c-94 -27 -184 -80 -255 -151 -76 -76 -123 -159 -150 -266 -19 -75 -20 -116 -20 -1423 0 -1292 1 -1348 19 -1381 26 -51 84 -82 143 -77 43 4 82 29 485 317 241 172 463 325 493 339 l55 26 1010 5 c1120 6 1038 1 1180 72 84 43 200 162 243 252 63 130 62 102 62 1196 0 1110 5 1038 -69 1087 l-34 23 -1551 -1 c-1438 0 -1555 -2 -1611 -18z m2462 -817 c96 -71 97 -196 1 -254 -32 -19 -53 -20 -944 -20 l-911 0 -34 23 c-61 41 -86 125 -55 185 19 37 58 71 92 82 16 5 433 8 926 7 893 -2 897 -2 925 -23z m0 -700 c96 -71 97 -196 1 -254 -32 -19 -53 -20 -944 -20 l-911 0 -34 23 c-61 41 -86 125 -55 185 19 37 58 71 92 82 16 5 433 8 926 7 893 -2 897 -2 925 -23z"/>
       <path d="M3990 3162 c0 -386 -3 -497 -15 -567 -54 -310 -279 -571 -582 -676 -139 -48 -169 -49 -1095 -49 l-870 0 4 -197 c4 -170 8 -208 26 -265 30 -88 110 -207 179 -263 66 -54 177 -109 251 -124 36 -8 354 -11 1007 -11 1003 0 1016 -1 1106 -46 25 -12 230 -154 455 -315 225 -161 423 -300 439 -311 69 -42 170 -12 208 62 16 33 17 114 15 1405 l-3 1370 -27 74 c-63 171 -200 307 -367 363 -62 21 -88 23 -398 26 l-333 3 0 -479z"/>
       </g>
       </svg>)

    const iconoActividad = (<svg version="1.0" 
        xmlns="http://www.w3.org/2000/svg"
        width="512.000000pt" 
        height="512.000000pt" 
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
        className={`${styles.iconItem} ${selectedItem === 'Actividad' ? styles.activeIcon : styles.inactiveIcon}`}
        >
       
       <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
       <path d="M2480 5104 c-19 -8 -48 -27 -63 -42 -55 -52 -62 -75 -67 -236 l-5 -149 -92 -18 c-176 -36 -367 -117 -533 -227 -117 -78 -318 -280 -399 -401 -106 -160 -182 -338 -224 -526 -17 -80 -20 -143 -27 -570 -8 -530 -13 -585 -75 -771 -76 -230 -190 -409 -378 -597 -164 -162 -182 -197 -182 -342 0 -89 3 -106 27 -156 53 -107 158 -186 277 -209 77 -14 3567 -14 3647 1 114 21 219 101 272 208 24 50 27 67 27 156 0 144 -20 182 -173 333 -130 128 -188 201 -258 319 -88 147 -147 308 -179 483 -15 77 -19 184 -25 575 -6 428 -9 490 -27 570 -67 298 -194 527 -412 746 -216 215 -463 351 -744 408 l-92 18 -5 149 c-5 161 -12 184 -67 236 -58 56 -151 73 -223 42z"/>
       <path d="M1780 625 c0 -33 62 -182 104 -249 172 -274 506 -422 818 -362 219 42 402 164 526 351 44 66 111 220 112 258 0 16 -44 17 -780 17 -680 0 -780 -2 -780 -15z"/>
       </g>
       </svg>)

    const iconoCalendario = (<svg version="1.0" 
        xmlns="http://www.w3.org/2000/svg"
        width="512.000000pt" 
        height="512.000000pt" 
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
        className={`${styles.iconItem} ${selectedItem === 'Calendario' ? styles.activeIcon : styles.inactiveIcon}`}
        >
       
       <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
       <path d="M1410 4828 c-50 -34 -80 -98 -80 -174 l0 -62 -287 -4 c-279 -4 -291 -5 -368 -31 -149 -50 -273 -154 -341 -288 -55 -111 -64 -165 -64 -416 l0 -223 2290 0 2290 0 0 223 c0 253 -9 309 -67 421 -49 93 -156 202 -244 245 -120 59 -148 63 -460 68 l-286 5 -5 73 c-6 84 -27 128 -79 163 -28 20 -44 23 -90 20 -103 -7 -149 -64 -149 -187 l0 -71 -910 0 -910 0 0 71 c0 123 -46 180 -149 187 -46 3 -62 0 -91 -20z m240 -477 c0 -230 -1 -239 -22 -271 -33 -48 -70 -72 -121 -77 -56 -7 -118 25 -150 77 -21 33 -22 48 -25 273 l-3 237 160 0 161 0 0 -239z m2138 2 c-3 -230 -4 -239 -27 -276 -31 -51 -91 -81 -149 -74 -50 5 -87 29 -119 77 -22 32 -23 41 -23 271 l0 239 161 0 160 0 -3 -237z"/>
       <path d="M270 2125 c0 -815 3 -1201 11 -1237 34 -164 159 -324 312 -397 45 -21 106 -44 135 -50 36 -8 352 -11 988 -11 l936 0 -76 82 c-180 193 -304 434 -363 701 -25 117 -25 437 0 557 129 606 589 1047 1197 1146 128 21 398 14 521 -15 346 -79 651 -279 858 -559 l61 -84 0 526 0 526 -2290 0 -2290 0 0 -1185z"/>
       <path d="M3463 2710 c-258 -36 -519 -167 -704 -352 -98 -98 -162 -189 -229 -323 -275 -550 -97 -1217 416 -1561 203 -135 432 -204 684 -204 756 0 1332 684 1204 1430 -44 256 -158 475 -344 660 -175 175 -374 283 -620 336 -87 19 -318 27 -407 14z m206 -530 c46 -13 99 -65 111 -110 5 -19 10 -122 10 -227 l0 -193 209 0 c199 0 209 -1 241 -22 48 -33 72 -70 77 -120 7 -58 -23 -118 -74 -149 -37 -24 -43 -24 -338 -27 -296 -3 -301 -2 -345 20 -25 13 -55 38 -67 57 -23 33 -23 39 -23 351 0 312 0 318 23 351 22 33 95 79 127 79 8 0 31 -4 49 -10z"/>
       </g>
       </svg>)

    return (
        <div className={styles.menuContainer}>
            <nav className={styles.menu}>
                <ul className={styles.menuList}>
                    <li
                        className={`${styles.menuItem} ${selectedItem === 'Academias' ? styles.menuItemSelected : ''}`}
                        onClick={() => handleSelect('Academias')}
                    >
                        {iconoAcademias}
                        <span className={styles.textItem}>Academias</span>
                    </li>
                    <li
                        className={`${styles.menuItem} ${selectedItem === 'Mensajes' ? styles.menuItemSelected : ''}`}
                        onClick={() => handleSelect('Mensajes')}
                    >
                        {iconoMensajes}
                        <span className={styles.textItem}>Mensajes</span>
                    </li>
                    <li
                        className={`${styles.menuItem} ${selectedItem === 'Actividad' ? styles.menuItemSelected : ''}`}
                        onClick={() => handleSelect('Actividad')}
                    >
                        {iconoActividad}
                        <span className={styles.textItem}>Actividad</span>
                    </li>
                    <li
                        className={`${styles.menuItem} ${selectedItem === 'Calendario' ? styles.menuItemSelected : ''}`}
                        onClick={() => handleSelect('Calendario')}
                    >
                        {iconoCalendario}
                        <span className={styles.textItem}>Calendario</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;