import { Head, Link } from '@inertiajs/react';
import {
    Calendar,
    Check,
    Clock,
    HandCoins,
    MapPin,
    Rocket,
} from 'lucide-react';
import type { JSX } from 'react';
import logo from '@/assets/logo.svg';
import bgWave from '@/assets/waves.svg';
import EnglishLevels from '@/components/english-levels';
import MobileMenu from '@/components/mobile-menu';
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

            <div className="min-h-screen bg-amber-50 pb-24 md:pb-0 dark:text-black">
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

                        {/* Desktop menu */}
                        <ul className="hidden gap-6 md:flex lg:gap-10">
                            <li className="rounded-lg px-4 py-2 font-medium hover:bg-orange-100">
                                <a href="#sobre-mi">Sobre mi</a>
                            </li>
                            <li className="rounded-lg px-4 py-2 font-medium hover:bg-orange-100">
                                <a href="https://wa.me/351920069311?text=Hola%20Jedah%2C%20me%20interesan%20tus%20cursos!">
                                    Contactame
                                </a>
                            </li>
                            <li className="rounded-lg px-4 py-2 font-medium hover:bg-orange-100">
                                <a href="#cursos">Espacios</a>
                            </li>
                            <li className="rounded-lg px-4 py-2 font-medium hover:bg-orange-100">
                                <a href="#reviews">Reviews</a>
                            </li>
                        </ul>
                    </nav>
                    {/* Hero English Course*/}
                    <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 md:flex-row md:items-center md:px-10 lg:gap-10 lg:px-20 lg:py-16">
                        <div className="m-auto flex max-w-xl flex-col gap-4 md:items-start md:text-left lg:gap-6">
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
                                    href="https://wa.me/351920069311?text=Hola%2C%20quiero%20comenzar%20con%20el%20curso%20de%20ingl%C3%A9s%21%20gracias"
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
                                href="https://wa.me/351920069311?text=Hola%2C%20quiero%20comenzar%20con%20el%20curso%20de%20ingl%C3%A9s%21%20gracias"
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
                                href="https://wa.me/351920069311?text=quiero%20saber%20mi%20nivel%20de%20ingl%C3%A9s%2C%20como%20lo%20hago%3F%20gracias"
                            >
                                descubre tu nivel
                            </a>
                        </div>
                    </section>
                    <EnglishLevels />
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
                                href="https://wa.me/351920069311?text=Hola%2C%20quiero%20inscribirme%20al%20curso%20de%20ingl%C3%A9s%2C%20gracias"
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
                <MobileMenu />
            </div>
        </>
    );
}
