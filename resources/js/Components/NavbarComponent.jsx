import ShimmerButton from '@/shadcn/magicui/shimmer-button';
import { Navbar } from 'flowbite-react';

export default function NavbarComponent() {
    return (
        <Navbar
            className="fixed left-0 top-0 z-50 w-full bg-white/40 shadow-md backdrop-blur-lg"
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
                    className="mr-3 h-12 md:h-16 lg:h-20"
                    alt="Altrementi Logo"
                />
            </Navbar.Brand>
            <div className="flex md:order-2">
                <ShimmerButton
                    className=""
                    shimmerSize="0.2rem"
                    background="rgba(185, 28, 28 , 1)"
                >
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        Contatti
                    </span>
                </ShimmerButton>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">Chi Siamo</Navbar.Link>
                <Navbar.Link href="#">Cosa Facciamo</Navbar.Link>
                <Navbar.Link href="#">In Evidenza</Navbar.Link>
                <Navbar.Link href="#">Dove Siamo</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
