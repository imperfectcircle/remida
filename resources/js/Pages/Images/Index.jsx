import Pagination from '@/Components/Pagination';
import THeadSorting from '@/Components/THeadSorting';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, router, Link, usePage } from '@inertiajs/react';

export default function Index({ auth, images }) {
    const { flash } = usePage().props;
    const deleteEvent = (image) => {
        if (!window.confirm("Sei sicuro di voler eliminare l'immagine?")) {
            return;
        }
        router.delete(route('image.destroy', image.id));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Immagini
                    </h2>
                    <Link
                        href={route('image.create')}
                        className="rounded bg-emerald-500 px-3 py-2 text-white shadow transition-all hover:bg-emerald-600"
                    >
                        Aggiungi Nuova Immagine
                    </Link>
                </div>
            }
        >
            <Head title="Immagini" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        {flash.message && (
                            <div className="m-5 rounded-lg bg-emerald-500 p-5 text-center text-white">
                                {flash.message}
                            </div>
                        )}
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-auto">
                                <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                                    <thead className="border-b-2 border-gray-500 bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                                        <tr className="text-nowrap">
                                            <THeadSorting sortable={false}>
                                                ID
                                            </THeadSorting>
                                            <THeadSorting sortable={false}>
                                                IMMAGINE
                                            </THeadSorting>
                                            <THeadSorting sortable={false}>
                                                TITOLO
                                            </THeadSorting>
                                            <THeadSorting sortable={false}>
                                                CREATO IL
                                            </THeadSorting>
                                            <THeadSorting
                                                sortable={false}
                                                className="text-center"
                                            >
                                                AZIONI
                                            </THeadSorting>
                                        </tr>
                                    </thead>
                                    {images.data.length === 0 && (
                                        <tbody>
                                            <tr>
                                                <td
                                                    colSpan="6"
                                                    className="py-5 text-center text-xl"
                                                >
                                                    Non Sono Ancora Presenti
                                                    Immagini
                                                </td>
                                            </tr>
                                        </tbody>
                                    )}
                                    {images && (
                                        <tbody>
                                            {images.data.map((image) => (
                                                <tr
                                                    key={image.id}
                                                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                                                >
                                                    <td className="px-3 py-3">
                                                        {image.id}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        <img
                                                            className="h-20 w-20 object-cover"
                                                            src={image.src}
                                                        />
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {image.title}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {image.created_at}
                                                    </td>
                                                    <td className="text-nowrap px-3 py-3">
                                                        <Link
                                                            href={route(
                                                                'image.edit',
                                                                image.id,
                                                            )}
                                                            className="mx-1 font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                        >
                                                            Modifica
                                                        </Link>
                                                        <button
                                                            onClick={(ev) =>
                                                                deleteEvent(
                                                                    image,
                                                                )
                                                            }
                                                            className="mx-1 font-medium text-red-600 hover:underline dark:text-red-500"
                                                        >
                                                            Elimina
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    )}
                                </table>
                            </div>
                            <Pagination links={images.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
