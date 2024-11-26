import styles from './ActivityTabStyle.module.css';


interface Task {
    name: string;
    description: string;
    date: string;
}

const tasks: Task[] = [
    { name: 'Junta para definir examen de programacion', description: 'Nos vamos a juntar los tres maestros que damos programacion para hacer el examen ordinario.', date: '2024-11-25' },
    { name: 'Reunion de inico de semestre', description: 'Crear el plan de trabajo de sistemas operativos.', date: '2024-11-26' },
    { name: 'Entrega de evidencias de experiencia recepcional', description: 'Estudiar la tabla periódica.', date: '2024-11-27' },
];

const ActivityTab: React.FC = () => {
    return (
        <div className={styles.activityTabContainer}>
            <div className={styles.taskList}>
                <h1 className={styles.titulo}>Actividades pendientes </h1>
                {tasks.map((task, index) => (
                    <div className={styles.taskItem} key={index}>
                        <span className={styles.taskName}>{task.name}</span>
                        <p className={styles.taskDescription}>{task.description}</p>
                        <div className={styles.taskDate}>{task.date}</div>
                    </div>
                ))}

            </div>

            {
                    <div className={styles.taskDetails}>
                        <h2 className={styles.detailsHeader}>Detalles de la actividad</h2>
                        <p><strong>Envío:</strong> Miguel Ángel Ortizgoza</p>
                        <p><strong>Lugar:</strong> Salón 106</p>
                        <p><strong>Fecha:</strong> 2024-11-27</p>
                        <p><strong>Nombre de academia:</strong> Sistemas Operativos</p>
                        <p className={styles.detailsParagraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet, eros non pellentesque blandit, elit mi suscipit libero, ut aliquam arcu lorem non ligula.
                        </p>
                    </div>
                }

        </div>);
};


export default ActivityTab;