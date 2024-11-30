import ShimmerButton from '@/shadcn/magicui/shimmer-button';
import { Link } from '@inertiajs/react';
import { Navbar } from 'flowbite-react';
import ThemeSwitcher from './ThemeSwitcher';
import NavbarLink from './NavbarLink';

export default function NavbarComponent() {
    return (
        <Navbar
            className="fixed left-0 top-0 z-50 w-full bg-white/70 shadow-md backdrop-blur-lg"
            fluid
            rounded
        >
            <Navbar.Brand href={route('home')}>
                <div className="items-end md:flex">
                    <img
                        src="/images/remida_logo.webp"
                        className="mr-3 h-12 md:h-16 lg:h-20"
                        alt="ReMida Varese Logo"
                    />
                    <img
                        src="/images/altrementi-logo.webp"
                        className="mr-3 flex h-10 items-end dark:hidden"
                        alt="Altrementi Logo"
                    />
                    <img
                        src="/images/altrementi-logo-light.webp"
                        className="mr-3 hidden h-10 dark:inline-block"
                        alt="Altrementi Logo"
                    />
                </div>
            </Navbar.Brand>
            <div className="flex items-center md:order-2">
                <ThemeSwitcher />

                <Link href={route('contacts')} className="ml-5">
                    <ShimmerButton
                        className=""
                        shimmerSize="0.2rem"
                        background="rgba(185, 28, 28 , 1)"
                    >
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
                            Contatti
                        </span>
                    </ShimmerButton>
                </Link>

                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <NavbarLink
                    href={route('home')}
                    active={route().current('home')}
                >
                    Home
                </NavbarLink>
                <NavbarLink
                    href={route('about')}
                    active={route().current('about')}
                >
                    Chi Siamo
                </NavbarLink>
                <NavbarLink
                    href={route('expertise')}
                    active={route().current('expertise')}
                >
                    Cosa Facciamo
                </NavbarLink>
                <NavbarLink
                    href={route('collaborations')}
                    active={route().current('collaborations')}
                >
                    Collaborazioni
                </NavbarLink>
                <NavbarLink
                    href={route('events')}
                    active={route().current('events')}
                >
                    In Evidenza
                </NavbarLink>
                {/* <Link
                    href={route('home')}
                    className={`block py-2 pl-3 pr-4 font-bold text-black/90 transition-colors hover:text-white md:p-0 md:text-lg dark:text-slate-400 ${url === '/' ? 'active' : ''}`}
                    active={url === '/' ? true : false}
                >
                    Home
                </Link> */}
            </Navbar.Collapse>
        </Navbar>
    );
}
