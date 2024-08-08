import { useEffect, useState } from 'react';
import { Switch } from '@/shadcn/ui/switch';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

export default function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(
        localStorage.getItem('theme') === 'dark',
    );

    const handleThemeChange = () => {
        setIsDark((isDark) => !isDark);

        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    useEffect(() => {
        const theme = localStorage.getItem('theme');

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    }, []);

    return (
        <>
            <div className="flex items-center space-x-1">
                <FaSun className={isDark ? 'text-white' : 'text-black'} />
                <Switch onClick={handleThemeChange} checked={isDark} />
                <FaMoon className={isDark ? 'text-white' : 'text-black'} />
            </div>
        </>
    );
}
