import Footer from "@/Components/Footer";
import NavbarComponent from "@/Components/NavbarComponent";

export default function PublicLayout({ children }) {
    return (
        <>
            <NavbarComponent />
            <main>{children}</main>
            <Footer />
        </>
    );
}
