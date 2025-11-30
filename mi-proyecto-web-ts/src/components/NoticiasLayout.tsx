// src/components/NoticiasLayout.tsx
import { Link, Outlet } from 'react-router-dom';

export const NoticiasLayout = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>📰 Sección de Noticias del Instituto</h2>
      <p>Selecciona una categoría:</p>
      
      {/* Sub-menú para navegar DENTRO de noticias */}
      <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Link to="jefatura">Ver Jefatura</Link> | 
        <Link to="igualdad">Ver Igualdad</Link>
      </nav>

      <hr />

      {/* AQUÍ ES DONDE OCURRE LA MAGIA DEL OUTLET */}
      {/* Aquí se renderizará el componente hijo (Jefatura o Igualdad) */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '15px' }}>
        <Outlet />
      </div>
    </div>
  );
};

// Componentes hijos sencillos
export const Jefatura = () => <h3>👨‍🏫 Noticias de Jefatura de Estudios</h3>;
export const Igualdad = () => <h3>⚖️ Noticias del Plan de Igualdad</h3>;
export const Galeria = () => <h2>🖼️ Galería de Fotos</h2>;
export const Contacto = () => <h2>📞 Contacto: 404 (Simulado)</h2>; // La tarea pedía una 404 en contacto o algo similar, pero usaremos esto.
export const Error404 = () => <h1 style={{color:'red'}}>Error 404 - Página no encontrada</h1>;