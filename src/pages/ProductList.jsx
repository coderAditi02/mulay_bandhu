import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SlidersHorizontal, Search, X, ChevronDown, ChevronRight } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { categoryTree, flatCategories } from '../data/categories';
import { products, getProductWithCategoryData } from '../data/products';

const allProducts = products.map(p => getProductWithCategoryData(p, flatCategories));

export default function ProductList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Expanding subcategories logic in sidebar
    const [expandedCats, setExpandedCats] = useState(['mens', 'womens', 'traditional', 'religious']);

    const categoryFilter = searchParams.get('category') || 'all';

    const toggleCategory = (catId) => {
        setExpandedCats(prev =>
            prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
        );
    };

    const handleCategoryChange = (catId) => {
        if (catId === 'all') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', catId);
        }
        setSearchParams(searchParams);
        setIsMobileFiltersOpen(false);
    };

    const filteredProducts = useMemo(() => {
        return allProducts.filter(product => {
            // If user selected a parent category (e.g. "mens"), show all children
            let isCategoryMatch = categoryFilter === 'all';
            if (!isCategoryMatch) {
                if (product.categoryId === categoryFilter) {
                    isCategoryMatch = true;
                } else if (product.category.parent === categoryFilter) {
                    isCategoryMatch = true;
                }
            }
            const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            return isCategoryMatch && matchSearch;
        });
    }, [categoryFilter, searchQuery]);

    // Recursively render category item
    const renderCategoryNode = (cat, isRoot) => {
        const isSelected = categoryFilter === cat.id;
        const isExpanded = expandedCats.includes(cat.id);

        return (
            <div key={cat.id} className={`${isRoot ? 'mt-4' : 'ml-4 mt-2'}`}>
                <div className="flex items-center justify-between group">
                    <button
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`flex-1 text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${isSelected
                            ? 'text-pink-600 dark:text-pink-400 font-bold bg-pink-50 dark:bg-pink-500/10'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                    >
                        {cat.name}
                    </button>

                    {cat.subcategories && cat.subcategories.length > 0 && (
                        <button
                            onClick={() => toggleCategory(cat.id)}
                            className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                        >
                            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </button>
                    )}
                </div>

                {/* Child rendering */}
                <AnimatePresence>
                    {isExpanded && cat.subcategories && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden border-l-2 border-slate-100 dark:border-slate-800 ml-4 pl-1"
                        >
                            {cat.subcategories.map(sub => renderCategoryNode(sub, false))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-grow flex flex-col md:flex-row gap-8">

            {/* Desktop Sidebar Filters */}
            <aside className="hidden md:block w-72 shrink-0">
                <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar">

                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <Filter size={18} className="text-pink-500" /> Categories
                        </h3>

                        <button
                            onClick={() => handleCategoryChange('all')}
                            className={`block w-full text-left px-3 py-2 mt-4 rounded-lg text-sm transition-colors ${categoryFilter === 'all'
                                ? 'bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 font-bold'
                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium'
                                }`}
                        >
                            All Products
                        </button>
                        <Link
                            to="/custom-order"
                            className="block w-full text-left px-3 py-2 mt-2 rounded-lg text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-bold hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                        >
                            Custom Stitching Orders
                        </Link>

                        <div className="mt-4 border-t border-slate-200 dark:border-slate-800 pt-2">
                            {categoryTree.map(cat => renderCategoryNode(cat, true))}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">

                {/* Header & Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white truncate max-w-[300px] sm:max-w-md">
                            {categoryFilter === 'all' ? 'All Products' : flatCategories.find(c => c.id === categoryFilter)?.name || 'Products'}
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-1">Showing {filteredProducts.length} items</p>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                        <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl text-sm focus:ring-2 focus:ring-pink-500 dark:text-white"
                            />
                            <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
                        </div>
                        <button
                            className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                            onClick={() => setIsMobileFiltersOpen(true)}
                        >
                            <SlidersHorizontal size={20} />
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
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
                    <div className="text-center py-24 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No products found</h3>
                        <p className="text-slate-500 dark:text-slate-400">Try selecting a different category or tuning your search query.</p>
                        <button onClick={() => { setSearchQuery(''); handleCategoryChange('all'); }} className="mt-6 px-6 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition">Clear Filters</button>
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
                            className="relative w-full max-w-sm h-full bg-white dark:bg-slate-950 shadow-2xl flex flex-col pt-6 pb-8 border-l border-slate-200 dark:border-slate-800"
                        >
                            <div className="px-6 flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">All Categories</h2>
                                <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="px-6 overflow-y-auto flex-1">

                                <button
                                    onClick={() => handleCategoryChange('all')}
                                    className={`block w-full text-left px-4 py-3 rounded-xl mb-2 text-sm transition-colors ${categoryFilter === 'all'
                                        ? 'bg-pink-500 text-white font-bold shadow-md shadow-pink-500/20'
                                        : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-medium'
                                        }`}
                                >
                                    All Products
                                </button>

                                <div className="mt-4 px-2 space-y-2">
                                    {categoryTree.map(cat => renderCategoryNode(cat, true))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
