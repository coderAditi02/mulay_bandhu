import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCartStore } from '../store/cartStore';

export default function Checkout() {
    const { cart, cartTotal, clearCart } = useCartStore();
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', address: '', city: '', pincode: '', paymentMethod: 'cod'
    });

    const total = cartTotal();
    const shipping = total > 1000 ? 0 : 50;
    const finalAmount = total + shipping;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call to place order
        setTimeout(() => {
            setSubmitted(true);
            clearCart();
        }, 1500);
    };

    if (cart.length === 0 && !submitted) {
        navigate('/cart');
        return null;
    }

    if (submitted) {
        return (
            <div className="max-w-2xl mx-auto px-4 py-24 text-center flex-grow flex flex-col items-center justify-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
                    <CheckCircle2 size={96} className="text-pink-500 mx-auto mb-6 drop-shadow-md" />
                </motion.div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Order Placed Successfully!</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-md mx-auto text-lg">
                    Your order ID is <strong>#MB{Math.floor(Math.random() * 100000)}</strong>. We've sent a confirmation email to {formData.email}.
                </p>
                <Button onClick={() => navigate('/')} size="lg" className="w-56">Continue Shopping</Button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-grow">

            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Checkout</h1>

            <div className="flex flex-col lg:flex-row gap-10">

                {/* Checkout Form */}
                <div className="flex-1 order-2 lg:order-1">
                    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">

                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                            <MapPin size={20} className="text-pink-500" /> Delivery Address
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                            <div className="space-y-1.5 md:col-span-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-pink-500 outline-none text-slate-900 dark:text-white" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                                <input required type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-pink-500 outline-none text-slate-900 dark:text-white" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone</label>
                                <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-pink-500 outline-none text-slate-900 dark:text-white" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                            </div>
                            <div className="space-y-1.5 md:col-span-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Address Line</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-pink-500 outline-none text-slate-900 dark:text-white" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">City</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-pink-500 outline-none text-slate-900 dark:text-white" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })} />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">PIN Code</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-pink-500 outline-none text-slate-900 dark:text-white" value={formData.pincode} onChange={e => setFormData({ ...formData, pincode: e.target.value })} />
                            </div>
                        </div>

                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Payment Method</h2>

                        <div className="space-y-3 mb-8">
                            <label className="flex items-center p-4 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <input type="radio" name="payment" value="cod" checked={formData.paymentMethod === 'cod'} onChange={e => setFormData({ ...formData, paymentMethod: e.target.value })} className="w-5 h-5 text-pink-500 focus:ring-pink-500 border-slate-300" />
                                <span className="ml-3 font-medium text-slate-900 dark:text-white">Cash on Delivery (COD)</span>
                            </label>
                            <label className="flex items-center p-4 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors opacity-50 relative overflow-hidden">
                                <input disabled type="radio" name="payment" value="online" className="w-5 h-5 text-pink-500 focus:ring-pink-500 border-slate-300" />
                                <span className="ml-3 font-medium text-slate-900 dark:text-white">Online Payment</span>
                                <span className="absolute right-4 text-xs font-bold text-slate-500 tracking-wider">COMING SOON</span>
                            </label>
                        </div>

                        <Button type="submit" size="lg" className="w-full">Place Order ₹{finalAmount.toFixed(2)}</Button>
                        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
                            <ShieldCheck size={16} /> Secure Checkout
                        </div>
                    </form>
                </div>

                {/* Order Summary Sidebar */}
                <div className="w-full lg:w-96 shrink-0 order-1 lg:order-2">
                    <div className="bg-slate-50 border border-slate-200 dark:border-slate-800 dark:bg-slate-900 rounded-3xl p-6 sticky top-28">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Order Details</h2>

                        <div className="space-y-4 mb-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="w-16 h-20 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden shrink-0">
                                        <img src={item.images?.[0] || 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=200'} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <span className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-1">{item.name}</span>
                                        <span className="text-xs text-slate-500 mt-1">Qty: {item.quantity}</span>
                                        <span className="text-sm font-bold text-slate-900 dark:text-white mt-1">₹{(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <div className="flex justify-between"><span>Subtotal</span><span className="font-medium text-slate-900 dark:text-white">₹{total.toFixed(2)}</span></div>
                            <div className="flex justify-between"><span>Shipping</span><span className="font-medium text-slate-900 dark:text-white">{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span></div>
                        </div>

                        <div className="border-t border-slate-200 dark:border-slate-800 pt-4 mt-6">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold text-slate-900 dark:text-white">Amount Due</span>
                                <span className="text-2xl font-extrabold text-pink-500">₹{finalAmount.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
