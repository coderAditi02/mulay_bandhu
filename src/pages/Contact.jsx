import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Contact() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-16 w-full flex-grow">

            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Contact Us</h1>
                <p className="text-slate-500 dark:text-slate-400">We'd love to hear from you. Get in touch with our support team.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl text-center shadow-sm border border-slate-200 dark:border-slate-800">
                    <Phone className="mx-auto text-pink-500 mb-4" size={32} />
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Phone</h3>
                    <p className="text-slate-500 dark:text-slate-400">+91 98765 43210</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl text-center shadow-sm border border-slate-200 dark:border-slate-800">
                    <Mail className="mx-auto text-pink-500 mb-4" size={32} />
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Email</h3>
                    <p className="text-slate-500 dark:text-slate-400">hello@mulaybandhu.com</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl text-center shadow-sm border border-slate-200 dark:border-slate-800">
                    <MapPin className="mx-auto text-pink-500 mb-4" size={32} />
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Store</h3>
                    <p className="text-slate-500 dark:text-slate-400">Main Market Road, Near Temple, India</p>
                </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 max-w-3xl mx-auto">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-pink-500 text-slate-900 dark:text-white" />
                        <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-pink-500 text-slate-900 dark:text-white" />
                    </div>
                    <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-pink-500 text-slate-900 dark:text-white" />
                    <textarea rows="5" placeholder="Your Message" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-pink-500 resize-none text-slate-900 dark:text-white"></textarea>
                    <Button size="lg" className="w-full shadow-pink-500/20">Send Message</Button>
                </form>
            </div>

        </div>
    );
}
