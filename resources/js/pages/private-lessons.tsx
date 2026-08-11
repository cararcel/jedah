import { Head, Link } from '@inertiajs/react';
import {
    BriefcaseBusiness,
    Check,
    HandCoins,
    HandHeart,
    Plane,
    Rocket,
    Target,
} from 'lucide-react';
import type { JSX } from 'react';
import conversationImage from '@/assets/conversation.svg';
import onlineImage from '@/assets/online.svg';
import MobileMenu from '@/components/mobile-menu';
import logo from '@/assets/logo.svg';
import questionImage from '@/assets/question.svg';
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
                            src={speakingClubImage}
                            alt="Jedah cartoon with a globe maps and planes and a suitcase"
                            className="w-full max-w-70 rounded-full sm:max-w-85 md:max-w-95 lg:max-w-115"
                        /> */}

                        <div className="flex max-w-xl flex-col items-center gap-4 text-center md:items-start md:text-left lg:gap-6">
                            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                                Private Lessons
                            </h1>

                            <span className="text-base sm:text-lg lg:text-xl">
                                Tu clase, tus reglas. Tú decides cuándo, cómo y
                                qué aprender. Un programa 100% personalizado
                                para alcanzar tus objetivos en el menor tiempo
                                posible.
                            </span>

                            <div className="pt-4 sm:pt-6 lg:pt-10">
                                <a
                                    className="inline-block rounded-lg bg-yellow-200 px-6 py-4 text-sm font-medium drop-shadow-lg hover:bg-yellow-400 sm:text-base"
                                    href="#"
                                >
                                    Quiero comenzar
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                <main>
                    {/* Que se hace en las clases privadas*/}
                    <section className="flex flex-col items-center gap-8 bg-rose-300 px-6 py-16 text-center text-black sm:px-10 lg:gap-12 lg:px-20 lg:py-24 xl:px-40">
                        <h2 className="text-lg font-bold">
                            Elige las clases privadas si quieres:
                        </h2>
                        <div className="flex flex-col items-start gap-5 px-5">
                            <div className="flex flex-col items-start gap-1">
                                <div className="flex flex-row gap-2">
                                    <Target />
                                    <p className="font-bold">
                                        Preparación de Exámenes
                                    </p>
                                </div>

                                <p className="content-start text-left">
                                    Cambridge (FCE, CAE), IELTS, TOEFL. Estudia
                                    con un plan enfocado en aprobar.
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <div className="flex flex-row gap-2">
                                    <BriefcaseBusiness />
                                    <p className="font-bold">
                                        Inglés de Negocios
                                    </p>
                                </div>

                                <div className="flex flex-row gap-2">
                                    <p className="content-start text-left">
                                        Reuniones, emails, presentaciones y
                                        negociaciones. Mejora tu inglés
                                        profesional rápidamente.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <div className="flex flex-row gap-2">
                                    <Plane />
                                    <p className="font-bold">
                                        Inglés para Viajar
                                    </p>
                                </div>

                                <div>
                                    <p className="content-start text-left">
                                        Aeropuertos, hoteles, restaurantes y
                                        situaciones reales. Empieza a disfrutar
                                        de tus viajes.
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
                                    <Rocket />
                                    <p className="font-bold">
                                        Progreso Acelerado
                                    </p>
                                </div>

                                <div>
                                    <p className="content-start text-left">
                                        Si tienes poco tiempo y necesitas
                                        resultados rápidos, la atención
                                        individual es tu mejor inversión.
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
                    {/* Como funciona*/}
                    <section className="flex flex-col items-center gap-8 bg-amber-50 px-6 py-16 text-center text-black sm:px-10 lg:gap-12 lg:px-20 lg:py-24 xl:px-40">
                        <h2 className="text-lg font-bold">¿Cómo funciona?</h2>
                        <div className="flex flex-col items-start gap-5 px-5">
                            <div className="flex flex-col items-center gap-5">
                                <img
                                    src={conversationImage}
                                    alt="Looking for somenting ore question image"
                                />
                                <ul className="flex flex-col">
                                    <li className="flex flex-col gap-2">
                                        <p className="font-bold">
                                            Paso 1: Cuéntame tu objetivo
                                        </p>
                                        <p>
                                            Reserva una charla gratuita de 15
                                            minutos. Me cuentas qué necesitas y
                                            evaluamos tu nivel actual.
                                        </p>
                                    </li>
                                    <li className="flex flex-col gap-2">
                                        <p className="font-bold">
                                            Paso 2: Recibe tu plan personalizado
                                        </p>
                                        <p>
                                            Diseño un programa a medida para ti,
                                            con materiales y ejercicios
                                            adaptados a tus metas.
                                        </p>
                                    </li>
                                    <li className="flex flex-col gap-2">
                                        <p className="font-bold">
                                            Paso 3: Empieza cuando quieras
                                        </p>
                                        <p>
                                            Sin fechas de inicio ni compromisos
                                            de meses. Reserva cada sesión según
                                            tu disponibilidad.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h2 className="text-lg font-bold">
                            ¿Qué Incluye Cada Sesión?
                        </h2>
                        <div className="flex flex-col items-start gap-5 px-5">
                            <div className="flex flex-col items-start gap-5">
                                <img
                                    src={onlineImage}
                                    alt="Looking for somenting ore question image"
                                />
                                <ul className="list-disc space-y-2 text-left">
                                    <li className="">
                                        <p className="">
                                            Clase 100% personalizada. Sin
                                            temario genérico. Trabajamos
                                            exactamente lo que tú necesitas.
                                        </p>
                                    </li>
                                    <li className="">
                                        <p>
                                            Corrección en tiempo real. Feedback
                                            inmediato sobre pronunciación,
                                            gramática y vocabulario.
                                        </p>
                                    </li>
                                    <li className="">
                                        <p>
                                            Seguimiento entre clases. Tareas
                                            opcionales y revisión por correo
                                            para que no pierdas ritmo.
                                        </p>
                                    </li>
                                    <li className="">
                                        <p>
                                            Grabación de la sesión. Repasa tu
                                            clase cuando quieras (si lo deseas).
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/* CTA*/}
                    <section className="flex flex-col items-center gap-8 bg-amber-50 px-6 py-16 text-center text-black sm:px-10 lg:gap-12 lg:px-20 lg:py-24 xl:px-40">
                        <h2 className="text-lg font-bold">Precio y Paquetes</h2>
                        <div className="flex flex-col gap-4">
                            {/* CARD*/}
                            <div className="rounded-2xl border-2 border-solid border-teal-400 bg-white px-7 py-5">
                                <p className="pb-2 text-left font-bold">
                                    Sesion Individual
                                </p>
                                <div className="pl-4">
                                    <ul className="list-disc space-y-1 text-left">
                                        <li>Máxima flexibilidad</li>
                                        <li>Reserva cuando quieras</li>
                                        <li>30€ / clase (60 min)</li>
                                        <li>
                                            Ideal para necesidades puntuales.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="rounded-2xl border-2 border-solid border-yellow-400 bg-white px-7 py-5">
                                <p className="pb-2 text-left font-bold">
                                    Paquete 5 Clases
                                </p>
                                <div className="pl-4">
                                    <ul className="list-disc space-y-1 text-left">
                                        <li>Ahorra un 10%</li>
                                        <li>Validez: 3 meses</li>
                                        <li>135€ total (27€ / clase)</li>
                                        <li>Ideal para clases quincenales</li>
                                        <li>Seguimiento entre sesiones</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="rounded-2xl border-2 border-solid border-lime-400 bg-white px-7 py-5">
                                <p className="pb-2 text-left font-bold">
                                    Paquete 10 Clases{' '}
                                </p>
                                <div className="pl-4">
                                    <ul className="list-disc space-y-1 text-left">
                                        <li>Ahorra un 20%</li>
                                        <li>Validez: 3 meses</li>
                                        <li>240€ total (24€ / clase)</li>
                                        <li>Ideal para progreso constante</li>
                                        <li>Seguimiento entre sesiones</li>
                                        <li>Prioridad en horarios</li>
                                    </ul>
                                </div>
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
                <MobileMenu />
            </div>
        </>
    );
}
