import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

export default function Create({ auth }) {
    const { flash } = usePage().props;
    const { data, setData, post, reset, errors, processing } = useForm({
        image: '',
        title: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('image.store'), {
            onSuccess: () => {
                reset('image', 'title');
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Aggiungi una Nuova Collaborazione
                    </h2>
                </div>
            }
        >
            <Head title="Creazione Immagine" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        {flash.message && (
                            <div className="m-5 rounded-lg bg-emerald-500 p-5 text-center text-white">
                                {flash.message}
                            </div>
                        )}
                        <form
                            onSubmit={onSubmit}
                            className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800"
                            encType="multipart/form-data"
                        >
                            <div>
                                <InputLabel
                                    htmlFor="image_path"
                                    value="Immagine Collaborazione (Max 2MB)"
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
                                <InputLabel
                                    htmlFor="image_title"
                                    value="Titolo Collaborazione"
                                />

                                <TextInput
                                    id="image_title"
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
                                    type="submit"
                                    className="rounded bg-emerald-500 px-3 py-1 text-white shadow transition-all hover:bg-emerald-600"
                                >
                                    Crea
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
