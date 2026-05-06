import { Head, Link } from '@inertiajs/react';
import { BookOpen, MenuIcon, Smile } from 'lucide-react';
import type { JSX } from 'react';
import englishCourseImage from '@/assets/images/englishCourse.jpg';
import mamiSquadImage from '@/assets/images/mami Squad.png';
import privateLessonsImage from '@/assets/images/privateLessons.jpg';
import readingClubImage from '@/assets/images/readingClub.png';
import speakingClubImage from '@/assets/images/speakingClub.png';
import logo from '@/assets/logo.svg';
import heroImage from '@/assets/mainImage.svg';
import bgWave from '@/assets/waves.svg';
import { englishCourse, home } from '@/routes';

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
                                <a href="#">Sobre mi</a>
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
                                    href="#"
                                >
                                    Empieza tu viaje aquí
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                <main>
                    <div className="flex flex-col items-center gap-8 bg-rose-400 px-6 py-16 text-center text-white sm:px-10 lg:gap-15 lg:px-20 lg:py-24 xl:px-40">
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
                    </div>

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
                                            Descubre nuestro curso de Inglés.
                                            Aprende de manera estructurada y
                                            efectiva, con clases dinámicas desde
                                            lo básico hasta la fluidez.
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <a href="">
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
                                            Es tu espacio para que tu inglés no
                                            se oxide. Aprende y practica a
                                            través de conversaciones en
                                            confianza, dinámicas y entretenidas.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="grid w-full grid-cols-1 gap-6 px-4 pb-10 sm:px-6 md:grid-cols-2 lg:gap-10 lg:px-20 lg:py-20 xl:grid-cols-3">
                            <a href="">
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
                                            Sesiones 1:1 100% personalizadas.
                                            Material a medida y contacto directo
                                            conmigo entre clases, porque
                                            aprender online no significa
                                            aprender sola/o.
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <a href="" className="flex w-full">
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
                                            transformar tu inglés. Practicamos
                                            pronunciación y comprensión lectora
                                            mientras debatimos ideas conectadas
                                            a nuestra vida real.
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <a
                                href=""
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
                                            Suscripción mensual con talleres en
                                            vivo diseñados para potenciar el
                                            aprendizaje natural en la ventana
                                            crítica del idioma, donde tu hijo
                                            absorbe inglés sin esfuerzo.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-10 px-4 py-10 sm:px-6 lg:px-20 lg:py-20">
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-3xl font-bold">Testimonials</p>
                            <p className="text-center">Qué dicen de mí</p>
                        </div>

                        {/* MOBILE → only 1 card */}
                        <div className="w-full md:hidden">
                            <div className="flex flex-col justify-between gap-5 rounded-3xl bg-cyan-200 p-6 shadow-sm drop-shadow-lg">
                                <p>
                                    Recomiendo mucho las clases con la Jedah.
                                    Ella es muy divertida, simpática y muy
                                    cercana y eso hace que uno se sienta muy
                                    cómoda y pueda bajar la guardia y aprender
                                    tranquila. Te quiero mucho Jedah jaja! Nunca
                                    dejes de ser buena pa la talla y cercana
                                    porque eso a mí me ayuda mucho con la
                                    confianza en mí misma! Tomen clases con
                                    ella, no se van a arrepentir y así evitan
                                    botar plata con otra genteeeeeee! Muchas
                                    gracias porque contigo he aprendido lo que
                                    nunca he podido aprender con nadie más, ni
                                    siquiera en el colegio jajaja! Sigo contigo
                                    ❤️ !
                                </p>
                                <div className="flex flex-row gap-5">
                                    <Smile />
                                    <p>Camila C</p>
                                </div>
                            </div>
                        </div>

                        {/* DESKTOP → full grid */}
                        <div className="hidden w-full md:grid md:grid-cols-2 md:gap-6 lg:gap-10 xl:grid-cols-3">
                            <div className="flex flex-col justify-between gap-5 rounded-3xl bg-cyan-200 p-6 shadow-sm drop-shadow-lg">
                                <p>
                                    Recomiendo mucho las clases con la Jedah.
                                    Ella es muy divertida, simpática y muy
                                    cercana y eso hace que uno se sienta muy
                                    cómoda y pueda bajar la guardia y aprender
                                    tranquila. Te quiero mucho Jedah jaja! Nunca
                                    dejes de ser buena pa la talla y cercana
                                    porque eso a mí me ayuda mucho con la
                                    confianza en mí misma! Tomen clases con
                                    ella, no se van a arrepentir y así evitan
                                    botar plata con otra genteeeeeee! Muchas
                                    gracias porque contigo he aprendido lo que
                                    nunca he podido aprender con nadie más, ni
                                    siquiera en el colegio jajaja! Sigo contigo
                                    ❤️ !
                                </p>
                                <div className="flex flex-row gap-5">
                                    <Smile />
                                    <p>Camila C</p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between gap-5 rounded-3xl bg-rose-200 p-6 shadow-sm drop-shadow-lg">
                                <p>
                                    Las clases del Reading Club están
                                    maravillosas, me encantan 💕. Leer un libro
                                    en Inglés ha sido un desafío enorme pero a
                                    la vez enriquecedor, me ha permitido
                                    aprender más vocabulario y también disfrutar
                                    la lectura. Compartir con otras personas
                                    sobre lo que leemos ha sido una forma más
                                    entretenida de ir aprendiendo y avanzando
                                    con el inglés, especialmente con el
                                    Speaking.
                                </p>
                                <div className="flex flex-row gap-5">
                                    <Smile />
                                    <p>Paula R</p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between gap-5 rounded-3xl bg-yellow-200 p-6 shadow-sm drop-shadow-lg md:col-span-2 xl:col-span-1">
                                <p>
                                    Amo la personalidad de la Jedah para todo,
                                    estoy con ella en el mami squad y en el
                                    reading club y espero los días que nos
                                    juntamos. Es un relajo para mi, que podamos
                                    hablar, descargarnos y todo en ingles. A
                                    veces se me olvida que la Jedah es la profe
                                    hasta que me corrige una palabra jajaja.
                                    Pero eso, si estan buscando alguien que les
                                    de confianza, es la Jedah. Quiero recomendar
                                    especialmente el mami squad, no es solo un
                                    acompañamiento para que le ayudemos a
                                    nuestros bebes a hablar inglés, es tambien
                                    una comunidad de personas que está para ti
                                    en todo.
                                </p>
                                <div className="flex flex-row gap-5">
                                    <Smile />
                                    <p>Camila A</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-8 bg-yellow-200 px-6 py-16 text-center text-black sm:px-10 lg:gap-12 lg:px-20 lg:py-24 xl:px-40">
                        <blockquote className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                            "El inglés no se aprende memorizando reglas, sino
                            conectando historias. Aquí, tu voz importa tanto
                            como tu gramática."
                        </blockquote>

                        <div>
                            <a
                                className="inline-block rounded-2xl bg-amber-50 px-6 py-3 drop-shadow-lg hover:bg-amber-400"
                                href="#"
                            >
                                Escríbeme
                            </a>
                        </div>
                    </div>
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
