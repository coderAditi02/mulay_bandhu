import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import Button from '../ui/Button';
import { useCartStore } from '../../store/cartStore';

export default function ProductCard({ product }) {
    const addToCart = useCartStore(state => state.addToCart);

    // Fallback for missing data
    const id = product?.documentId || product?.id || 'unknown';
    const name = product?.name || 'Unknown Product';
    const price = product?.price || 0;
    const category = product?.category?.name || 'Uncategorized';
    const image = product?.images?.[0]?.url || 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

    // Deterministic random rating
    const ratingNum = 4.0 + ((name.length % 10) / 10);
    const reviews = (name.charCodeAt(0) * 2) % 300 + 45;

    // Convert Strapi URL if relative
    const imageUrl = image.startsWith('/') ? `${import.meta.env.VITE_API_URL || 'http://localhost:1337'}${image}` : image;

    return (
        <motion.div
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800"
        >
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                />

                {/* Badges */}
                {product?.isFeatured && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                        Featured
                    </div>
                )}

                {/* Quick Actions (Hover) */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <button className="p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full shadow-md text-slate-600 dark:text-slate-300 hover:text-pink-500 transition-colors">
                        <Heart size={18} />
                    </button>
                </div>

                {/* Add to cart overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 bg-gradient-to-t from-black/60 to-transparent">
                    <Button
                        variant="primary"
                        className="w-full h-10 shadow-lg text-sm"
                        onClick={(e) => { e.preventDefault(); addToCart(product); }}
                    >
                        <ShoppingCart size={16} className="mr-2" /> Quick Add
                    </Button>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="text-xs text-pink-500 font-medium mb-1 uppercase tracking-wider">{category}</div>
                <Link to={`/products/${id}`} className="block flex-grow">
                    <h3 className="font-semibold text-slate-900 dark:text-white leading-tight group-hover:text-pink-500 transition-colors line-clamp-2">
                        {name}
                    </h3>
                </Link>
                <div className="flex items-center gap-1 mt-1.5 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={14} className={star <= Math.round(ratingNum) ? "text-yellow-400 fill-yellow-400" : "text-slate-200 dark:text-slate-700"} />
                    ))}
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium ml-1">({reviews})</span>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-lg text-slate-900 dark:text-white">₹{price.toFixed(2)}</span>
                </div>
            </div>
        </motion.div>
    );
}
