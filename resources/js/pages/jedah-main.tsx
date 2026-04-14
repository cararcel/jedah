import { Head } from '@inertiajs/react';
import { BookOpen, Smile } from 'lucide-react';
import type { JSX } from 'react';
import englishCourseImage from '@/assets/images/englishCourse.jpg';
import speakingClubImage from '@/assets/images/speakingClub.png';
import privateLessonsImage from '@/assets/images/privateLessons.jpg';
import readingClubImage from '@/assets/images/readingClub.png';
import mamiSquadImage from '@/assets/images/mami Squad.png';
import logo from '@/assets/logo.svg';
import heroImage from '@/assets/mainImage.svg';
import bgWave from '@/assets/waves.svg';

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

            <div className="min-h-screen bg-amber-50">
                <header className="relative overflow-hidden">
                    <img
                        src={bgWave}
                        alt="colorful wave background"
                        className="absolute z-0 h-full w-1/3 object-cover"
                    />
                    <nav className="relative z-10 flex items-center justify-between px-16 py-4 text-black">
                        <div>
                            <img
                                src={logo}
                                alt="logo learn english and travel, once upon a traveller"
                                className="h-30 w-auto"
                            />
                        </div>
                        <ul className="flex flex-row gap-10">
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
                    <div className="relative z-10 flex flex-row items-center gap-10 px-50 py-16">
                        <img
                            src={heroImage}
                            alt="Jedah cartoon with a globe maps and planes and a suitcase"
                            className="h-xl w-auto"
                        />
                        <div className="ml-16 flex max-w-xl flex-col items-center gap-6 text-center">
                            <h1 className="text-6xl font-bold">
                                Inglés que Conecta
                            </h1>
                            <span className="text-xl">
                                Jedah crea experiencias adaptadas a ti. Un
                                espacio seguro donde hablar, equivocarte y
                                avanzar a tu propio ritmo.
                            </span>
                            <div className="pt-10">
                                <a
                                    className="rounded-lg bg-cyan-400 p-6 drop-shadow-lg hover:bg-cyan-500"
                                    href={'#'}
                                >
                                    Empieza tu viaje aquí
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="flex flex-col items-center gap-15 bg-rose-400 px-80 py-30 text-center text-white">
                        <blockquote className="text-5xl font-extrabold">
                            "Aprender otro idioma es tener una segunda alma."
                        </blockquote>
                        <div className="flex flex-col items-center gap-4">
                            <BookOpen className="h-16 w-16" />
                            <p className="text-2xl">Charlemagne</p>
                            <p className="text-white/55">
                                Emperador, figura histórica
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="grid h-auto w-full grid-cols-2 gap-10 px-20 py-20">
                            <div className="flex h-auto w-full flex-col items-center gap-5 rounded-3xl bg-white shadow-lg">
                                <img
                                    src={englishCourseImage}
                                    alt="Ilustracion del curso de ingles"
                                    className="h-auto w-full rounded-t-3xl object-cover"
                                />
                                <div className="items-left flex flex-col px-6 pb-6">
                                    <p className="text-xl font-bold">
                                        English Course
                                    </p>
                                    <p>
                                        Descubre nuestro curso de Inglés.
                                        Aprende de manera estructurada y
                                        efectiva, con clases dinámicas desde lo
                                        basico hasta la fluidez
                                    </p>
                                </div>
                            </div>
                            <div className="flex h-auto w-full flex-col items-center gap-5 rounded-3xl bg-white shadow-lg">
                                <img
                                    src={speakingClubImage}
                                    alt="Ilustracion del curso de ingles"
                                    className="h-auto w-full rounded-t-3xl bg-pink-200 object-cover"
                                />
                                <div className="items-left flex flex-col px-6 pb-6">
                                    <p className="text-xl font-bold">
                                        Speaking Club{' '}
                                    </p>
                                    <p>
                                        Es tu espacio para que tu ingles no se
                                        oxide. Aprende y practica a traves de
                                        conversaciones en confianza, dinamicas y
                                        entretenidas.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid h-auto w-full grid-cols-3 gap-10 px-20 py-20">
                            <div className="flex h-auto w-full flex-col items-center gap-5 rounded-3xl bg-white shadow-lg">
                                <img
                                    src={privateLessonsImage}
                                    alt="Ilustracion del curso de ingles"
                                    className="h-auto w-full rounded-t-3xl object-cover"
                                />
                                <div className="items-left flex flex-col px-6 pb-6">
                                    <p className="text-xl font-bold">
                                        Private Lessons{' '}
                                    </p>
                                    <p>
                                        Sesiones 1:1 100% personalizadas.
                                        Material a medida y contacto directo
                                        conmigo entre clases, porque aprender
                                        online no significa aprender sola/o.
                                    </p>
                                </div>
                            </div>
                            <div className="flex h-auto w-full flex-col items-center gap-5 rounded-3xl bg-white shadow-lg">
                                <img
                                    src={readingClubImage}
                                    alt="Ilustracion del curso de ingles"
                                    className="h-auto w-full rounded-t-3xl bg-yellow-100 object-cover"
                                />
                                <div className="items-left flex flex-col px-6 pb-6">
                                    <p className="text-xl font-bold">
                                        Reading Club{' '}
                                    </p>
                                    <p>
                                        Escogemos un libro al mes para
                                        transformar tu inglés. Practicamos
                                        prinunciación y comprensión lectora
                                        mientras debatimos ideas conectadas a
                                        nuestra vida real
                                    </p>
                                </div>
                            </div>
                            <div className="flex h-auto w-full flex-col items-center gap-5 rounded-t-3xl bg-white shadow-lg">
                                <img
                                    src={mamiSquadImage}
                                    alt="Ilustracion del curso de ingles"
                                    className="h-auto w-full rounded-t-3xl bg-rose-200 object-cover"
                                />
                                <div className="items-left flex flex-col px-6 pb-6">
                                    <p className="text-xl font-bold">
                                        Mami Squad{' '}
                                    </p>
                                    <p>
                                        Suscripción mensual con talleres en vivo
                                        deseñados para potenciar el aprendizaje
                                        naural en la ventana critica del idioma,
                                        donde tu hijo absorbe ingles sin
                                        esfuerzo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-10 px-20 py-20">
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-3xl font-bold">Testimonials</p>
                            <p className="text-center">Que dicen de mi</p>
                        </div>
                        <div className="grid grid-cols-3 gap-10">
                            <div className="item-start flex flex-col justify-between gap-5 rounded-3xl bg-cyan-200 p-6 shadow-lg">
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
                            <div className="item-start flex flex-col justify-between gap-5 rounded-3xl bg-rose-200 p-6 shadow-lg">
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
                            <div className="item-start flex flex-col justify-between gap-5 rounded-3xl bg-yellow-200 p-6 shadow-lg">
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
                    <div className="flex flex-col items-center gap-15 bg-yellow-200 px-80 py-30 text-center text-black">
                        <blockquote className="text-5xl font-extrabold">
                            "El inglés no se aprende memorizando reglas, sino
                            conectando historias. Aquí, tu voz importa tanto
                            como tu gramática."
                        </blockquote>
                        <div className="">
                            <a
                                className="rounded-2xl bg-amber-50 px-6 py-3 drop-shadow-lg hover:bg-amber-400"
                                href={'#'}
                            >
                                Escríbeme
                            </a>
                        </div>
                    </div>
                </main>

                <footer></footer>
            </div>
        </>
    );
}
