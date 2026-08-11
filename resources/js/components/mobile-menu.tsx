import {
    Grid2X2,
    Home,
    Mail,
    MessageSquareQuote,
    UserRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { JSX } from 'react';
import { useEffect, useState } from 'react';
import { home } from '@/routes';

type MobileMenuItem = {
    label: string;
    href: string;
    icon: LucideIcon;
};

const homePath = home.url();

const menuItems: MobileMenuItem[] = [
    { label: 'Inicio', href: `${homePath}#inicio`, icon: Home },
    { label: 'Sobre mi', href: `${homePath}#sobre-mi`, icon: UserRound },
    { label: 'Cursos', href: `${homePath}#cursos`, icon: Grid2X2 },
    {
        label: 'Reviews',
        href: `${homePath}#reviews`,
        icon: MessageSquareQuote,
    },
    {
        label: 'Contacto',
        href: 'https://wa.me/351920069311?text=Hola%20Jedah%2C%20me%20interesan%20tus%20cursos!',
        icon: Mail,
    },
];

export default function MobileMenu(): JSX.Element {
    const [activeHash, setActiveHash] = useState('#home');

    useEffect(() => {
        const updateActiveHash = (): void => {
            setActiveHash(window.location.hash || '#home');
        };

        updateActiveHash();
        window.addEventListener('hashchange', updateActiveHash);

        return () => {
            window.removeEventListener('hashchange', updateActiveHash);
        };
    }, []);

    return (
        <nav
            aria-label="Mobile page navigation"
            className="fixed inset-x-0 bottom-0 z-50 border-t border-black bg-amber-50/95 px-2 pt-2 pb-[max(env(safe-area-inset-bottom),0.5rem)] shadow-[0_-10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xs md:hidden"
        >
            <div className="grid grid-cols-5">
                {menuItems.map(({ label, href, icon: Icon }) => {
                    const hash = href.slice(href.indexOf('#'));
                    const isActive = activeHash === hash;

                    return (
                        <a
                            key={href}
                            href={href}
                            aria-current={isActive ? 'page' : undefined}
                            className={`flex min-h-14 flex-col items-center justify-center gap-1 text-[0.6rem] font-semibold transition ${
                                isActive
                                    ? 'text-rose-500'
                                    : 'text-black/60 hover:text-rose-500'
                            }`}
                        >
                            <Icon className="h-5 w-5" aria-hidden="true" />
                            <span>{label}</span>
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}
