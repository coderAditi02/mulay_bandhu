import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useThemeStore } from '../../store/themeStore';
import { MessageCircle } from 'lucide-react';

export default function Layout() {
    const initTheme = useThemeStore(state => state.initTheme);

    useEffect(() => {
        initTheme();
    }, [initTheme]);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <Navbar />
            <main className="flex-grow flex flex-col">
                <Outlet />
            </main>
            <Footer />

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/919876543210?text=I%20have%20an%20inquiry%20regarding%20Mulay%20Bandhu%20Kapad%20Kendra"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-3 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300"
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle size={28} />
            </a>
        </div>
    );
}
