import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create({ auth, image }) {
    const { data, setData, post, errors, processing, clearErrors } = useForm({
        image: '',
        title: image.data.title || '',
        _method: 'PUT',
    });

    console.log(image);

    const onSubmit = (e) => {
        e.preventDefault();
        clearErrors();
        post(route('image.update', image.data.id), {
            ...data,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Modifica l'immagine "{image.data.title}"
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
                            {image.data.src && (
                                <div>
                                    <img
                                        src={image.data.src}
                                        alt={image.data.title}
                                        className="mb-5 w-64 rounded-lg shadow-lg"
                                    />
                                </div>
                            )}
                            <div>
                                <InputLabel
                                    htmlFor="event_image_path"
                                    value="Immagine (Max 2MB)"
                                />
                                <TextInput
                                    id="image_path"
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
                                <InputLabel htmlFor="title" value="Titolo" />

                                <TextInput
                                    id="title"
                                    type="text"
                                    name="title"
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
                            <div className="mt-4 text-right">
                                <Link
                                    href={route('image.index')}
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
