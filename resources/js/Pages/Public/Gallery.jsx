import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';

export default function Gallery() {
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

            <PublicLayout>Gallery</PublicLayout>
        </>
    );
}
