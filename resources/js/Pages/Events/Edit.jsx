import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create({ auth, event }) {
    const { data, setData, post, errors, processing, clearErrors } = useForm({
        image: '',
        title: event.data.title || '',
        status: event.data.status || '',
        description: event.data.description || '',
        _method: 'PUT',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        clearErrors();
        post(route('event.update', event.data.id), {
            ...data,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Modifica l'evento "{event.data.title}"
                    </h2>
                </div>
            }
        >
            <Head title="Creazione Evento" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <form
                            onSubmit={onSubmit}
                            className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800"
                            encType="multipart/form-data"
                        >
                            {event.data.image_url && (
                                <div>
                                    <img
                                        src={event.data.image_url}
                                        alt={event.data.title}
                                        className="mb-5 w-64 rounded-lg shadow-lg"
                                    />
                                </div>
                            )}
                            <div>
                                <InputLabel
                                    htmlFor="event_image_path"
                                    value="Immagine Evento (Max 2MB)"
                                />
                                <TextInput
                                    id="event_image_path"
                                    type="file"
                                    name="image"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData('image', e.target.files[0])
                                    }
                                />
                                <InputError
                                    message={errors.image}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="event_title"
                                    value="Titolo Evento"
                                />

                                <TextInput
                                    id="event_title"
                                    type="text"
                                    name="name"
                                    value={data.title}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData('title', e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.title}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="event_description"
                                    value="Descrizione Evento"
                                />

                                <CKEditor
                                    editor={ClassicEditor}
                                    data={data.description}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setData('description', data);
                                    }}
                                />
                                <InputError
                                    message={errors.description}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="event_status"
                                    value="Status Evento"
                                />

                                <SelectInput
                                    name="status"
                                    id="event_status"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData('status', e.target.value)
                                    }
                                >
                                    <option value="">Seleziona lo Stato</option>
                                    <option
                                        selected={
                                            event.data.status === 'published'
                                        }
                                        value="published"
                                    >
                                        Pubblicato
                                    </option>
                                    <option
                                        selected={
                                            event.data.status === 'unpublished'
                                        }
                                        value="unpublished"
                                    >
                                        Non Pubblicato
                                    </option>
                                </SelectInput>

                                <InputError
                                    message={errors.status}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4 text-right">
                                <Link
                                    href={route('event.index')}
                                    className="mr-2 rounded bg-gray-100 px-3 py-1 text-gray-800 shadow transition-all hover:bg-gray-200"
                                >
                                    Annulla
                                </Link>
                                <button
                                    disabled={processing}
                                    className="rounded bg-emerald-500 px-3 py-1 text-white shadow transition-all hover:bg-emerald-600"
                                >
                                    Aggiorna
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
