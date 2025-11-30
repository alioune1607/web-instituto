// src/interfaces/hero.ts

export interface Hero {
    superhero: string;
    publisher: 'DC Comics' | 'Marvel Comics'; // Definimos los publishers conocidos
    alter_ego: string;
    first_appearance: string;
    characters: string;
}