import { Head, Link } from '@inertiajs/react';
import {
    Box,
    Calendar,
    Check,
    HandCoins,
    HandHeart,
    MapPin,
    MessageCircleHeart,
} from 'lucide-react';
import type { JSX } from 'react';
import speakingClubImage from '@/assets/images/speakingClub.png';
import logo from '@/assets/logo.svg';
import questionImage from '@/assets/question.svg';
import bgWave from '@/assets/waves.svg';
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
                        <img
                            src={speakingClubImage}
                            alt="Jedah cartoon with a globe maps and planes and a suitcase"
                            className="w-full max-w-70 rounded-full sm:max-w-85 md:max-w-95 lg:max-w-115"
                        />

                        <div className="flex max-w-xl flex-col items-center gap-4 text-center md:items-start md:text-left lg:gap-6">
                            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                                Speaking Club
                            </h1>

                            <span className="text-base sm:text-lg lg:text-xl">
                                Join our weekly Speaking Club to practice
                                real-world English in a relaxed, judgment-free
                                environment. Whether you are preparing for
                                travel, work, or exams, this is your safe space
                                to find your voice
                            </span>

                            <div className="pt-4 sm:pt-6 lg:pt-10">
                                <a
                                    className="inline-block rounded-lg bg-cyan-400 px-6 py-4 text-sm font-medium drop-shadow-lg hover:bg-cyan-500 sm:text-base"
                                    href="https://wa.me/351920069311?text=Hola%2C%20me%20interesa%20el%20Speaking%20Club%2C%20gracias"
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
                                    Reuniones grupales online en vivo
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <div className="flex flex-row gap-2">
                                    <Calendar />
                                    <p className="font-bold">¿Cuándo?</p>
                                </div>

                                <div className="flex flex-row gap-2">
                                    <p className="content-start text-left">
                                        Una vez a la semana, el horario se crea
                                        segun tu disponibilidad.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <div className="flex flex-row gap-2">
                                    <Box />
                                    <p className="font-bold">
                                        Discuciones Tematicas
                                    </p>
                                </div>

                                <div>
                                    <p className="content-start text-left">
                                        Cada semana elegimos un tema para
                                        discutir y guiar la conversación.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <div className="flex flex-row gap-2">
                                    <HandHeart />
                                    <p className="font-bold">¿Qué hacemos?</p>
                                </div>

                                <div>
                                    <p className="content-start text-left">
                                        Usamos juegos de roles, juegos para
                                        ayudarte a practicar de forma divertida.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <div className="flex flex-row gap-2">
                                    <MessageCircleHeart />
                                    <p className="font-bold">Feedback</p>
                                </div>

                                <div>
                                    <p className="content-start text-left">
                                        Comentarios amables y constructivos por
                                        parte de Jedah y de los compañeros para
                                        ayudarte a mejorar de forma natural.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <a
                                className="inline-block rounded-2xl bg-amber-50 px-6 py-3 drop-shadow-lg hover:bg-rose-400"
                                href="https://wa.me/351920069311?text=Hola%2C%20me%20interesa%20el%20Speaking%20Club%2C%20gracias"
                            >
                                Escríbeme
                            </a>
                        </div>
                    </section>
                    {/* Es para mi?*/}
                    <section className="flex flex-col items-center gap-8 bg-amber-50 px-6 py-16 text-center text-black sm:px-10 lg:gap-12 lg:px-20 lg:py-24 xl:px-40">
                        <h2 className="text-lg font-bold">
                            ¿Cómo saber si es para ti??
                        </h2>
                        <div className="flex flex-col items-start gap-5 px-5">
                            <div className="flex flex-col items-center gap-5">
                                <img
                                    className="md:size-80"
                                    src={questionImage}
                                    alt="Looking for somenting ore question image"
                                />
                                <ul className="flex flex-col">
                                    <li className="felx-row flex gap-2">
                                        <Check />{' '}
                                        <p>
                                            Perfecto para personas que estan en
                                            un nivel intermedio y quienes algo
                                            más que un libro y gramatica
                                        </p>
                                    </li>
                                    <li className="felx-row flex gap-2">
                                        <Check />{' '}
                                        <p>
                                            Increible para profesionales que
                                            necesitan mejorar la fluidez en
                                            reuniones
                                        </p>
                                    </li>
                                    <li className="felx-row flex gap-2">
                                        <Check />{' '}
                                        <p>
                                            Ideal para viajeros que quieren
                                            sentirse mas seguros en otros paises
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <a
                                className="inline-block rounded-2xl bg-rose-200 px-6 py-3 drop-shadow-lg hover:bg-rose-400"
                                href="https://wa.me/351920069311?text=Jedah.%20quiero%20unirme%20al%20speaking%20club%2C%20como%20lo%20hago%3F"
                            >
                                Es para mi!
                            </a>
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
                                        Solo $40.000 clp
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
                                        <Check /> <p>4 reuniones mensuales</p>
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
                                href="https://wa.me/351920069311?text=Jedah.%20quiero%20unirme%20al%20speaking%20club%2C%20como%20lo%20hago%3F"
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
