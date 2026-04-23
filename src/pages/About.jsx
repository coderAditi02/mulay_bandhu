import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="flex-grow flex flex-col">
            <div className="bg-pink-50 dark:bg-slate-900 py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Story</h1>
                <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                    Decades of tradition, woven into every thread.
                </p>
            </div>
            <div className="max-w-4xl mx-auto px-4 py-16 text-slate-700 dark:text-slate-300 space-y-6 text-lg leading-relaxed">
                <p>
                    Welcome to <strong className="text-pink-500">Mulay Bandhu Kapad Kendra</strong>. For generations, we have been a cornerstone of quality textiles, offering everything from everyday apparel to the most exquisite traditional wear.
                </p>
                <p>
                    Our specialty lies in our custom-stitched <strong>Bhagwan Dresses</strong> and religious clothing, crafted with reverence and precision to meet the exact specifications of our customers' spiritual needs.
                </p>
                <p>
                    Whether you are looking for Men's wear, Women's traditional sarees, or custom stitching requests, our commitment to quality, fabric authenticity, and fine craftsmanship remains unchanging.
                </p>
            </div>
        </div>
    );
}
