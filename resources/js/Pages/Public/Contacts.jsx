import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { variants } from '@/Constants';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

export default function Contacts() {
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
        message: '',
        privacy: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.generic'), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                reset('name', 'email', 'phone', 'message', 'privacy');
                clearErrors();
            },
        });
    };
    return (
        <>
            <Head>
                <title>
                    REMIDA VARESE - Innoviamo con creatività | Contatti
                </title>
                <meta name="description" content=""></meta>
                <link
                    rel="canonical"
                    href="https://remidavarese.it/contatti"
                ></link>
            </Head>
            <PublicLayout>
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    className="mt-[100px] grid min-h-fit grid-cols-1 bg-black/60 p-2 md:grid-cols-2 md:p-20 lg:mt-20"
                >
                    <div className="flex flex-col items-center justify-center p-10 text-white">
                        <h1 className="w-9/12 text-3xl md:text-6xl">
                            <span className="font-bold">REMIDA VARESE</span>
                            <br />
                        </h1>
                        <p className="mt-5 text-xl text-white md:w-5/6">
                            Il{' '}
                            <a
                                href="https://it.wikipedia.org/wiki/Chiostro_di_Voltorre"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white underline"
                            >
                                Chiostro di Voltorre
                            </a>{' '}
                            a Gavirate (VA) è un monastero benedettino del XII
                            secolo in stile romanico. Ospita da oltre dieci anni
                            i contesti ludici di apprendimento di ReMida Varese.
                        </p>
                        <div className="mt-10 grid grid-cols-2 gap-10 text-6xl text-red-500">
                            <div className="flex flex-col items-center justify-center">
                                <FaMapMarkerAlt />
                                <p className="mt-5 text-lg text-white">
                                    c/o Chiostro di Voltorre <br /> Via S.
                                    Michele <br />
                                    21026 Gavirate (VA)
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-items-start">
                                <IoIosMail />
                                <a
                                    href="mailto:info@remidavarese.it"
                                    className="mt-5 text-lg text-white underline"
                                >
                                    info@remidavarese.it
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20">
                        <div className="mx-auto w-full p-5 md:w-10/12 md:p-0">
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
                                        <InputError>
                                            {errors.privacy}
                                        </InputError>
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
                    </div>
                </motion.section>
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                >
                    <div className="h-[65vh] w-full">
                        <iframe
                            className="h-[65vh] w-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.5070175352453!2d8.731766776622383!3d45.833361408731534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786792be1c69103%3A0x343281f25d94a7ca!2sChiostro%20di%20Voltorre!5e1!3m2!1sit!2sit!4v1724407744334!5m2!1sit!2sit"
                        ></iframe>
                    </div>
                </motion.section>
            </PublicLayout>
        </>
    );
}
