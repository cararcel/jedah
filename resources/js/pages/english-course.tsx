import { Head, Link } from '@inertiajs/react';
import {
    Calendar,
    Check,
    Clock,
    HandCoins,
    MapPin,
    MenuIcon,
    Rocket,
} from 'lucide-react';
import type { JSX } from 'react';
import logo from '@/assets/logo.svg';
import englishCourseImage from '@/assets/images/englishCourse.jpg';
import bgWave from '@/assets/waves.svg';
import { home } from '@/routes';

export default function JedahMain(): JSX.Element {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-amber-50 dark:text-black">
                <header className="relative overflow-hidden">
                    <img
                        src={bgWave}
                        alt="colorful wave background"
                        className="absolute top-0 left-0 z-0 h-full w-2/3 object-cover sm:w-1/2 lg:w-1/3"
                    />

                    <nav className="relative z-10 flex items-center justify-between px-4 py-4 text-black sm:px-6 md:px-10 lg:px-16">
                        <Link href={home()} aria-label="Go to Jedah main page">
                            <img
                                src={logo}
                                alt="logo learn english and travel, once upon a traveller"
                                className="h-16 w-auto sm:h-20 md:h-24"
                            />
                        </Link>

                        {/* Mobile menu */}
                        <button className="md:hidden">
                            <MenuIcon className="h-6 w-6" />
                        </button>

                        {/* Desktop menu */}
                        <ul className="hidden gap-6 md:flex lg:gap-10">
                            <li className="rounded-lg px-4 py-2 font-medium hover:bg-orange-100">
                                <a href="#sobre-mi">Sobre mí</a>
                            </li>
                            <li className="rounded-lg px-4 py-2 font-medium hover:bg-orange-100">
                                <a href="#">Contactame</a>
                            </li>
                            <li className="rounded-lg px-4 py-2 font-medium hover:bg-orange-100">
                                <a href="#">Espacios</a>
                            </li>
                            <li className="rounded-lg px-4 py-2 font-medium hover:bg-orange-100">
                                <a href="#">Reviews</a>
                            </li>
                        </ul>
                    </nav>
                    {/* Hero English Course*/}
                    <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 md:flex-row md:items-center md:px-10 lg:gap-10 lg:px-20 lg:py-16">
                        {/* <img
                            src={englishCourseImage}
                            alt="Jedah cartoon with a globe maps and planes and a suitcase"
                            className="w-full max-w-70 rounded-full sm:max-w-85 md:max-w-95 lg:max-w-115"
                        />*/}

                        <div className="flex max-w-xl flex-col items-center gap-4 text-center md:items-start md:text-left lg:gap-6">
                            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                                English Course
                            </h1>

                            <span className="text-base sm:text-lg lg:text-xl">
                                Clases en online en vivo, estructurado por
                                niveles segun el marco comun europeo.
                            </span>

                            <div className="pt-4 sm:pt-6 lg:pt-10">
                                <a
                                    className="inline-block rounded-lg bg-cyan-400 px-6 py-4 text-sm font-medium drop-shadow-lg hover:bg-cyan-500 sm:text-base"
                                    href="#"
                                >
                                    Quiero comenzar
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                <main>
                    {/* Modalidad del curso*/}
                    <section className="flex flex-col items-center gap-8 bg-rose-300 px-6 py-16 text-center text-black sm:px-10 lg:gap-12 lg:px-20 lg:py-24 xl:px-40">
                        <h2 className="text-lg font-bold">
                            Modalidad del Curso
                        </h2>
                        <div className="flex flex-col items-start gap-5 px-5">
                            <div className="flex flex-col items-start gap-1">
                                <div className="flex flex-row gap-2">
                                    <MapPin />
                                    <p className="font-bold">¿Dónde?</p>
                                </div>

                                <p className="content-start text-left">
                                    Clases grupales online en vivo
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <div className="flex flex-row gap-2">
                                    <Calendar />
                                    <p className="font-bold">¿Cuándo?</p>
                                </div>

                                <div className="flex flex-row gap-2">
                                    <p className="content-start text-left">
                                        2 veces por semana, el horario se crea
                                        segun tu disponibilidad.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <div className="flex flex-row gap-2">
                                    <Clock />
                                    <p className="content-start font-bold">
                                        ¿Cuánto tiempo?
                                    </p>
                                </div>

                                <div>
                                    <p className="content-start text-left">
                                        Cada clase dura 1 hora y el curso
                                        completo 3 meses
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <div className="flex flex-row gap-2">
                                    <Rocket />
                                    <p className="font-bold">
                                        ¿Cual es mi nivel?
                                    </p>
                                </div>

                                <div>
                                    <p className="content-start text-left">
                                        Tu nivel es asignado despues de una
                                        entrevista
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <a
                                className="inline-block rounded-2xl bg-amber-50 px-6 py-3 drop-shadow-lg hover:bg-rose-400"
                                href="#"
                            >
                                Escríbeme
                            </a>
                        </div>
                    </section>
                    {/* Descubre tu nivel*/}
                    <section className="flex flex-col items-center gap-8 bg-amber-50 px-6 py-16 text-center text-black sm:px-10 lg:gap-12 lg:px-20 lg:py-24 xl:px-40">
                        <h2 className="text-lg font-bold">Descubre tu nivel</h2>
                        <div className="flex flex-col items-start gap-5 px-5">
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex flex-row gap-2">
                                    <Rocket />
                                    <p>
                                        ¿No estas seguro cuál es tu nivel de
                                        inglés?
                                    </p>
                                </div>

                                <p className="text-justify">
                                    No te preocupes, durante una conversación
                                    uno a uno evaluaremos tu nivel de inglés:
                                </p>
                                <ul className="flex flex-col">
                                    <li className="felx-row flex gap-2">
                                        <Check /> <p>Situaciones cotidianas</p>
                                    </li>
                                    <li className="felx-row flex gap-2">
                                        <Check /> <p>Experiencias pasadas</p>
                                    </li>
                                    <li className="felx-row flex gap-2">
                                        <Check /> <p>Opiniones y planes</p>
                                    </li>
                                    <li className="felx-row flex gap-2">
                                        <Check />
                                        <p>Resolveremos dudas en tiempo real</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <a
                                className="inline-block rounded-2xl bg-rose-200 px-6 py-3 drop-shadow-lg hover:bg-rose-400"
                                href="#"
                            >
                                descubre tu nivel
                            </a>
                        </div>
                    </section>
                    {/* Niveles*/}
                    <section className="flex flex-col items-center gap-8 bg-amber-50 px-6 py-16 text-center text-black sm:px-10 lg:gap-12 lg:px-20 lg:py-24 xl:px-40">
                        <h2 className="text-lg font-bold">Niveles</h2>
                        <div className="flex flex-col items-start gap-5 px-5 lg:grid lg:grid-cols-3">
                            {/* card*/}
                            <div className="flex h-full flex-col rounded-2xl bg-rose-400 p-5">
                                {' '}
                                <div className="flex flex-row justify-between p-2">
                                    <p className="text-2xl font-bold">
                                        Nivel A1
                                    </p>
                                    <p>Principiante</p>
                                </div>
                                <div className="flex h-full flex-col rounded-2xl bg-amber-50 p-3 text-left">
                                    <div className="flex flex-col gap-3 p-2">
                                        <p className="font-bold">Vocabulario</p>
                                        <ul className="list-disc pl-2">
                                            <li>Saludos y despedidas.</li>
                                            <li>
                                                Números, colores, días de la
                                                semana, meses, estaciones.
                                            </li>
                                            <li>
                                                Familia y relaciones básicas.
                                            </li>
                                            <li>
                                                Objetos cotidianos (ropa,
                                                comidas, muebles).
                                            </li>
                                            <li>
                                                Artículos indefinidos (a, an) y
                                                definidos (the).
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="text-auto flex flex-col rounded-2xl bg-amber-50 p-3">
                                        <p className="font-bold">Gramática</p>
                                        <ul className="list-disc pl-2">
                                            <li>
                                                Verbo "to be" (afirmativo,
                                                negativo, interrogativo).
                                            </li>
                                            <li>
                                                Presente simple (afirmaciones y
                                                negaciones simples).
                                            </li>
                                            <li>
                                                Pronombres personales y
                                                adjetivos posesivos.
                                            </li>
                                            <li>
                                                Artículos definidos e
                                                indefinidos.
                                            </li>
                                            <li>
                                                Plurales regulares e
                                                irregulares.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="felx flex-col rounded-2xl bg-amber-50 p-3 text-left">
                                        <p className="font-bold">Habilidades</p>
                                        <ul className="list-disc pl-2">
                                            <li>
                                                Presentarse y dar información
                                                personal básica.
                                            </li>
                                            <li>
                                                Comprender instrucciones
                                                simples.
                                            </li>
                                            <li>
                                                Preguntar y responder sobre
                                                datos personales (nombre, edad,
                                                nacionalidad).
                                            </li>
                                            <li>
                                                Práctica oral continua para
                                                mejorar la fluidez.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* card*/}
                            <div className="flex h-full flex-col rounded-2xl bg-teal-400 p-5">
                                {' '}
                                <div className="flex flex-row justify-between p-2">
                                    <p className="text-2xl font-bold">
                                        Nivel A2
                                    </p>
                                    <p>Elemental</p>
                                </div>
                                <div className="flex h-full flex-col rounded-2xl bg-amber-50 p-3 text-left">
                                    <div className="flex flex-col gap-3 p-2">
                                        <p className="font-bold">Vocabulario</p>
                                        <ul className="list-disc pl-2">
                                            <li>
                                                Descripción de lugares (casa,
                                                ciudad, tiendas).
                                            </li>
                                            <li>
                                                Rutinas diarias (trabajo, ocio,
                                                escuela).
                                            </li>
                                            <li>Comida, salud y clima.</li>
                                            <li>
                                                Vocabulario relacionado con
                                                transportes y viajes.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="felx flex-col rounded-2xl bg-amber-50 p-3 text-left">
                                        <p className="font-bold">Gramática</p>
                                        <ul className="list-disc pl-2">
                                            <li>
                                                Presente perfecto (experiencias
                                                pasadas).
                                            </li>
                                            <li>
                                                Pasado continuo (acciones en
                                                progreso en el pasado).
                                            </li>
                                            <li>
                                                Futuro con "will" y "going to".
                                            </li>
                                            <li>Condicionales.</li>
                                            <li>Gerundios e infinitivos.</li>
                                        </ul>
                                    </div>
                                    <div className="felx flex-col rounded-2xl bg-amber-50 p-3 text-left">
                                        <p className="font-bold">Habilidades</p>
                                        <ul className="list-disc pl-2">
                                            <li>
                                                Relatar experiencias y hablar de
                                                planes y metas.
                                            </li>
                                            <li>
                                                Participar en conversaciones
                                                sobre temas de interés.
                                            </li>
                                            <li>
                                                Expresar opiniones y pedir/dar
                                                consejos.
                                            </li>
                                            <li>
                                                Práctica continua de speaking
                                                para mejorar la fluidez.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* card*/}
                            <div className="flex flex-col rounded-2xl bg-yellow-400 p-5">
                                {' '}
                                <div className="flex flex-row justify-between p-2">
                                    <p className="text-2xl font-bold">
                                        Nivel B1
                                    </p>
                                    <p>Intermedio</p>
                                </div>
                                <div className="flex h-full flex-col rounded-2xl bg-amber-50 p-3 text-left">
                                    <div className="flex flex-col gap-3 p-2">
                                        <p className="font-bold">Vocabulario</p>
                                        <ul className="list-disc pl-2">
                                            <li>
                                                Viajes, turismo, trabajo y
                                                tecnología.
                                            </li>
                                            <li>
                                                Hobbies, deportes y
                                                entretenimiento.
                                            </li>
                                            <li>
                                                Servicios públicos (bancos,
                                                correos, estaciones de tren).
                                            </li>
                                            <li>
                                                Emergencias y problemas comunes.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="felx flex-col rounded-2xl bg-amber-50 p-3 text-left">
                                        <p className="font-bold">Gramática</p>
                                        <ul className="list-disc pl-2">
                                            <li>
                                                Presente perfecto (experiencias
                                                pasadas).
                                            </li>
                                            <li>
                                                Pasado continuo (acciones en
                                                progreso en el pasado).
                                            </li>
                                            <li>
                                                Futuro con "will" y "going to".
                                            </li>
                                            <li>Condicionales.</li>
                                            <li>Gerundios e infinitivos.</li>
                                        </ul>
                                    </div>
                                    <div className="felx flex-col rounded-2xl bg-amber-50 p-3 text-left">
                                        <p className="font-bold">Habilidades</p>
                                        <ul className="list-disc pl-2">
                                            <li>
                                                Relatar experiencias y hablar de
                                                planes y metas.
                                            </li>
                                            <li>
                                                Participar en conversaciones
                                                sobre temas de interés.
                                            </li>
                                            <li>
                                                Expresar opiniones y pedir/dar
                                                consejos.
                                            </li>
                                            <li>
                                                Práctica continua de speaking
                                                para mejorar la fluidez.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* card*/}
                            <div className="flex h-full flex-col rounded-2xl bg-lime-400 p-5">
                                {' '}
                                <div className="flex flex-row justify-between p-2">
                                    <p className="text-2xl font-bold">
                                        Nivel B2
                                    </p>
                                    <p>Intermedio Alto</p>
                                </div>
                                <div className="flex h-full flex-col rounded-2xl bg-amber-50 p-3 text-left">
                                    <div className="flex flex-col gap-3 p-2">
                                        <p className="font-bold">Vocabulario</p>
                                        <ul className="list-disc pl-2">
                                            <li>
                                                Opiniones y debates sobre medio
                                                ambiente, cultura y sociedad.
                                            </li>
                                            <li>
                                                Salud y bienestar, ciencia y
                                                tecnología.
                                            </li>
                                            <li>
                                                Educación y desarrollo
                                                profesional.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="felx flex-col rounded-2xl bg-amber-50 p-3 text-left">
                                        <p className="font-bold">Gramática</p>
                                        <ul className="list-disc pl-2">
                                            <li>
                                                Voz pasiva (presente, pasado,
                                                futuro).
                                            </li>
                                            <li>
                                                Reported speech (estilo
                                                indirecto).
                                            </li>
                                            <li>Condicionales.</li>
                                            <li>Modales.</li>
                                            <li>
                                                Uso avanzado de tiempos
                                                verbales.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="felx flex-col rounded-2xl bg-amber-50 p-3 text-left">
                                        <p className="font-bold">Habilidades</p>
                                        <ul className="list-disc pl-2">
                                            <li>
                                                Mantener conversaciones fluidas
                                                sobre temas complejos.
                                            </li>
                                            <li>
                                                Comprender artículos y textos
                                                más extensos.
                                            </li>
                                            <li>
                                                Participar en discusiones y
                                                defender puntos de vista.
                                            </li>
                                            <li>
                                                Práctica continua de speaking
                                                para fortalecer la comunicación.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* card*/}
                            <div className="flex h-full flex-col rounded-2xl bg-purple-400 p-5">
                                {' '}
                                <div className="flex flex-row justify-between p-2">
                                    <p className="text-2xl font-bold">
                                        Nivel C1
                                    </p>
                                    <p>Avanzado</p>
                                </div>
                                <div className="flex h-full flex-col rounded-2xl bg-amber-50 p-3 text-left">
                                    <div className="flex flex-col gap-3 p-2">
                                        <p className="font-bold">Vocabulario</p>
                                        <ul className="list-disc pl-2">
                                            <li>
                                                Términos abstractos y temas
                                                especializados.
                                            </li>
                                            <li>
                                                Lenguaje académico, profesional
                                                y técnico.
                                            </li>
                                            <li>
                                                Expresiones idiomáticas y
                                                coloquiales.{' '}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="felx flex-col rounded-2xl bg-amber-50 p-3 text-left">
                                        <p className="font-bold">Gramática</p>
                                        <ul className="list-disc pl-2">
                                            <li>
                                                Estructuras condicionales
                                                complejas.
                                            </li>
                                            <li>Tiempos perfectos.</li>
                                            <li>
                                                Uso preciso de partículas y
                                                conectores.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="felx flex-col rounded-2xl bg-amber-50 p-3 text-left">
                                        <p className="font-bold">Habilidades</p>
                                        <ul className="list-disc pl-2">
                                            <li>
                                                Fluidez y precisión en textos
                                                orales y escritos largos.
                                            </li>
                                            <li>
                                                Comprensión de diferentes
                                                registros del lenguaje.
                                            </li>
                                            <li>
                                                Habilidad para argumentar,
                                                negociar y persuadir en diversos
                                                contextos.
                                            </li>
                                            <li>
                                                Énfasis en la práctica continua
                                                de speaking para un dominio
                                                completo.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* CTA*/}
                    <section className="flex flex-col items-center gap-8 bg-amber-50 px-6 py-16 text-center text-black sm:px-10 lg:gap-12 lg:px-20 lg:py-24 xl:px-40">
                        <h2 className="text-lg font-bold">
                            Precio y Logistica
                        </h2>
                        <div className="flex flex-col items-start gap-5 px-5">
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex flex-row gap-2">
                                    <HandCoins />
                                    <p className="items-center text-2xl">
                                        Solo $65.000 clp
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="items-center text-xs">
                                        (o el equivalente en tu moneda)
                                    </p>
                                </div>

                                <p className="text-justify">Qué incluye?</p>
                                <ul className="flex flex-col">
                                    <li className="felx-row flex gap-2">
                                        <Check /> <p>8 clases mensuales</p>
                                    </li>
                                    <li className="felx-row flex gap-2">
                                        <Check /> <p>Material y actividades</p>
                                    </li>
                                    <li className="felx-row flex gap-2">
                                        <Check /> <p>Grupo de apoyo</p>
                                    </li>
                                    <li className="felx-row flex gap-2">
                                        <Check />
                                        <p>Seguimiento</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <a
                                className="inline-block rounded-2xl bg-rose-200 px-6 py-3 drop-shadow-lg hover:bg-rose-400"
                                href="#"
                            >
                                Inscribete hoy!
                            </a>
                        </div>
                    </section>
                </main>

                <footer className="flex flex-col items-center gap-2 bg-amber-50 px-6 py-10 text-center text-sm text-black/55 sm:px-10 lg:px-20">
                    <p className="font-semibold text-black">Jedah Castillo</p>
                    <p>Once Upon a Traveller</p>
                    <p>Copyright &copy; 2026</p>
                    <p>Hecho con &#9829; por Camila Arce</p>
                </footer>
            </div>
        </>
    );
}
