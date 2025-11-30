// src/components/HeroRenderer.tsx

import React from 'react';
import type { Hero } from '../interfaces/hero'; 
import heroData from '../data/heroes.json'; 

interface HeroRendererProps {
    publisher: 'Marvel Comics' | 'DC Comics'; 
}

const HeroRenderer: React.FC<HeroRendererProps> = ({ publisher }) => { // <--- Línea ~20

    const filteredHeroes = (heroData as Hero[]).filter(
        hero => hero.publisher === publisher
    );

    if (filteredHeroes.length === 0) {
        return <p>No se encontraron héroes para {publisher}.</p>;
    }

    const mode = publisher === 'DC Comics' ? 'table' : 'list'; // <--- Uso correcto de 'mode'

    // 1. Definición del array de elementos (Línea ~30 en el código previo)
    // Asegúrate de que la sintaxis de la función map sea correcta: array.map((arg1, arg2) => { ... })
    const renderItems = filteredHeroes.map((hero, index) => { // <--- ¡Revisa esta línea!
        
        // 2. Definición de contenido (JSX)
        const content = ( 
            <span key={index}> {/* Usamos index aquí si no hay ID */}
                <strong>{hero.superhero}</strong> ({hero.alter_ego})
            </span>
        );

        // 3. Renderizado condicional
        if (mode === 'table') {
            return (
                <tr key={index}> 
                    <td>{content}</td>
                    <td>{hero.first_appearance}</td> 
                    <td>{hero.characters}</td> 
                </tr>
            );
        } else {
            return (
                <li key={index}>
                    {content} - (Aparición: {hero.first_appearance})
                </li>
            );
        }
    });

    // 4. Devolver el envoltorio
    if (mode === 'table') {
        return (
            <table className="hero-table">
                <caption>Héroes de {publisher} (Modo Tabla)</caption>
                <thead>
                    <tr>
                        <th>Héroe (Alter Ego)</th>
                        <th>Primera Aparición</th>
                        <th>Personajes Relacionados</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems}
                </tbody>
            </table>
        );
    } else {
        return (
            <div>
                <h4>Héroes de {publisher} (Modo Lista)</h4>
                <ul className="hero-list">
                    {renderItems}
                </ul>
            </div>
        );
    }
};

export default HeroRenderer;