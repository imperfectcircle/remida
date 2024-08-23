import PublicLayout from '@/Layouts/PublicLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { variants } from '@/Constants';
import { motion } from 'framer-motion';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function Laboratories() {
    const { flash } = usePage().props;
    const {
        data,
        setData,
        post,
        processing,
        errors,
        wasSuccessful,
        clearErrors,
        reset,
    } = useForm({
        name: '',
        email: '',
        phone: '',
        school: '',
        message: '',
        privacy: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.schools'), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                reset('name', 'email', 'phone', 'school', 'message', 'privacy');
                clearErrors();
            },
        });
    };

    return (
        <>
            <Head>
                <title>
                    REMIDA VARESE - Innoviamo con creatività | Laboratori per le
                    Scuole
                </title>
                <meta name="description" content=""></meta>
                <link
                    rel="canonical"
                    href="https://remidavarese.it/laboratori-per-scuole"
                ></link>
            </Head>

            <PublicLayout>
                <section className="laboratories grid h-screen grid-cols-1 bg-black/60 p-5 md:mt-[100px] md:grid-cols-2 md:p-0 lg:mt-0">
                    <div className="flex items-center justify-center text-white">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            className="w-9/12 text-3xl md:text-6xl"
                        >
                            <span className="font-bold">
                                Laboratori per le Scuole
                            </span>
                            <br />
                            <span className="font-semibold text-gray-400">
                                Lorem Ipsum.
                            </span>
                            <br />
                            <span className="text-xl md:text-2xl">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Laudantium dolores delectus
                                quaerat harum vitae quam neque blanditiis
                                officiis earum ipsa iusto repudiandae
                                recusandae, quasi sit facilis reprehenderit
                                voluptas, modi architecto!
                            </span>
                        </motion.h1>
                    </div>
                </section>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    className="grid grid-cols-1 bg-transparent md:grid-cols-2 dark:bg-slate-600"
                >
                    <div className="rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-center text-white">
                        <h2 className="mb-10 text-6xl">Nido</h2>
                        <p className="text-2xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Asperiores, ad voluptatibus eum impedit culpa
                            pariatur distinctio iste eveniet aperiam amet
                            obcaecati sint sunt consequuntur, mollitia laborum,
                            a cum exercitationem repudiandae?
                        </p>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-center text-black dark:bg-slate-400">
                        <h2 className="mb-10 text-6xl">Scuole dell'infanzia</h2>
                        <p className="text-2xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Asperiores, ad voluptatibus eum impedit culpa
                            pariatur distinctio iste eveniet aperiam amet
                            obcaecati sint sunt consequuntur, mollitia laborum,
                            a cum exercitationem repudiandae?
                        </p>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-center text-black dark:bg-slate-400">
                        <h2 className="mb-10 text-6xl">Scuole Primarie</h2>
                        <p className="text-2xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Asperiores, ad voluptatibus eum impedit culpa
                            pariatur distinctio iste eveniet aperiam amet
                            obcaecati sint sunt consequuntur, mollitia laborum,
                            a cum exercitationem repudiandae?
                        </p>
                    </div>
                    <div className="rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-center text-white">
                        <h2 className="mb-10 text-6xl">Scuole Secondarie</h2>
                        <p className="text-2xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Asperiores, ad voluptatibus eum impedit culpa
                            pariatur distinctio iste eveniet aperiam amet
                            obcaecati sint sunt consequuntur, mollitia laborum,
                            a cum exercitationem repudiandae?
                        </p>
                    </div>
                </motion.section>

                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    className="grid place-items-center p-2 md:p-10 dark:bg-slate-500 dark:text-white"
                >
                    <div className="">
                        <h2 className="mb-10 text-6xl">Contattaci</h2>
                    </div>
                    <div className="mx-auto w-full p-5 md:w-5/12 md:p-0">
                        {wasSuccessful && (
                            <div className="mb-5 w-full rounded-lg bg-emerald-500 p-5 text-center text-white">
                                {flash.message}
                            </div>
                        )}
                        <form
                            className="space-y-3 rounded-xl bg-gray-200 p-10 text-black shadow-lg dark:bg-slate-600"
                            onSubmit={submit}
                        >
                            <div>
                                <InputLabel
                                    htmlFor="name"
                                    className="mb-2 text-xl dark:text-white"
                                >
                                    Nome Contatto
                                </InputLabel>
                                <TextInput
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    placeholder="Nome Contatto"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    className={`w-full ${errors.name && 'border-red-500'}`}
                                />
                                {errors.name && (
                                    <InputError message={errors.name} />
                                )}
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="email"
                                    className="mb-2 text-xl dark:text-white"
                                >
                                    Indirizzo Email
                                </InputLabel>
                                <TextInput
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    placeholder="Indirizzo Email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    className={`w-full ${errors.email && 'border-red-500'}`}
                                />
                                {errors.email && (
                                    <InputError message={errors.email} />
                                )}
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="phone"
                                    className="mb-2 text-xl dark:text-white"
                                >
                                    Numero di Telefono
                                </InputLabel>
                                <TextInput
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    required
                                    placeholder="Numero di Telefono"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData('phone', e.target.value)
                                    }
                                    className={`w-full ${errors.phone && 'border-red-500'}`}
                                />
                                {errors.phone && (
                                    <InputError message={errors.phone} />
                                )}
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="school"
                                    className="mb-2 text-xl dark:text-white"
                                >
                                    Seleziona il tipo di Scuola
                                </InputLabel>
                                <select
                                    id="school"
                                    name="school"
                                    required
                                    value={data.school}
                                    onChange={(e) =>
                                        setData('school', e.target.value)
                                    }
                                    className={`mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm ${errors.school && 'border-red-500'}`}
                                >
                                    <option value="">
                                        Seleziona il tipo di scuola
                                    </option>
                                    <option value="nido">Nido</option>
                                    <option value="scuola_dell_infanzia">
                                        Scuola dell'infanzia
                                    </option>
                                    <option value="scuola_primaria">
                                        Scuola primaria
                                    </option>
                                    <option value="scuola_secondaria">
                                        Scuola secondaria
                                    </option>
                                </select>
                                {errors.school && (
                                    <InputError message={errors.school} />
                                )}
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="message"
                                    className="mb-2 text-xl dark:text-white"
                                >
                                    Il Tuo Messaggio
                                </InputLabel>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="Scrivi il tuo messaggio qui..."
                                    value={data.message}
                                    onChange={(e) =>
                                        setData('message', e.target.value)
                                    }
                                    className={`mt-1 block w-full resize-none rounded-md border border-gray-300 px-3 py-2 shadow-sm ${errors.message && 'border-red-500'}`}
                                    rows="4"
                                />

                                {errors.message && (
                                    <InputError message={errors.message} />
                                )}
                            </div>
                            <div className="flex items-center text-black dark:text-white">
                                <input
                                    type="checkbox"
                                    required
                                    checked={data.privacy}
                                    onChange={(e) =>
                                        setData('privacy', e.target.checked)
                                    }
                                    className="mr-2"
                                />
                                <p
                                    className={`${errors.privacy && 'text-red-500'}`}
                                >
                                    Dichiaro di aver preso visione della{' '}
                                    <a
                                        href="#"
                                        className="inline text-red-500 underline"
                                    >
                                        Privacy Policy
                                    </a>
                                    , pertanto presto il mio consenso al
                                    trattamento dei dati per ricevere le
                                    informazioni richieste.
                                </p>
                                {errors.privacy && (
                                    <InputError>{errors.privacy}</InputError>
                                )}
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className="mt-2 w-full rounded-3xl bg-red-800 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-red-900"
                                    disabled={processing}
                                >
                                    Invia
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.section>
            </PublicLayout>
        </>
    );
}
