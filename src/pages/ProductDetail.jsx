import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, MessageCircle, ChevronRight, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCartStore } from '../store/cartStore';

const dummyProducts = {
    1: { id: 1, name: 'Premium Kurta Set', price: 2999, description: 'Elegant and comfortable premium cotton kurta set, hand-stitched for weddings and festive occasions. Comes with matching pajamas.', category: 'Men\'s Wear', stock: 10, images: ['https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800', 'https://images.unsplash.com/photo-1595909249764-585ee3133de5?q=80&w=800'] },
    2: { id: 2, name: 'Designer Silk Saree', price: 8499, description: 'Exquisite silk saree with intricate zari work. Perfect for weddings and grand traditional functions. Lightweight and easy to drape.', category: 'Women\'s Wear', stock: 5, images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800'] },
    3: { id: 3, name: 'Custom Bhagwan Dress', price: 1499, description: 'Special traditional attire designed specifically for deities. We customize sizes based on your requirements. Includes complete shringar accessories.', category: 'Religious', stock: 20, images: ['https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800'] },
};

export default function ProductDetail() {
    const { id } = useParams();
    const addToCart = useCartStore(state => state.addToCart);
    const product = dummyProducts[id] || dummyProducts[1]; // Fallback for dummy
    const [activeImage, setActiveImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const handleWhatsAppOrder = () => {
        const text = `Hello! I would like to order: ${product.name} (Amount: ₹${product.price}) - Quantity: ${quantity}`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-grow">

            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
                <Link to="/" className="hover:text-pink-500 transition-colors">Home</Link>
                <ChevronRight size={14} />
                <Link to="/products" className="hover:text-pink-500 transition-colors">Shop</Link>
                <ChevronRight size={14} />
                <span className="text-slate-900 dark:text-slate-100 font-medium truncate">{product.name}</span>
            </nav>

            <div className="flex flex-col md:flex-row gap-12 lg:gap-16">

                {/* Image Gallery */}
                <div className="w-full md:w-1/2 lg:w-5/12 flex flex-col gap-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-800"
                    >
                        <img
                            src={product.images[activeImage]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    {product.images.length > 1 && (
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`relative w-20 h-24 shrink-0 rounded-xl overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-pink-500 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col pt-2 py-8">
                    <div className="text-sm font-semibold text-pink-500 mb-2 uppercase tracking-wide">{product.category}</div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">{product.name}</h1>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-3xl font-extrabold text-slate-900 dark:text-white">₹{product.price.toFixed(2)}</span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold rounded-full">
                            In Stock
                        </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                        {product.description}
                    </p>

                    <div className="flex items-center gap-6 mb-8 py-6 border-y border-slate-200 dark:border-slate-800">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Quantity</label>
                            <div className="flex items-center border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden h-12 w-32">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">-</button>
                                <div className="flex-1 text-center font-semibold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900/50 py-3">{quantity}</div>
                                <button onClick={() => setQuantity(Math.min(product.stock, quantity + 1))} className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">+</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <Button size="lg" className="flex-1 sm:flex-none sm:w-1/2 shadow-pink-500/25" onClick={() => addToCart(product, quantity)}>
                            <ShoppingCart size={20} className="mr-2" /> Add to Cart
                        </Button>
                        <button
                            onClick={handleWhatsAppOrder}
                            className="flex-1 sm:flex-none sm:w-1/2 flex items-center justify-center gap-2 h-14 rounded-xl font-medium bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/20 transition-all border-none"
                        >
                            <MessageCircle size={20} /> Order via WhatsApp
                        </button>
                        <button className="flex items-center justify-center w-14 h-14 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-pink-500 hover:border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/10 transition-all shrink-0">
                            <Heart size={24} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                            <Truck className="text-pink-500 shrink-0" size={24} />
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Free Delivery</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">On orders over ₹1000</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                            <ShieldCheck className="text-pink-500 shrink-0" size={24} />
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Quality Assured</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Authentic materials</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
