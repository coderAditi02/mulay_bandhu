import { Mail, Phone, MapPin, User, MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-grow">

            <div className="text-center mb-16 max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Let's Get In Touch</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    Whether you need a specialized Bhagwan dress, custom tailoring, or have a question about our clothing collections, we treat every inquiry as a priority.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl text-center shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-transform hover:-translate-y-2">
                    <User className="mx-auto text-blue-500 mb-4" size={36} />
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Owner</h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">Purushottam Mulay</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl text-center shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-transform hover:-translate-y-2">
                    <Phone className="mx-auto text-pink-500 mb-4" size={36} />
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Phone / WhatsApp</h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">+91 90111 75477</p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl text-center shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-transform hover:-translate-y-2">
                    <Mail className="mx-auto text-indigo-500 mb-4" size={36} />
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Email</h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">mulaybandhu@gmail.com</p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-3xl text-center shadow-lg shadow-red-200/50 dark:shadow-none border border-red-100 dark:border-red-900/30 transition-transform hover:-translate-y-2 flex flex-col items-center justify-center">
                    <svg className="mx-auto text-red-600 mb-4" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Our Channel</h3>
                    <a href="https://www.youtube.com/@purushottammulay4981" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline text-sm">
                        @purushottammulay4981
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Form */}
                <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-200 dark:border-slate-800 w-full">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send a Message</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input type="text" placeholder="Your Name" className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-slate-900 dark:text-white font-medium" />
                            <input type="tel" placeholder="Phone Number" className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-slate-900 dark:text-white font-medium" />
                        </div>
                        <input type="email" placeholder="Your Email (Optional)" className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-slate-900 dark:text-white font-medium" />
                        <textarea rows="5" placeholder="How can we help you today? Ask about customized deity dresses, bulk orders, etc." className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-slate-900 dark:text-white font-medium"></textarea>

                        <div className="flex gap-4">
                            <Button size="lg" className="flex-1 shadow-lg shadow-pink-500/20">Send Inquiry</Button>
                            <a href="https://wa.me/919011175477" target="_blank" rel="noreferrer" className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-lg shadow-green-500/30 transition-all">
                                <MessageCircle size={24} />
                            </a>
                        </div>
                    </form>
                </div>

                {/* Map Placeholder */}
                <div className="h-full min-h-[400px] bg-slate-200 dark:bg-slate-800 rounded-[2rem] overflow-hidden relative flex flex-col items-center justify-center border border-slate-300 dark:border-slate-700 p-8 text-center text-slate-500 dark:text-slate-400">
                    <MapPin size={64} className="mb-4 text-slate-400 dark:text-slate-500 opacity-50" />
                    <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">Visit Our Store</h3>
                    <p className="max-w-xs mb-6">Main Market Road, Near Temple, India</p>
                    <div className="px-6 py-3 bg-white dark:bg-slate-700 rounded-full shadow-md text-sm font-semibold cursor-not-allowed">
                        Map Integration Available
                    </div>
                </div>
            </div>

        </div>
    );
}
