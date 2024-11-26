import React from 'react';
import styles from './CalendarTabStyle.module.css';

const CalendarioTab: React.FC = () => {
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // Simulando un mes con 30 días

    return (
        <div className={styles.calendarContainer}>
            <h1 className={styles.title}>Calendario</h1>
            <div className={styles.calendar}>

                <div className={styles.header}>
                    {daysOfWeek.map((day, index) => (
                        <div key={index} className={styles.headerCell}>
                            {day}
                        </div>
                    ))}
                </div>

                <div className={styles.body}>
                    {daysInMonth.map((day, index) => (
                        <div key={index} className={styles.cell}>
                            {day}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CalendarioTab;