import { Link } from 'react-router-dom';
import { ShoppingBag, Moon, Sun, Menu, X, Heart } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
import { useCartStore } from '../../store/cartStore';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

export default function Navbar() {
    const { theme, toggleTheme } = useThemeStore();
    const cartCount = useCartStore(state => state.cartCount());
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500 hover:from-pink-500 hover:to-blue-600 transition-all duration-500">
                            Mulay Bandhu
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex ml-10 space-x-8">
                        <Link to="/products" className="text-slate-700 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 font-medium transition-colors">Shop</Link>
                        <Link to="/products?category=bhagwan-dresses" className="text-slate-700 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 font-medium transition-colors">Religious</Link>
                        <Link to="/custom-order" className="text-slate-700 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 font-medium transition-colors">Custom Stitching</Link>
                        <Link to="/about" className="text-slate-700 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 font-medium transition-colors">About</Link>
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button onClick={toggleTheme} className="text-slate-600 dark:text-slate-300 hover:text-pink-500 transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <Link to="/wishlist" className="text-slate-600 dark:text-slate-300 hover:text-pink-500 transition-colors">
                            <Heart size={22} />
                        </Link>
                        <Link to="/cart" className="relative text-slate-600 dark:text-slate-300 hover:text-pink-500 transition-colors">
                            <ShoppingBag size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1.5 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-[10px] font-bold text-white">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button onClick={toggleTheme} className="text-slate-600 dark:text-slate-300">
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <Link to="/cart" className="relative text-slate-600 dark:text-slate-300">
                            <ShoppingBag size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-[9px] font-bold text-white">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-slate-600 dark:text-slate-300 p-2">
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            <Link onClick={() => setIsMobileOpen(false)} to="/products" className="block px-3 py-3 rounded-md text-base font-medium text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800">Shop All</Link>
                            <Link onClick={() => setIsMobileOpen(false)} to="/products?category=bhagwan-dresses" className="block px-3 py-3 rounded-md text-base font-medium text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800">Religious Dresses</Link>
                            <Link onClick={() => setIsMobileOpen(false)} to="/custom-order" className="block px-3 py-3 rounded-md text-base font-medium text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800">Custom Stitching</Link>
                            <Link onClick={() => setIsMobileOpen(false)} to="/about" className="block px-3 py-3 rounded-md text-base font-medium text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800">About Us</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
