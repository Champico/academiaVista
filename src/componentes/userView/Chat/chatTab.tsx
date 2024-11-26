import React, { useState, useEffect } from "react";
import ContactList from "./ContactsList";
import styles from "./ChatStyle.module.css";

interface Message {
    text: string;
    time: string;
    status: string;
}

const ChatTab = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>("");

    useEffect(() => {
        const initialMessages: Message[] = [
            { text: "Hola, ¿cómo estás?", time: "09:00 AM", status: "received" },
            { text: "¡Hola! enviame tu parte", time: "09:02 AM", status: "received" },
        ];
        setMessages(initialMessages);
    }, []);


    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() === "") return;

        const newMessage: Message = {
            text: input.trim(),
            time: new Date().toLocaleTimeString(),
            status: "sent", // Puedes cambiar este estado según el contexto
        };

        setMessages([...messages, newMessage]);
        setInput(""); // Limpiar el campo de entrada
    };

    const logoEnviar = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M2 21.5L23 12 2 2.5v8.5l15 1-15 1z" />
        </svg>
    );

    return (
        <div className={styles.chatTab}>
            <ContactList />
            <section id="chat" className={styles.chatSection}>

                <div className={styles.contactoHeader}>
                    <div className={styles.contactHContaineroFoto}>
                        <img
                            src={"/assets/images/perfil/default-perfil.png"}
                            alt={"Default"}
                            className={styles.contactoHFoto}
                        />
                    </div>
                    <div className={styles.contactoHInfo}>
                        <span className={styles.contactoNombre}>Julio Aldair</span>
                    </div>
                </div>


                <ul id="messages" className={styles.messageList}>
                    {messages.map((message, index) => (
                        <li
                            key={index}
                            className={
                                message.status === "sent"
                                    ? styles.emisor
                                    : styles.remitente
                            }
                        >
                            <div className={styles.messageText}>{message.text}</div>
                            <div className={styles.messageTime}>{message.time}</div>
                        </li>
                    ))}
                </ul>

                {/* Formulario para enviar mensajes */}
                <form id="form" className={styles.messageForm} onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        name="message"
                        id="input"
                        placeholder="Escribe tu mensaje"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className={styles.messageInput}
                    />
                    <button type="submit" className={styles.sendButton}>
                        {logoEnviar}
                    </button>
                </form>
            </section>
        </div>
    );
};

export default ChatTab;
