import { motion } from 'framer-motion';
import {
    HeartHandshake, Shell, Sparkles, Scissors, Gem, ShieldCheck, Star, Users
} from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
    return (
        <div className="flex-grow flex flex-col bg-slate-50 dark:bg-slate-950">

            {/* Hero Section */}
            <section className="relative py-24 text-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
                <div className="absolute inset-x-0 -top-40 z-0">
                    <div className="w-96 h-96 mx-auto bg-pink-400/20 dark:bg-pink-600/10 blur-[100px] rounded-full"></div>
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <span className="text-pink-500 font-bold tracking-wider uppercase text-sm mb-4 block">About Us</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
                            More than just a <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500">Clothing Store</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
                            At <strong className="text-pink-500 font-bold">Mulay Bandhu Kapad Kendra</strong>, we are a blend of <em>parampara</em> (tradition), craftsmanship, and modern style.
                        </p>
                        <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
                            For years, our family has been serving the community with dedication, offering a wide range of garments for men, women, and sacred traditions. From everyday fashion to divine attire, every piece reflects our commitment to quality, trust, and culture.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Legacy */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp}
                    className="text-center mb-16"
                >
                    <Sparkles className="mx-auto text-pink-500 mb-4" size={40} />
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Legacy (Parampara)</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">We proudly carry forward a tradition where:</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 text-center hover:-translate-y-2 transition-transform">
                        <Scissors size={28} className="mx-auto text-blue-500 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Meaningful Stitching</h3>
                        <p className="text-slate-500 dark:text-slate-400">Every stitch has profound meaning and precision.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 text-center hover:-translate-y-2 transition-transform">
                        <Shell size={28} className="mx-auto text-pink-500 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Fabric with a Story</h3>
                        <p className="text-slate-500 dark:text-slate-400">Every fabric tells a rich story of our cultural heritage.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 text-center hover:-translate-y-2 transition-transform">
                        <HeartHandshake size={28} className="mx-auto text-orange-500 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Divine Devotion</h3>
                        <p className="text-slate-500 dark:text-slate-400">Every Bhagwan vastra is made with absolute devotion.</p>
                    </div>
                </div>

                <div className="mt-12 bg-pink-50 dark:bg-pink-900/10 p-8 rounded-3xl border border-pink-100 dark:border-pink-900/30 text-center">
                    <p className="text-lg text-pink-800 dark:text-pink-300 italic font-medium">
                        "Our expertise in Bhagwan (Deity) dresses is what truly sets us apart. We don't just sell — we create with bhakti and precision."
                    </p>
                </div>
            </section>

            {/* What We Offer */}
            <section className="bg-white dark:bg-slate-900 py-24 border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">What We Offer</h2>
                        <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Modern & Everyday */}
                        <div className="space-y-6">
                            <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center">
                                <Users size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Modern & Everyday</h3>
                            <ul className="text-slate-600 dark:text-slate-300 space-y-3 font-medium">
                                <li><strong className="text-slate-800 dark:text-slate-200">Men’s Wear:</strong> Shirts, T-Shirts, Pants, Jackets, Kurta Sets, Formal Wear</li>
                                <li><strong className="text-slate-800 dark:text-slate-200">Women’s Wear:</strong> Sarees, Kurtis, Dresses, Gowns, Ethnic Sets</li>
                            </ul>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 italic text-slate-500 dark:text-slate-400">
                                👉 "Style that fits your everyday life"
                            </div>
                        </div>

                        {/* Traditional */}
                        <div className="space-y-6">
                            <div className="h-14 w-14 bg-pink-100 dark:bg-pink-900/30 text-pink-600 rounded-2xl flex items-center justify-center">
                                <Gem size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Traditional & Festive</h3>
                            <ul className="text-slate-600 dark:text-slate-300 space-y-3 font-medium">
                                <li><strong className="text-slate-800 dark:text-slate-200">Men's:</strong> Sherwani, Dhoti, Bandhgala, Pheta</li>
                                <li><strong className="text-slate-800 dark:text-slate-200">Women's:</strong> Lehenga, Sarees</li>
                                <li><strong className="text-slate-800 dark:text-slate-200">Occasions:</strong> Wedding & Festive Wear</li>
                            </ul>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 italic text-slate-500 dark:text-slate-400">
                                👉 "Celebrate every occasion with elegance"
                            </div>
                        </div>

                        {/* Divine & Religious */}
                        <div className="space-y-6">
                            <div className="h-14 w-14 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-2xl flex items-center justify-center">
                                <Star size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Divine & Religious</h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium pb-2 border-b border-slate-100 dark:border-slate-800">
                                Our distinct specialty in handcrafted:
                            </p>
                            <ul className="text-slate-600 dark:text-slate-300 space-y-1.5 font-medium text-sm">
                                <li>• Deity Dresses & Bhagva Vastra</li>
                                <li>• Palakhi & Sasankathi Cloth</li>
                                <li>• Temple Decoration Fabrics</li>
                                <li>• Aarti Vastra & Pooja Aasan</li>
                                <li>• Mukut & Shringar Cloth</li>
                                <li>• Custom Bhagwan Dresses</li>
                            </ul>
                            <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/30 italic text-orange-600 dark:text-orange-400 font-medium">
                                👉 "Seva through stitching – devotion in every thread"
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us & Custom Stitching */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Why Choose Us?</h2>
                    <ul className="space-y-4">
                        {[
                            "Generations of Trust",
                            "Premium Fabric Quality",
                            "Handcrafted Religious Garments",
                            "Affordable Pricing",
                            "Personalized Service"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <ShieldCheck size={20} className="text-green-500 shrink-0" />
                                <span className="text-lg text-slate-700 dark:text-slate-300">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-8 text-xl font-medium text-pink-600 dark:text-pink-400 italic">
                        👉 "Not just कपडे (clothes) — a relationship built on trust"
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 pointer-events-none">
                        <Scissors size={120} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Custom Stitching</h2>
                    <p className="text-slate-500 dark:text-slate-400 mb-6 font-medium uppercase tracking-wide text-sm relative z-10">Our Pride & Joy</p>
                    <ul className="space-y-4 relative z-10">
                        <li className="flex items-start gap-3">
                            <span className="text-pink-500 font-bold mt-0.5">✨</span>
                            <span className="text-slate-700 dark:text-slate-300">Custom tailoring for Bhagwan dresses</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-pink-500 font-bold mt-0.5">✨</span>
                            <span className="text-slate-700 dark:text-slate-300">Personalized designs for festivals</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-pink-500 font-bold mt-0.5">✨</span>
                            <span className="text-slate-700 dark:text-slate-300">Special stitching for temple requirements</span>
                        </li>
                    </ul>
                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 font-bold text-slate-900 dark:text-white relative z-10">
                        👉 "Your vision, our craftsmanship"
                    </div>
                </div>

            </section>

            {/* Promise & Vision */}
            <section className="bg-slate-900 dark:bg-slate-950 text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">

                    <div className="p-8 md:p-12 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <h2 className="text-3xl font-bold mb-6 text-pink-400">Our Promise</h2>
                        <p className="text-lg text-slate-300 mb-6">At Mulay Bandhu Kapad Kendra, we heavily believe:</p>
                        <ul className="space-y-4 text-xl font-medium">
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <span className="text-2xl">🛕</span> Faith deserves the finest
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <span className="text-2xl">👗</span> Style should be accessible
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <span className="text-2xl">🧡</span> Customers are family
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 md:p-12 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Vision</h2>
                        <p className="text-lg text-slate-300 mb-6">To continuously be a trusted name where:</p>
                        <ul className="space-y-4 text-xl font-medium">
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <span className="text-blue-400">•</span> Fashion meets tradition
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <span className="text-blue-400">•</span> Devotion meets craftsmanship
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <span className="text-blue-400">•</span> Every customer finds exactly what they need
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

        </div>
    );
}
