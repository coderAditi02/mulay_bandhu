import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import ProductCard from '../components/product/ProductCard';

// Dummy data to visualize before backend integration
const featuredProducts = [
    { id: 1, name: 'Premium Kurta Set', price: 2999, category: { name: 'Men\'s Wear' }, isFeatured: true, images: [{ url: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop' }] },
    { id: 2, name: 'Designer Saree', price: 5499, category: { name: 'Women\'s Wear' }, isFeatured: true, images: [{ url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop' }] },
    { id: 3, name: 'Custom Bhagwan Dress', price: 1499, category: { name: 'Religious' }, isFeatured: true, images: [{ url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop' }] },
    { id: 4, name: 'Traditional Sherwani', price: 8999, category: { name: 'Traditional' }, isFeatured: true, images: [{ url: 'https://images.unsplash.com/photo-1595909249764-585ee3133de5?q=80&w=800&auto=format&fit=crop' }] },
];

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background elements */}
                <div className="absolute top-0 inset-x-0 h-full overflow-hidden z-0">
                    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-pink-400/20 dark:bg-pink-600/10 blur-3xl"></div>
                    <div className="absolute top-40 -left-40 w-96 h-96 rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight"
                    >
                        Blend of <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500">Tradition</span><br />
                        & Modern Fashion
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        Mulay Bandhu Kapad Kendra brings you premium quality ethnic wear, special authentic Bhagwan dresses, and modern apparel for everyone.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/products">
                            <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-pink-500/20">
                                Explore Collection
                            </Button>
                        </Link>
                        <Link to="/custom-order">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                Custom Stitching
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-20 bg-white/50 dark:bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500 inline-block mb-3">Featured Highlights</h2>
                            <p className="text-slate-500 dark:text-slate-400">Handpicked selections crafted for perfection.</p>
                        </div>
                        <Link to="/products" className="hidden sm:block text-pink-500 hover:text-blue-600 font-medium transition-colors">
                            View All &rarr;
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Banners */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[500px]">

                        <Link to="/products?category=mens" className="relative group overflow-hidden rounded-3xl md:col-span-2">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                            <img src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1000&auto=format&fit=crop" alt="Mens Wear" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute bottom-8 left-8 z-20">
                                <h3 className="text-3xl font-bold text-white mb-2">Men's Apparel</h3>
                                <span className="text-white/80 group-hover:text-pink-400 transition-colors flex items-center gap-2">
                                    Shop Now <span className="transform group-hover:translate-x-2 transition-transform">&rarr;</span>
                                </span>
                            </div>
                        </Link>

                        <Link to="/products?category=bhagwan-dresses" className="relative group overflow-hidden rounded-3xl md:row-span-2">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>
                            <img src="https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?q=80&w=800&auto=format&fit=crop" alt="Religious" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute bottom-8 left-8 z-20">
                                <div className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block shadow-md">Specialty</div>
                                <h3 className="text-3xl font-bold text-white mb-2 leading-tight">Bhagwan<br />Dresses</h3>
                                <p className="text-white/70 mb-4 text-sm max-w-[200px]">Custom stitched religious apparel & palakhi styles.</p>
                                <span className="text-white/80 group-hover:text-pink-400 transition-colors flex items-center gap-2">
                                    Discover <span className="transform group-hover:translate-x-2 transition-transform">&rarr;</span>
                                </span>
                            </div>
                        </Link>

                        <Link to="/products?category=womens" className="relative group overflow-hidden rounded-3xl md:col-span-2">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                            <img src="https://images.unsplash.com/photo-1616053335805-4c07da7573eb?q=80&w=1000&auto=format&fit=crop" alt="Womens Wear" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute bottom-8 left-8 z-20">
                                <h3 className="text-3xl font-bold text-white mb-2">Women's Collection</h3>
                                <span className="text-white/80 group-hover:text-pink-400 transition-colors flex items-center gap-2">
                                    Shop Now <span className="transform group-hover:translate-x-2 transition-transform">&rarr;</span>
                                </span>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>

            {/* Testimonial / Story */}
            <section className="py-24 bg-gradient-to-b from-white to-pink-50 dark:from-slate-900 dark:to-slate-950">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Heart className="mx-auto text-pink-500 mb-8" size={48} />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">Our Heritage</h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed italic">
                        "For generations, Mulay Bandhu Kapad Kendra has stood as a symbol of quality and trust in ethnic wear and special religious apparel. Every fabric tells a story of culture perfectly stitched to fit modern sensibilities."
                    </p>
                </div>
            </section>

        </div>
    );
}
