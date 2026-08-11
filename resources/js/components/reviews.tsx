import { ChevronLeft, ChevronRight, Smile } from 'lucide-react';
import type { JSX } from 'react';
import { useState } from 'react';

type Testimonial = {
    name: string;
    quote: string;
    colorClass: string;
    desktopClassName?: string;
};

const testimonials: Testimonial[] = [
    {
        name: 'Camila C',
        colorClass: 'bg-cyan-200',
        quote: 'Recomiendo mucho las clases con la Jedah. Ella es muy divertida, simpática y muy cercana y eso hace que uno se sienta muy cómoda y pueda bajar la guardia y aprender tranquila. Te quiero mucho Jedah jaja! Nunca dejes de ser buena pa la talla y cercana porque eso a mí me ayuda mucho con la confianza en mí misma! Tomen clases con ella, no se van a arrepentir y así evitan botar plata con otra genteeeeeee! Muchas gracias porque contigo he aprendido lo que nunca he podido aprender con nadie más, ni siquiera en el colegio jajaja! Sigo contigo ❤️ !',
    },
    {
        name: 'Paula R',
        colorClass: 'bg-rose-200',
        quote: 'Las clases del Reading Club están maravillosas, me encantan 💕. Leer un libro en Inglés ha sido un desafío enorme pero a la vez enriquecedor, me ha permitido aprender más vocabulario y también disfrutar la lectura. Compartir con otras personas sobre lo que leemos ha sido una forma más entretenida de ir aprendiendo y avanzando con el inglés, especialmente con el Speaking.',
    },
    {
        name: 'Camila A',
        colorClass: 'bg-yellow-200',
        desktopClassName: 'md:col-span-2 xl:col-span-1',
        quote: 'Amo la personalidad de la Jedah para todo, estoy con ella en el mami squad y en el reading club y espero los días que nos juntamos. Es un relajo para mi, que podamos hablar, descargarnos y todo en ingles. A veces se me olvida que la Jedah es la profe hasta que me corrige una palabra jajaja. Pero eso, si estan buscando alguien que les de confianza, es la Jedah. Quiero recomendar especialmente el mami squad, no es solo un acompañamiento para que le ayudemos a nuestros bebes a hablar inglés, es tambien una comunidad de personas que está para ti en todo.',
    },
];

export default function Reviews(): JSX.Element {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const currentTestimonial = testimonials[activeTestimonial];

    const showPreviousTestimonial = (): void => {
        setActiveTestimonial((current) =>
            current === 0 ? testimonials.length - 1 : current - 1,
        );
    };

    const showNextTestimonial = (): void => {
        setActiveTestimonial((current) =>
            current === testimonials.length - 1 ? 0 : current + 1,
        );
    };

    return (
        <section id="reviews" className="scroll-mt-6">
            <div className="flex flex-col items-center gap-10 px-4 py-10 sm:px-6 lg:px-20 lg:py-20">
                <div className="flex flex-col items-center gap-4">
                    <p className="text-3xl font-bold">Reviews</p>
                    <p className="text-center">Qué dicen de mí</p>
                </div>

                <div className="flex w-full flex-col gap-5 md:hidden">
                    <div
                        className={`flex min-h-96 flex-col justify-between gap-5 rounded-3xl p-6 shadow-sm drop-shadow-lg ${currentTestimonial.colorClass}`}
                    >
                        <p>{currentTestimonial.quote}</p>
                        <div className="flex flex-row items-center gap-5">
                            <Smile />
                            <p>{currentTestimonial.name}</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={showPreviousTestimonial}
                            aria-label="Show previous testimonial"
                            className="flex size-11 items-center justify-center rounded-full bg-white text-black shadow-sm"
                        >
                            <ChevronLeft
                                className="size-5"
                                aria-hidden="true"
                            />
                        </button>

                        <div className="flex items-center gap-2">
                            {testimonials.map((testimonial, index) => (
                                <button
                                    key={testimonial.name}
                                    type="button"
                                    onClick={() => setActiveTestimonial(index)}
                                    aria-label={`Show testimonial ${index + 1}`}
                                    aria-current={
                                        activeTestimonial === index
                                            ? 'true'
                                            : undefined
                                    }
                                    className={`size-2.5 rounded-full transition ${
                                        activeTestimonial === index
                                            ? 'bg-rose-500'
                                            : 'bg-black/25'
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={showNextTestimonial}
                            aria-label="Show next testimonial"
                            className="flex size-11 items-center justify-center rounded-full bg-white text-black shadow-sm"
                        >
                            <ChevronRight
                                className="size-5"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>

                <div className="hidden w-full md:grid md:grid-cols-2 md:gap-6 lg:gap-10 xl:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className={`flex flex-col justify-between gap-5 rounded-3xl p-6 shadow-sm drop-shadow-lg ${testimonial.colorClass} ${testimonial.desktopClassName ?? ''}`}
                        >
                            <p>{testimonial.quote}</p>
                            <div className="flex flex-row gap-5">
                                <Smile />
                                <p>{testimonial.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
