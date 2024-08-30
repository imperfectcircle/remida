import ButtonLink from '@/Components/ButtonLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-5 overflow-hidden bg-white p-5 shadow-sm sm:rounded-lg">
                        <div className="space-y-5 rounded-lg border border-gray-400 bg-gray-300 p-6 text-center text-gray-900 shadow-lg">
                            <h2 className="text-2xl">Eventi</h2>
                            <p>Crea, Aggiorna ed Elimina Eventi</p>
                            <ButtonLink href={route('event.index')}>
                                Vai
                            </ButtonLink>
                        </div>
                        <div className="space-y-5 rounded-lg border border-gray-400 bg-gray-300 p-6 text-center text-gray-900 shadow-lg">
                            <h2 className="text-2xl">Gallery</h2>
                            <p>
                                Crea, Aggiorna ed Elimina Immagini dalla Gallery
                            </p>
                            <ButtonLink href={route('image.index')}>
                                Vai
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
