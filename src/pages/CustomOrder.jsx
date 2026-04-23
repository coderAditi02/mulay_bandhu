import { useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';

export default function CustomOrder() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        type: 'bhagwan-dress',
        requirements: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call to Strapi backend
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="max-w-2xl mx-auto px-4 py-24 text-center flex-grow flex flex-col items-center justify-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                >
                    <CheckCircle2 size={80} className="text-green-500 mx-auto mb-6" />
                </motion.div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Request Sent Successfully!</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-md mx-auto line-height-relaxed">
                    Thank you for trusting Mulay Bandhu. We will review your custom stitching requirements and contact you via WhatsApp or Call shortly.
                </p>
                <Button onClick={() => window.location.href = '/'} className="mx-auto block w-48">Return Home</Button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 w-full flex-grow">

            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500 mb-4 inline-block">Custom Stitching</h1>
                <p className="text-slate-600 dark:text-slate-300 text-lg">
                    Special requests for Bhagwan Dresses, sasankathi cloth, or personalized tailoring.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800"
            >
                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-900 dark:text-slate-200">Full Name</label>
                            <input
                                required
                                type="text"
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all dark:text-white"
                                placeholder="Rahul Mehta"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-900 dark:text-slate-200">Phone Number (WhatsApp)</label>
                            <input
                                required
                                type="tel"
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all dark:text-white"
                                placeholder="+91 99999 99999"
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-900 dark:text-slate-200">Request Type</label>
                        <select
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all dark:text-white appearance-none"
                            value={formData.type}
                            onChange={e => setFormData({ ...formData, type: e.target.value })}
                        >
                            <option value="bhagwan-dress">Bhagwan Dress Styling</option>
                            <option value="palakhi-cloth">Palakhi Cloth Customization</option>
                            <option value="mens-traditional">Men's Traditional Tailoring</option>
                            <option value="womens-traditional">Women's Outfits Custom</option>
                            <option value="other">Other Unique Request</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-900 dark:text-slate-200">Measurement & Special Instructions</label>
                        <textarea
                            required
                            rows="4"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all dark:text-white resize-none"
                            placeholder="Please describe the deity size, preferred fabrics, or any unique patterns requirements..."
                            value={formData.requirements}
                            onChange={e => setFormData({ ...formData, requirements: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-900 dark:text-slate-200">Reference Image (Optional)</label>
                        <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-8 text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                            <UploadCloud className="mx-auto text-slate-400 mb-3" size={32} />
                            <p className="text-sm text-slate-600 dark:text-slate-400">Click to upload or drag and drop</p>
                            <p className="text-xs text-slate-400 mt-1">PNG, JPG, up to 5MB</p>
                        </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full mt-4">
                        Submit Custom Request
                    </Button>

                </form>
            </motion.div>
        </div>
    );
}
