import React from 'react';
// Importamos el hook clave para leer parámetros de la URL
import { useParams } from 'react-router-dom'; 

const UserDetail: React.FC = () => {
    // 1. Leer el parámetro 'nombre' de la URL: /usuario/:nombre
    // Especificamos que esperamos un objeto con una clave 'nombre' de tipo string.
    const params = useParams<{ nombre: string }>();
    const userName = params.nombre;

    // 2. Lógica de la Actividad: Definir el contenido dinámico según el nombre
    let title: string;
    let text: string;

    switch (userName?.toLowerCase()) {
        case 'alioune':
            title = "¡Bienvenido, Alioune! (Ruta activa)";
            text = "Alioune es el delegado del curso y es experto en gestión de equipos. ";
            break;
        case 'marta':
            title = "¡Bienvenida, Marta! (Ruta activa)";
            text = "Marta es la tesorera y tiene un gran talento para el diseño gráfico y la comunicación.";
            break;
        default:
            title = `Usuario no identificado: ${userName || 'N/A'}`;
            text = "No tenemos detalles específicos sobre este usuario en nuestra base de datos, pero el sistema ha reconocido el parámetro de la URL.";
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>{title}</h2>
            <p>Parámetro recibido: <strong>{userName || 'N/A'}</strong></p>
            <hr />
            <p>{text}</p>
        </div>
    );
};

export default UserDetail;