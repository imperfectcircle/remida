import ShimmerButton from '@/shadcn/magicui/shimmer-button';
import { Link, usePage } from '@inertiajs/react';
import { Navbar } from 'flowbite-react';
import ThemeSwitcher from './ThemeSwitcher';

export default function NavbarComponent() {
    const { url } = usePage();
    return (
        <Navbar
            className="fixed left-0 top-0 z-50 w-full bg-white/70 shadow-md backdrop-blur-lg"
            fluid
            rounded
        >
            <Navbar.Brand href="https://flowbite-react.com">
                <div className="md:flex">
                    <img
                        src="/images/remida_logo.webp"
                        className="mr-3 h-12 md:h-16 lg:h-20"
                        alt="ReMida Varese Logo"
                    />
                    <img
                        src="/images/altrementi-logo.webp"
                        className="mr-3 h-9 md:h-16 lg:h-20 dark:hidden"
                        alt="Altrementi Logo"
                    />
                    <img
                        src="/images/altrementi-logo-light.webp"
                        className="mr-3 hidden h-9 md:h-16 lg:h-20 dark:inline-block"
                        alt="Altrementi Logo"
                    />
                </div>
            </Navbar.Brand>
            <div className="flex items-center md:order-2">
                <ThemeSwitcher />
                <form action={route('contacts')} className="ml-5">
                    <ShimmerButton
                        className=""
                        shimmerSize="0.2rem"
                        background="rgba(185, 28, 28 , 1)"
                    >
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
                            Contatti
                        </span>
                    </ShimmerButton>
                </form>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    href={route('home')}
                    active={url === '/' ? true : false}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link
                    href={route('about')}
                    active={url === '/chi-siamo' ? true : false}
                >
                    Chi Siamo
                </Navbar.Link>
                <Navbar.Link
                    href={route('expertise')}
                    active={url === '/cosa-facciamo' ? true : false}
                >
                    Cosa Facciamo
                </Navbar.Link>
                <Navbar.Link
                    href={route('events')}
                    active={url === '/eventi' ? true : false}
                >
                    In Evidenza
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
