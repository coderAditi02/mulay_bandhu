import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, User } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-sans">

                    <div className="space-y-4">
                        <Link to="/" className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500 inline-block mb-2">
                            Mulay Bandhu
                        </Link>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                            Premium Clothing & Traditional Textiles. Providing custom Bhagwan dresses, sasankathi cloth, and quality apparel. Experience heritage in every thread.
                        </p>
                        <form className="flex w-full mb-4 group focus-within:ring-2 focus-within:ring-pink-500 rounded-xl overflow-hidden shadow-sm transition-all">
                            <input type="email" placeholder="Subscribe to newsletter..." className="w-full bg-slate-50 dark:bg-slate-900 px-4 py-2.5 outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400 font-medium border-y border-l border-slate-200 dark:border-slate-800" required />
                            <button type="submit" className="bg-slate-900 dark:bg-pink-600 text-white px-4 py-2.5 font-bold text-sm hover:bg-slate-800 dark:hover:bg-pink-700 transition-colors border-y border-r border-slate-900 dark:border-pink-600">Join</button>
                        </form>
                        <div className="flex items-center gap-4 pt-4">
                            <a href="https://www.youtube.com/@purushottammulay4981" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center hover:scale-110 hover:bg-red-500 hover:text-white transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 flex items-center justify-center hover:scale-110 hover:bg-pink-500 hover:text-white transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center hover:scale-110 hover:bg-blue-600 hover:text-white transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Shop Collections</h3>
                        <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-400 font-medium">
                            <li><Link to="/products?category=mens" className="hover:text-pink-500 transition-colors">Men's Wear</Link></li>
                            <li><Link to="/products?category=womens" className="hover:text-pink-500 transition-colors">Women's Wear</Link></li>
                            <li><Link to="/products?category=traditional" className="hover:text-pink-500 transition-colors">Traditional & Ethnic</Link></li>
                            <li><Link to="/products?category=bhagwan" className="hover:text-pink-500 transition-colors">Religious & Deity Dresses</Link></li>
                            <li><Link to="/custom-order" className="hover:text-blue-500 transition-colors">Custom Stitching Orders</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Customer Support</h3>
                        <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-400 font-medium">
                            <li><Link to="/contact" className="hover:text-pink-500 transition-colors">Contact Us</Link></li>
                            <li><Link to="/wishlist" className="hover:text-pink-500 transition-colors">My Wishlist</Link></li>
                            <li><Link to="/cart" className="hover:text-pink-500 transition-colors">Shopping Cart</Link></li>
                            <li><Link to="/about" className="hover:text-pink-500 transition-colors">About Our Journey</Link></li>
                            <li><Link to="/" className="hover:text-pink-500 transition-colors">Store Policies</Link></li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Contact Info</h3>
                        <address className="space-y-4 not-italic text-sm text-slate-600 dark:text-slate-400">
                            <div className="flex items-start gap-3">
                                <User size={18} className="text-pink-500 shrink-0 mt-0.5" />
                                <span><strong className="text-slate-900 dark:text-white block">Purushottam Mulay</strong>Owner</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-pink-500 shrink-0" />
                                <span>+91 90111 75477</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-pink-500 shrink-0" />
                                <span>mulaybandhu@gmail.com</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-pink-500 shrink-0 mt-0.5" />
                                <span>Main Market Road, Near Temple, India</span>
                            </div>
                        </address>
                    </div>

                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        &copy; {new Date().getFullYear()} Mulay Bandhu Kapad Kendra. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
                        <span className="hover:text-pink-500 cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-pink-500 cursor-pointer transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
