import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
    cart: JSON.parse(localStorage.getItem('cart') || '[]'),

    addToCart: (product, quantity = 1) => set((state) => {
        const existingIndex = state.cart.findIndex(item => item.id === product.id);
        let newCart = [...state.cart];

        if (existingIndex >= 0) {
            newCart[existingIndex].quantity += quantity;
        } else {
            newCart.push({ ...product, quantity });
        }

        localStorage.setItem('cart', JSON.stringify(newCart));
        return { cart: newCart };
    }),

    removeFromCart: (productId) => set((state) => {
        const newCart = state.cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(newCart));
        return { cart: newCart };
    }),

    updateQuantity: (productId, quantity) => set((state) => {
        if (quantity < 1) return state; // handled by remove
        const newCart = state.cart.map(item =>
            item.id === productId ? { ...item, quantity } : item
        );
        localStorage.setItem('cart', JSON.stringify(newCart));
        return { cart: newCart };
    }),

    clearCart: () => {
        localStorage.setItem('cart', '[]');
        set({ cart: [] });
    },

    cartTotal: () => {
        const state = get();
        return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    cartCount: () => {
        const state = get();
        return state.cart.reduce((count, item) => count + item.quantity, 0);
    }
}));
