import { Head, Link } from '@inertiajs/react';
import { BookOpen } from 'lucide-react';
import type { JSX } from 'react';
import englishCourseImage from '@/assets/images/englishCourse.jpg';
import AboutMe from '@/assets/images/jedahAboutMe.jpg';
import mamiSquadImage from '@/assets/images/mami Squad.png';
import privateLessonsImage from '@/assets/images/privateLessons.jpg';
import readingClubImage from '@/assets/images/readingClub.png';
import speakingClubImage from '@/assets/images/speakingClub.png';
import logo from '@/assets/logo.svg';
import heroImage from '@/assets/mainImage.svg';
import bgWave from '@/assets/waves.svg';
import MobileMenu from '@/components/mobile-menu';
import Reviews from '@/components/reviews';
import {
    englishCourse,
    speakingClub,
    privateLessons,
    readingClub,
    mamiSquad,
    home,
} from '@/routes';

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
                <header
                    id="inicio"
                    className="relative scroll-mt-4 overflow-hidden"
                >
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

                    <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 md:flex-row md:items-center md:px-10 lg:gap-10 lg:px-20 lg:py-16">
                        <img
                            src={heroImage}
                            alt="Jedah cartoon with a globe maps and planes and a suitcase"
                            className="w-full max-w-70 sm:max-w-85 md:max-w-95 lg:max-w-115"
                        />

                        <div className="flex max-w-xl flex-col items-center gap-4 text-center md:items-start md:text-left lg:gap-6">
                            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                                Inglés que Conecta
                            </h1>

                            <span className="text-base sm:text-lg lg:text-xl">
                                Jedah crea experiencias adaptadas a ti. Un
                                espacio seguro donde hablar, equivocarte y
                                avanzar a tu propio ritmo.
                            </span>

                            <div className="pt-4 sm:pt-6 lg:pt-10">
                                <a
                                    className="inline-block rounded-lg bg-cyan-400 px-6 py-4 text-sm font-medium drop-shadow-lg hover:bg-cyan-500 sm:text-base"
                                    href="https://wa.me/351920069311?text=Hola%20Jedah%2C%20quiero%20empezar%20mi%20viaje%20con%20tus%20clases%2C%20me%20puedes%20dar%20mas%20informacion%20por%20favor%2C%20gracias"
                                >
                                    Empieza tu viaje aquí
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                <main>
                    {/* Quote */}
                    <section className="flex flex-col items-center gap-8 bg-rose-400 px-6 py-16 text-center text-white sm:px-10 lg:gap-15 lg:px-20 lg:py-24 xl:px-40">
                        <blockquote className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                            "Aprender otro idioma es tener una segunda alma."
                        </blockquote>

                        <div className="flex flex-col items-center gap-3 sm:gap-4">
                            <BookOpen className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />
                            <p className="text-xl sm:text-2xl">Charlemagne</p>
                            <p className="text-sm text-white/55 sm:text-base">
                                Emperador, figura histórica
                            </p>
                        </div>
                    </section>

                    {/* Sobre mí */}
                    <section
                        id="sobre-mi"
                        className="grid scroll-mt-6 items-center gap-8 bg-amber-50 px-6 py-16 text-black sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-20 lg:py-24 xl:px-40"
                    >
                        <div className="flex justify-center lg:justify-start">
                            <img
                                src={AboutMe}
                                alt="Photo of jedah"
                                className="w-full max-w-70 rounded-full sm:max-w-85 lg:max-w-95"
                            />
                        </div>

                        <div className="flex flex-col gap-5 text-center lg:text-left">
                            <p className="text-sm font-semibold tracking-wide text-rose-500 uppercase">
                                Sobre mí
                            </p>
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Soy Jedah, tu profe de inglés y compañera de
                                viaje en este proceso.
                            </h2>
                            <div className="flex flex-col gap-4 text-base leading-7 sm:text-lg">
                                <p>
                                    Creo espacios donde aprender inglés se
                                    siente cercano, claro y posible. Mis clases
                                    mezclan estructura, conversación y mucha
                                    paciencia para que puedas avanzar sin miedo
                                    a equivocarte.
                                </p>
                                <p>
                                    Como viajera, sé que un idioma abre puertas:
                                    te ayuda a pedir ayuda, contar tu historia,
                                    conectar con otras personas y vivir nuevas
                                    experiencias con más confianza. Por eso
                                    enseño inglés desde la vida real, con temas,
                                    ritmos y metas que tienen sentido para ti.
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* Products */}
                    <section id="cursos" className="scroll-mt-6">
                        <div>
                            <div className="grid w-full grid-cols-1 gap-6 px-4 py-10 sm:px-6 md:grid-cols-2 lg:gap-10 lg:px-20 lg:py-20">
                                <Link href={englishCourse()}>
                                    <div className="flex h-full w-full flex-col gap-5 rounded-3xl bg-white shadow-lg">
                                        <img
                                            src={englishCourseImage}
                                            alt="Ilustracion del curso de ingles"
                                            className="aspect-4/3 w-full rounded-t-3xl object-cover"
                                        />
                                        <div className="flex flex-col px-6 pb-6">
                                            <p className="text-xl font-bold">
                                                English Course
                                            </p>
                                            <p>
                                                Descubre nuestro curso de
                                                Inglés. Aprende de manera
                                                estructurada y efectiva, con
                                                clases dinámicas desde lo básico
                                                hasta la fluidez.
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                                <Link href={speakingClub()}>
                                    <div className="flex h-full w-full flex-col gap-5 rounded-3xl bg-white shadow-lg">
                                        <img
                                            src={speakingClubImage}
                                            alt="Ilustracion del speaking club"
                                            className="aspect-4/3 w-full rounded-t-3xl bg-pink-200 object-cover"
                                        />
                                        <div className="flex flex-col px-6 pb-6">
                                            <p className="text-xl font-bold">
                                                Speaking Club
                                            </p>
                                            <p>
                                                Es tu espacio para que tu inglés
                                                no se oxide. Aprende y practica
                                                a través de conversaciones en
                                                confianza, dinámicas y
                                                entretenidas.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="grid w-full grid-cols-1 gap-6 px-4 pb-10 sm:px-6 md:grid-cols-2 lg:gap-10 lg:px-20 lg:py-20 xl:grid-cols-3">
                                <Link href={privateLessons()}>
                                    <div className="flex h-full w-full flex-col justify-between gap-5 rounded-3xl bg-white shadow-lg">
                                        <img
                                            src={privateLessonsImage}
                                            alt="Ilustracion de private lessons"
                                            className="aspect-4/3 w-full rounded-t-3xl object-cover"
                                        />
                                        <div className="flex flex-col px-6 pb-6">
                                            <p className="text-xl font-bold">
                                                Private Lessons
                                            </p>
                                            <p>
                                                Sesiones 1:1 100%
                                                personalizadas. Material a
                                                medida y contacto directo
                                                conmigo entre clases, porque
                                                aprender online no significa
                                                aprender sola/o.
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    href={readingClub()}
                                    className="flex w-full"
                                >
                                    <div className="flex h-full w-full flex-col justify-between gap-5 rounded-3xl bg-white shadow-lg">
                                        <img
                                            src={readingClubImage}
                                            alt="Ilustracion de reading club"
                                            className="aspect-4/3 w-full rounded-t-3xl bg-yellow-100 object-cover"
                                        />
                                        <div className="flex flex-col px-6 pb-6">
                                            <p className="text-xl font-bold">
                                                Reading Club
                                            </p>
                                            <p>
                                                Escogemos un libro al mes para
                                                transformar tu inglés.
                                                Practicamos pronunciación y
                                                comprensión lectora mientras
                                                debatimos ideas conectadas a
                                                nuestra vida real.
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    href={mamiSquad()}
                                    className="flex w-full md:col-span-2 xl:col-span-1"
                                >
                                    <div className="flex h-full w-full flex-col justify-between gap-5 rounded-3xl bg-white shadow-lg">
                                        <img
                                            src={mamiSquadImage}
                                            alt="Ilustracion de mami squad"
                                            className="aspect-4/3 w-full rounded-t-3xl bg-rose-200 object-cover"
                                        />
                                        <div className="flex flex-col px-6 pb-6">
                                            <p className="text-xl font-bold">
                                                Mami Squad
                                            </p>
                                            <p>
                                                Suscripción mensual con talleres
                                                en vivo diseñados para potenciar
                                                el aprendizaje natural en la
                                                ventana crítica del idioma,
                                                donde tu hijo absorbe inglés sin
                                                esfuerzo.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>
                    <Reviews />

                    {/* Quote CTA */}
                    <section
                        id="contacto"
                        className="flex scroll-mt-6 flex-col items-center gap-8 bg-yellow-200 px-6 py-16 text-center text-black sm:px-10 lg:gap-12 lg:px-20 lg:py-24 xl:px-40"
                    >
                        <blockquote className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                            "El inglés no se aprende memorizando reglas, sino
                            conectando historias. Aquí, tu voz importa tanto
                            como tu gramática."
                        </blockquote>

                        <div>
                            <a
                                className="inline-block rounded-2xl bg-amber-50 px-6 py-3 drop-shadow-lg hover:bg-amber-400"
                                href="https://wa.me/351920069311?text=Hola%20Jedah%2C%20me%20interesan%20las%20clases%20contigo%21%20Me%20puedes%20dar%20mas%20informaci%C3%B3n%3F%20Gracias"
                            >
                                Escríbeme por WhatsApp
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
