import { FocusCards } from '@/Components/FocusCards';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';

export default function Gallery({ images }) {
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
                <section className="my-[150px] grid place-items-center p-5">
                    <FocusCards cards={images} />
                </section>
            </PublicLayout>
        </>
    );
}
