import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { JSX } from 'react';
import { useState } from 'react';

type EnglishLevel = {
    level: string;
    name: string;
    colorClass: string;
    vocabulary: string[];
    grammar: string[];
    skills: string[];
};

const englishLevels: EnglishLevel[] = [
    {
        level: 'Nivel A1',
        name: 'Principiante',
        colorClass: 'bg-rose-400',
        vocabulary: [
            'Saludos y despedidas.',
            'Números, colores, días de la semana, meses, estaciones.',
            'Familia y relaciones básicas.',
            'Objetos cotidianos (ropa, comidas, muebles).',
            'Artículos indefinidos (a, an) y definidos (the).',
        ],
        grammar: [
            'Verbo "to be" (afirmativo, negativo, interrogativo).',
            'Presente simple (afirmaciones y negaciones simples).',
            'Pronombres personales y adjetivos posesivos.',
            'Artículos definidos e indefinidos.',
            'Plurales regulares e irregulares.',
        ],
        skills: [
            'Presentarse y dar información personal básica.',
            'Comprender instrucciones simples.',
            'Preguntar y responder sobre datos personales (nombre, edad, nacionalidad).',
            'Práctica oral continua para mejorar la fluidez.',
        ],
    },
    {
        level: 'Nivel A2',
        name: 'Elemental',
        colorClass: 'bg-teal-400',
        vocabulary: [
            'Descripción de lugares (casa, ciudad, tiendas).',
            'Rutinas diarias (trabajo, ocio, escuela).',
            'Comida, salud y clima.',
            'Vocabulario relacionado con transportes y viajes.',
        ],
        grammar: [
            'Presente perfecto (experiencias pasadas).',
            'Pasado continuo (acciones en progreso en el pasado).',
            'Futuro con "will" y "going to".',
            'Condicionales.',
            'Gerundios e infinitivos.',
        ],
        skills: [
            'Relatar experiencias y hablar de planes y metas.',
            'Participar en conversaciones sobre temas de interés.',
            'Expresar opiniones y pedir/dar consejos.',
            'Práctica continua de speaking para mejorar la fluidez.',
        ],
    },
    {
        level: 'Nivel B1',
        name: 'Intermedio',
        colorClass: 'bg-yellow-400',
        vocabulary: [
            'Viajes, turismo, trabajo y tecnología.',
            'Hobbies, deportes y entretenimiento.',
            'Servicios públicos (bancos, correos, estaciones de tren).',
            'Emergencias y problemas comunes.',
        ],
        grammar: [
            'Presente perfecto (experiencias pasadas).',
            'Pasado continuo (acciones en progreso en el pasado).',
            'Futuro con "will" y "going to".',
            'Condicionales.',
            'Gerundios e infinitivos.',
        ],
        skills: [
            'Relatar experiencias y hablar de planes y metas.',
            'Participar en conversaciones sobre temas de interés.',
            'Expresar opiniones y pedir/dar consejos.',
            'Práctica continua de speaking para mejorar la fluidez.',
        ],
    },
    {
        level: 'Nivel B2',
        name: 'Intermedio Alto',
        colorClass: 'bg-lime-400',
        vocabulary: [
            'Opiniones y debates sobre medio ambiente, cultura y sociedad.',
            'Salud y bienestar, ciencia y tecnología.',
            'Educación y desarrollo profesional.',
        ],
        grammar: [
            'Voz pasiva (presente, pasado, futuro).',
            'Reported speech (estilo indirecto).',
            'Condicionales.',
            'Modales.',
            'Uso avanzado de tiempos verbales.',
        ],
        skills: [
            'Mantener conversaciones fluidas sobre temas complejos.',
            'Comprender artículos y textos más extensos.',
            'Participar en discusiones y defender puntos de vista.',
            'Práctica continua de speaking para fortalecer la comunicación.',
        ],
    },
    {
        level: 'Nivel C1',
        name: 'Avanzado',
        colorClass: 'bg-purple-400',
        vocabulary: [
            'Términos abstractos y temas especializados.',
            'Lenguaje académico, profesional y técnico.',
            'Expresiones idiomáticas y coloquiales.',
        ],
        grammar: [
            'Estructuras condicionales complejas.',
            'Tiempos perfectos.',
            'Uso preciso de partículas y conectores.',
        ],
        skills: [
            'Fluidez y precisión en textos orales y escritos largos.',
            'Comprensión de diferentes registros del lenguaje.',
            'Habilidad para argumentar, negociar y persuadir en diversos contextos.',
            'Énfasis en la práctica continua de speaking para un dominio completo.',
        ],
    },
];

function LevelDetails({ title, items }: { title: string; items: string[] }) {
    return (
        <div className="flex flex-col gap-2 rounded-2xl bg-amber-50 p-3 text-left">
            <p className="font-bold">{title}</p>
            <ul className="list-disc pl-5">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

function LevelCard({ level }: { level: EnglishLevel }) {
    return (
        <div
            className={`flex h-full flex-col rounded-2xl p-5 ${level.colorClass}`}
        >
            <div className="flex flex-row justify-between gap-4 p-2">
                <p className="text-2xl font-bold">{level.level}</p>
                <p>{level.name}</p>
            </div>

            <div className="flex h-full flex-col gap-2 rounded-2xl bg-amber-50 p-3 text-left">
                <LevelDetails title="Vocabulario" items={level.vocabulary} />
                <LevelDetails title="Gramática" items={level.grammar} />
                <LevelDetails title="Habilidades" items={level.skills} />
            </div>
        </div>
    );
}

function LevelDots({
    activeLevel,
    onSelect,
}: {
    activeLevel: number;
    onSelect: (index: number) => void;
}) {
    return (
        <div className="flex items-center justify-center gap-2">
            {englishLevels.map((level, index) => (
                <button
                    key={level.level}
                    type="button"
                    onClick={() => onSelect(index)}
                    aria-label={`Show ${level.level}`}
                    aria-current={activeLevel === index ? 'true' : undefined}
                    className={`size-2.5 rounded-full transition ${
                        activeLevel === index ? 'bg-rose-500' : 'bg-black/25'
                    }`}
                />
            ))}
        </div>
    );
}

function LevelArrowButton({
    direction,
    onClick,
}: {
    direction: 'previous' | 'next';
    onClick: () => void;
}) {
    const Icon = direction === 'previous' ? ChevronLeft : ChevronRight;

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={
                direction === 'previous'
                    ? 'Show previous level'
                    : 'Show next level'
            }
            className={`absolute top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center text-black ${
                direction === 'previous' ? '-left-3' : '-right-3'
            }`}
        >
            <Icon className="size-5" aria-hidden="true" />
        </button>
    );
}

function LevelCarousel({
    activeLevel,
    currentLevel,
    onPrevious,
    onNext,
    onSelect,
}: {
    activeLevel: number;
    currentLevel: EnglishLevel;
    onPrevious: () => void;
    onNext: () => void;
    onSelect: (index: number) => void;
}) {
    return (
        <div className="flex w-full flex-col gap-5">
            <LevelDots activeLevel={activeLevel} onSelect={onSelect} />

            <div className="relative">
                <LevelArrowButton direction="previous" onClick={onPrevious} />
                <LevelCard level={currentLevel} />
                <LevelArrowButton direction="next" onClick={onNext} />
            </div>

            <LevelDots activeLevel={activeLevel} onSelect={onSelect} />
        </div>
    );
}

export default function EnglishLevels(): JSX.Element {
    const [activeLevel, setActiveLevel] = useState(0);
    const currentLevel = englishLevels[activeLevel];

    const showPreviousLevel = (): void => {
        setActiveLevel((current) =>
            current === 0 ? englishLevels.length - 1 : current - 1,
        );
    };

    const showNextLevel = (): void => {
        setActiveLevel((current) =>
            current === englishLevels.length - 1 ? 0 : current + 1,
        );
    };

    return (
        <section className="flex flex-col items-center gap-8 bg-amber-50 px-6 py-16 text-center text-black sm:px-10 lg:gap-12 lg:px-20 lg:py-24 xl:px-40">
            <h2 className="text-lg font-bold">Niveles</h2>

            <div className="w-full md:hidden">
                <LevelCarousel
                    activeLevel={activeLevel}
                    currentLevel={currentLevel}
                    onPrevious={showPreviousLevel}
                    onNext={showNextLevel}
                    onSelect={setActiveLevel}
                />
            </div>

            <div className="hidden w-full grid-cols-2 items-stretch gap-5 md:grid lg:grid-cols-3">
                {englishLevels.map((level) => (
                    <LevelCard key={level.level} level={level} />
                ))}
            </div>
        </section>
    );
}
