import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SlidersHorizontal, Search, X } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';

// Dummy data for initial display
const dummyProducts = [
    { id: 1, name: 'Premium Kurta Set', price: 2999, category: { name: 'mens' }, isFeatured: true, tags: ['Handmade'], images: [{ url: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800' }] },
    { id: 2, name: 'Designer Silk Saree', price: 8499, category: { name: 'womens' }, isFeatured: true, tags: ['Traditional'], images: [{ url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800' }] },
    { id: 3, name: 'Custom Bhagwan Dress', price: 1499, category: { name: 'bhagwan-dresses' }, isFeatured: true, tags: ['Religious', 'Handmade'], images: [{ url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800' }] },
    { id: 4, name: 'Traditional Sherwani', price: 11999, category: { name: 'traditional' }, isFeatured: true, tags: ['Traditional'], images: [{ url: 'https://images.unsplash.com/photo-1595909249764-585ee3133de5?q=80&w=800' }] },
    { id: 5, name: 'Cotton Daily Kurti', price: 1299, category: { name: 'womens' }, isFeatured: false, tags: [], images: [{ url: 'https://images.unsplash.com/photo-1583391733958-d25e07fac04f?q=80&w=800' }] },
    { id: 6, name: 'Palakhi Cloth', price: 899, category: { name: 'bhagwan-dresses' }, isFeatured: false, tags: ['Religious'], images: [{ url: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=800' }] },
    { id: 7, name: 'Aptagiri Cloth Premium', price: 1999, category: { name: 'bhagwan-dresses' }, isFeatured: false, tags: ['Religious'], images: [{ url: 'https://images.unsplash.com/photo-1620244670265-f483bfff96d5?q=80&w=800' }] },
];

export default function ProductList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    // States for filtering
    const [searchQuery, setSearchQuery] = useState('');
    const categoryFilter = searchParams.get('category') || 'all';

    const categories = [
        { id: 'all', name: 'All Products' },
        { id: 'mens', name: 'Men\'s Wear' },
        { id: 'womens', name: 'Women\'s Wear' },
        { id: 'traditional', name: 'Traditional' },
        { id: 'bhagwan-dresses', name: 'Religious / Bhagwan' },
    ];

    const handleCategoryChange = (catId) => {
        if (catId === 'all') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', catId);
        }
        setSearchParams(searchParams);
    };

    const filteredProducts = useMemo(() => {
        return dummyProducts.filter(product => {
            const matchCategory = categoryFilter === 'all' || product.category.name === categoryFilter;
            const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchCategory && matchSearch;
        });
    }, [categoryFilter, searchQuery]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-grow flex flex-col md:flex-row gap-8">

            {/* Desktop Sidebar Filters */}
            <aside className="hidden md:block w-64 shrink-0">
                <div className="sticky top-24 space-y-8">

                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Filter size={18} /> Categories
                        </h3>
                        <div className="space-y-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => handleCategoryChange(cat.id)}
                                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${categoryFilter === cat.id
                                            ? 'bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 font-medium'
                                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">

                {/* Header & Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                            {categories.find(c => c.id === categoryFilter)?.name || 'All Products'}
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-1">Showing {filteredProducts.length} products</p>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-900 border-none rounded-xl text-sm focus:ring-2 focus:ring-pink-500 dark:text-white"
                            />
                            <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
                        </div>
                        <button
                            className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                            onClick={() => setIsMobileFiltersOpen(true)}
                        >
                            <SlidersHorizontal size={20} />
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence>
                            {filteredProducts.map((product) => (
                                <motion.div
                                    layout
                                    key={product.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="text-center py-24 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">No products found</h3>
                        <p className="text-slate-500 dark:text-slate-400">Try adjusting your filters or search query.</p>
                        <button onClick={() => { setSearchQuery(''); handleCategoryChange('all'); }} className="mt-4 text-pink-500 hover:text-pink-600 font-medium">Clear all filters</button>
                    </div>
                )}

            </main>

            {/* Mobile Drawer (Filters) */}
            <AnimatePresence>
                {isMobileFiltersOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex justify-end"
                    >
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setIsMobileFiltersOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-xs h-full bg-white dark:bg-slate-950 shadow-2xl flex flex-col pt-6 pb-8 overflow-y-auto border-l border-slate-200 dark:border-slate-800"
                        >
                            <div className="px-4 flex items-center justify-between mb-8">
                                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Filters</h2>
                                <button onClick={() => setIsMobileFiltersOpen(false)} className="text-slate-500 hover:text-slate-700 dark:hover:text-white">
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="px-4">
                                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider text-slate-500">Categories</h3>
                                <div className="space-y-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.id}
                                            onClick={() => { handleCategoryChange(cat.id); setIsMobileFiltersOpen(false); }}
                                            className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${categoryFilter === cat.id
                                                    ? 'bg-pink-500 text-white font-medium shadow-md shadow-pink-500/20'
                                                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                                }`}
                                        >
                                            {cat.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
