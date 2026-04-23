import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCartStore } from '../store/cartStore';

export default function Cart() {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCartStore();

    const handleUpdate = (id, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(id);
        } else {
            updateQuantity(id, newQuantity);
        }
    };

    const total = cartTotal();
    const shipping = total > 1000 ? 0 : 50; // free shipping over 1000

    if (cart.length === 0) {
        return (
            <div className="flex-grow flex flex-col items-center justify-center p-10 py-24 text-center">
                <div className="w-32 h-32 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={56} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Your cart is empty</h2>
                <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md">Looks like you haven't added anything to your cart yet. Discover our premium ethnic wear.</p>
                <Link to="/products">
                    <Button size="lg">Start Shopping</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow">

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">Your Cart ({cart.length} items)</h1>

            <div className="flex flex-col lg:flex-row gap-10">

                {/* Cart Items */}
                <div className="flex-1">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <ul className="divide-y divide-slate-100 dark:divide-slate-800">
                            {cart.map((item, index) => (
                                <motion.li
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex p-6 gap-6"
                                >
                                    <div className="w-24 h-32 shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                        <img src={item.images?.[0] || 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=200'} alt={item.name} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex-1 flex flex-col">
                                        <div className="flex justify-between">
                                            <div>
                                                <Link to={`/products/${item.id}`} className="font-semibold lg:text-lg text-slate-900 dark:text-white hover:text-pink-500 line-clamp-2">
                                                    {item.name}
                                                </Link>
                                                <p className="text-xs text-pink-500 font-medium uppercase tracking-wider mt-1">{item.category?.name || item.category || 'Apparel'}</p>
                                            </div>
                                            <span className="font-bold text-lg text-slate-900 dark:text-white shrink-0 ml-4">₹{item.price.toFixed(2)}</span>
                                        </div>

                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden h-9 w-28 bg-transparent">
                                                <button onClick={() => handleUpdate(item.id, item.quantity - 1)} className="px-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">-</button>
                                                <div className="flex-1 text-center font-medium text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900/50 py-1">{item.quantity}</div>
                                                <button onClick={() => handleUpdate(item.id, item.quantity + 1)} className="px-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300">+</button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-slate-400 hover:text-red-500 transition-colors p-2"
                                                aria-label="Remove item"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="w-full lg:w-96 shrink-0">
                    <div className="bg-slate-50 border border-slate-200 dark:border-slate-800 dark:bg-slate-900 rounded-3xl p-6 sticky top-28">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Order Summary</h2>

                        <div className="space-y-4 text-slate-600 dark:text-slate-300">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-medium text-slate-900 dark:text-white">₹{total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping Estimate</span>
                                <span className="font-medium text-slate-900 dark:text-white">{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
                            </div>

                            <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-6">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-lg font-bold text-slate-900 dark:text-white">Total</span>
                                    <span className="text-2xl font-extrabold text-slate-900 dark:text-white">₹{(total + shipping).toFixed(2)}</span>
                                </div>

                                <Link to="/checkout" className="block w-full">
                                    <Button size="lg" className="w-full shadow-lg shadow-pink-500/20 group">
                                        Proceed to Checkout <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
