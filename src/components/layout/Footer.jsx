import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-sans">

                    <div className="space-y-4">
                        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500 inline-block">
                            Mulay Bandhu
                        </Link>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-4">
                            Premium Clothing & Traditional Textiles. Providing custom Bhagwan dresses, sasankathi cloth, and quality apparel.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Shop Categories</h3>
                        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400 shrink-0">
                            <li><Link to="/products?category=mens" className="hover:text-pink-500 transition-colors">Men's Wear</Link></li>
                            <li><Link to="/products?category=womens" className="hover:text-pink-500 transition-colors">Women's Wear</Link></li>
                            <li><Link to="/products?category=traditional" className="hover:text-pink-500 transition-colors">Traditional Clothing</Link></li>
                            <li><Link to="/products?category=bhagwan-dresses" className="hover:text-pink-500 transition-colors">Religious (Bhagwan Dresses)</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Customer Care</h3>
                        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link to="/contact" className="hover:text-pink-500 transition-colors">Contact Us</Link></li>
                            <li><Link to="/custom-order" className="hover:text-pink-500 transition-colors">Request Custom Stitching</Link></li>
                            <li><Link to="/about" className="hover:text-pink-500 transition-colors">About the Brand</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Store Location</h3>
                        <address className="text-sm text-slate-500 dark:text-slate-400 not-italic leading-relaxed">
                            Main Market Road<br />
                            Near the Temple<br />
                            India
                            <br /><br />
                            <strong>Phone:</strong> +91 98765 43210<br />
                            <strong>WhatsApp:</strong> Available 24/7
                        </address>
                    </div>

                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-slate-400">
                        &copy; {new Date().getFullYear()} Mulay Bandhu Kapad Kendra. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 px-3 py-1 rounded-full">
                            Made with Modern UI
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
