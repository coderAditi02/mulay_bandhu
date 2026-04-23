import { Link } from 'react-router-dom';
import { Heart, Search } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductCard from '../components/product/ProductCard';

export default function Wishlist() {
    // In a real app this comes from useWishlistStore or similar
    const wishlistItems = [];

    if (wishlistItems.length === 0) {
        return (
            <div className="flex-grow flex flex-col items-center justify-center p-10 py-24 text-center">
                <div className="w-32 h-32 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-full flex items-center justify-center mb-6">
                    <Heart size={56} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">My Wishlist</h2>
                <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md">You haven't saved any items yet. Start adding your favorite styles to the wishlist.</p>
                <Link to="/products">
                    <Button size="lg">Explore Collection</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">My Wishlist</h1>
                <span className="text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                    {wishlistItems.length} Items
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wishlistItems.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
