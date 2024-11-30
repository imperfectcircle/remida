import CustomModal from '@/Components/CustomModal';
import { FocusCards } from '@/Components/FocusCards';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Gallery({ images }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <Head>
                <title>
                    REMIDA VARESE - Innoviamo con creatività | Gallery
                </title>
                <meta name="description" content=""></meta>
                <link
                    rel="canonical"
                    href="https://remidavarese.it/gallery"
                ></link>
            </Head>

            <PublicLayout>
                <section className="grid place-items-center bg-gray-400 py-[150px] dark:bg-slate-700">
                    <FocusCards cards={images} />
                </section>

                <CustomModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="pippo"
                    content=""
                />
            </PublicLayout>
        </>
    );
}
