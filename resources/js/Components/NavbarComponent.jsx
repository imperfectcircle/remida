import ShimmerButton from '@/shadcn/magicui/shimmer-button';
import { Link, usePage } from '@inertiajs/react';
import { Navbar } from 'flowbite-react';

export default function NavbarComponent() {
    const { url } = usePage();
    return (
        <Navbar
            className="fixed left-0 top-0 z-50 w-full bg-white/70 shadow-md backdrop-blur-lg"
            fluid
            rounded
        >
            <Navbar.Brand href="https://flowbite-react.com">
                <img
                    src="/images/remida_logo.webp"
                    className="mr-3 h-12 md:h-16 lg:h-20"
                    alt="ReMida Varese Logo"
                />
                <img
                    src="/images/altrementi_logo.webp"
                    className="mr-3 h-9 md:h-16 lg:h-20"
                    alt="Altrementi Logo"
                />
            </Navbar.Brand>
            <div className="flex md:order-2">
                <form action={route('contacts')}>
                    <ShimmerButton
                        className=""
                        shimmerSize="0.2rem"
                        background="rgba(185, 28, 28 , 1)"
                    >
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
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
