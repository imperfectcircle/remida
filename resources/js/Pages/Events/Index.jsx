import Pagination from '@/Components/Pagination';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import THeadSorting from '@/Components/THeadSorting';
import { EVENT_STATUS_CLASS_MAP, EVENT_STATUS_TEXT_MAP } from '@/Constants';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, router, Link, usePage } from '@inertiajs/react';

export default function Index({ auth, events, queryParams = null }) {
    const { flash } = usePage().props;
    queryParams = queryParams || {};
    const searchFieldChanged = (title, value) => {
        if (value) {
            queryParams[title] = value;
        } else {
            delete queryParams[title];
        }

        router.get(route('event.index'), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== 'Enter') return;

        searchFieldChanged(name, e.target.value);
    };

    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === 'asc') {
                queryParams.sort_direction = 'desc';
            } else {
                queryParams.sort_direction = 'asc';
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = 'asc';
        }

        router.get(route('event.index'), queryParams);
    };

    const deleteEvent = (event) => {
        if (!window.confirm("Sei sicuro di voler eliminare l'evento?")) {
            return;
        }
        router.delete(route('event.destroy', event.id));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Eventi
                    </h2>
                    <Link
                        href={route('event.create')}
                        className="rounded bg-emerald-500 px-3 py-2 text-white shadow transition-all hover:bg-emerald-600"
                    >
                        Crea Nuovo Evento
                    </Link>
                </div>
            }
        >
            <Head title="Eventi" />

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
                                            <THeadSorting
                                                sortChanged={sortChanged}
                                                sortField={
                                                    queryParams.sort_field
                                                }
                                                name="id"
                                                sortDirection={
                                                    queryParams.sort_direction
                                                }
                                            >
                                                ID
                                            </THeadSorting>
                                            <THeadSorting
                                                sortChanged={sortChanged}
                                                sortField={
                                                    queryParams.sort_field
                                                }
                                                name="title"
                                                sortDirection={
                                                    queryParams.sort_direction
                                                }
                                            >
                                                TITOLO
                                            </THeadSorting>
                                            <THeadSorting
                                                sortChanged={sortChanged}
                                                sortField={
                                                    queryParams.sort_field
                                                }
                                                name="description"
                                                sortDirection={
                                                    queryParams.sort_direction
                                                }
                                            >
                                                DESCRIZIONE
                                            </THeadSorting>
                                            <THeadSorting
                                                sortChanged={sortChanged}
                                                sortField={
                                                    queryParams.sort_field
                                                }
                                                name="status"
                                                sortDirection={
                                                    queryParams.sort_direction
                                                }
                                            >
                                                STATUS
                                            </THeadSorting>
                                            <THeadSorting
                                                sortChanged={sortChanged}
                                                sortField={
                                                    queryParams.sort_field
                                                }
                                                name="created_at"
                                                sortDirection={
                                                    queryParams.sort_direction
                                                }
                                            >
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
                                    <thead className="border-b-2 border-gray-500 bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                                        <tr className="text-nowrap">
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3">
                                                <TextInput
                                                    className="w-full"
                                                    defaultValue={
                                                        queryParams.title
                                                    }
                                                    placeholder="Titolo Evento"
                                                    onBlur={(e) =>
                                                        searchFieldChanged(
                                                            'title',
                                                            e.target.value,
                                                        )
                                                    }
                                                    onKeyPress={(e) =>
                                                        onKeyPress('title', e)
                                                    }
                                                />
                                            </th>
                                            <th className="px-3 py-3">
                                                <SelectInput
                                                    className="w-full"
                                                    defaultValue={
                                                        queryParams.status
                                                    }
                                                    onChange={(e) =>
                                                        searchFieldChanged(
                                                            'status',
                                                            e.target.value,
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        Seleziona lo Status
                                                    </option>
                                                    <option value="published">
                                                        Pubblicato
                                                    </option>
                                                    <option value="unpublished">
                                                        Non Pubblicato
                                                    </option>
                                                </SelectInput>
                                            </th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-2"></th>
                                        </tr>
                                    </thead>
                                    {events.data.length === 0 && (
                                        <tbody>
                                            <tr>
                                                <td
                                                    colSpan="7"
                                                    className="py-5 text-center text-xl"
                                                >
                                                    Non Sono Ancora Presenti
                                                    Eventi
                                                </td>
                                            </tr>
                                        </tbody>
                                    )}
                                    {events && (
                                        <tbody>
                                            {events.data.map((event) => (
                                                <tr
                                                    key={event.id}
                                                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                                                >
                                                    <td className="px-3 py-3">
                                                        {event.id}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {event.title}
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {event.description.substring(
                                                            0,
                                                            50,
                                                        )}{' '}
                                                        ...
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {
                                                            <span
                                                                className={`rounded px-2 py-1 text-white ${
                                                                    EVENT_STATUS_CLASS_MAP[
                                                                        event
                                                                            .status
                                                                    ]
                                                                }`}
                                                            >
                                                                {
                                                                    EVENT_STATUS_TEXT_MAP[
                                                                        event
                                                                            .status
                                                                    ]
                                                                }
                                                            </span>
                                                        }
                                                    </td>
                                                    <td className="px-3 py-3">
                                                        {event.created_at}
                                                    </td>
                                                    <td className="text-nowrap px-3 py-3">
                                                        <Link
                                                            href={route(
                                                                'event.edit',
                                                                event.id,
                                                            )}
                                                            className="mx-1 font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                        >
                                                            Modifica
                                                        </Link>
                                                        <button
                                                            onClick={(ev) =>
                                                                deleteEvent(
                                                                    event,
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
                            <Pagination links={events.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
