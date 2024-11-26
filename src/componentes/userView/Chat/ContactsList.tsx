
import styles from './ChatStyle.module.css'; // Importa los estilos del archivo CSS Module

interface Contact {
  id: number;
  name: string;
  lastMessage: string;
  lastConnection: string;
  photoUrl: string;
}

const contacts: Contact[] = [
  {
    id: 1,
    name: 'Julio Aldair',
    lastMessage: '¡Hola! enviame tu parte',
    lastConnection: 'Hace 5 minutos',
    photoUrl: '/assets/images/perfil/default-perfil.png',
  },
  {
    id: 2,
    name: 'Hector Aron',
    lastMessage: '¿Te vas a conectar más tarde?',
    lastConnection: 'Hace 2 horas',
    photoUrl: '/assets/images/perfil/default-perfil.png',
  },
  {
    id: 3,
    name: 'Benito',
    lastMessage: 'Revisé el archivo, todo bien',
    lastConnection: 'Hace 1 día',
    photoUrl: '/assets/images/perfil/default-perfil.png',
  },
];

const ContactList = () => {
  return (
    <div className={styles.contenedorListaContactos}>         
      <ul className={styles.contenedorContactos}>
      <h1 className={styles.tituloContactos}>Contactos</h1>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles.contacto}>
            <div className={styles.contenedorFoto}>
              <img src={contact.photoUrl} alt={contact.name} className={styles.foto} />
            </div>
            <div className={styles.informacionContacto}>
              <span className={styles.nombre}>{contact.name}</span>
              <span className={styles.ultimaConexion}>{contact.lastConnection}</span>
              <span className={styles.ultimoMensaje}>{contact.lastMessage}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
