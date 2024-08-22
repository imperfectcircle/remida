import { variants } from '@/Constants';
import { motion } from 'framer-motion';

export default function SplashScreen() {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <motion.img
                initial="hidden"
                animate="visible"
                variants={variants}
                className="inline-block w-full object-contain"
                src="/images/splash.gif"
                alt="Splash Screen"
            />
        </div>
    );
}
