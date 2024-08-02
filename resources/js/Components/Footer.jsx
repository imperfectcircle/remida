import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="grid h-fit grid-cols-1 text-white md:grid-cols-3">
            <div className="bg-red-800 p-10">
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
                <p>c/o Chiostro di Voltorre</p>
                <p> Gavirate - Varese</p>
            </div>
            <div className="grid grid-cols-1 place-items-center bg-red-900 p-10 md:col-span-2 md:grid-cols-2">
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">Menù</h2>
                    <Link href={route('home')}>Home</Link>
                    <Link href={route('home')}>Chi siamo</Link>
                    <Link href={route('home')}>Cosa Facciamo</Link>
                    <Link href={route('home')}>In Evidenza</Link>
                    <Link href={route('home')}>Dove Siamo</Link>
                    <Link href={route('home')}>Contatti</Link>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">Policies</h2>
                    <Link href={route('home')}>Privacy Policy</Link>
                    <Link href={route('home')}>Cookie Policy</Link>
                </div>
            </div>
        </footer>
    );
}
