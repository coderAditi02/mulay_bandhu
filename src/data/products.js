export const products = [
    // --- MEN'S WEAR ---
    { id: 'm1', name: 'Premium Cotton White Shirt', price: 1299, categoryId: 'mens-shirts', stock: 15, isFeatured: true, description: 'Comfortable, breathable cotton white shirt suitable for formal and semi-formal occasions. Regular fit.', images: ['https://images.unsplash.com/photo-1596755094514-f87e32f6b717?q=80&w=800', 'https://images.unsplash.com/photo-1621072156002-e2fcc60b4ef4?q=80&w=800'] },
    { id: 'm2', name: 'Casual Checkered Shirt', price: 999, categoryId: 'mens-shirts', stock: 30, isFeatured: false, description: 'Classic checks shirt for everyday casual wear.', images: ['https://plus.unsplash.com/premium_photo-1675200216167-152e0d37eac8?q=80&w=800'] },
    { id: 'm3', name: 'Classic Blue Denim Jeans', price: 1999, categoryId: 'mens-jeans', stock: 25, isFeatured: false, description: 'Straight fit authentic blue denim jeans.', images: ['https://images.unsplash.com/photo-1542272604-78fe0840428a?q=80&w=800'] },
    { id: 'm4', name: 'Graphic Printed T-Shirt', price: 599, categoryId: 'mens-tshirts', stock: 50, isFeatured: true, description: 'Soft fabric t-shirt with modern graphic prints.', images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800'] },
    { id: 'm5', name: 'Raw Silk Kurta Pajama', price: 3499, categoryId: 'mens-kurta', stock: 10, isFeatured: true, description: 'Rich raw silk blend men\'s Kurta set for festive wear. Comes with matching comfortable pajama.', images: ['https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800'] },
    { id: 'm6', name: 'Formal Tailored Blazer', price: 4500, categoryId: 'mens-blazers', stock: 12, isFeatured: false, description: 'Classic black blazer tailored perfectly for official events.', images: ['https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800'] },
    { id: 'm7', name: 'Winter Zip Hoodie', price: 1800, categoryId: 'mens-hoodies', stock: 20, isFeatured: false, description: 'Cozy fleece hoodie for light winters.', images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800'] },

    // --- WOMEN'S WEAR ---
    { id: 'w1', name: 'Designer Banarasi Silk Saree', price: 8499, categoryId: 'womens-sarees', stock: 5, isFeatured: true, description: 'Exquisite silk saree with intricate zari work. Perfect for weddings and grand traditional functions. Lightweight and easy to drape.', images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800', 'https://images.unsplash.com/photo-1583391733958-d25e07fac04f?q=80&w=800'] },
    { id: 'w2', name: 'Cotton Printed Daily Kurti', price: 1099, categoryId: 'womens-kurtis', stock: 30, isFeatured: false, description: 'Daily wear breathable cotton kurti with delicate floral prints.', images: ['https://images.unsplash.com/photo-1583391733958-d25e07fac04f?q=80&w=800'] },
    { id: 'w3', name: 'Heavy Embroidered Bridal Lehenga', price: 24500, categoryId: 'womens-ethnic', stock: 2, isFeatured: true, description: 'Stunning bridal lehenga with heavy zardosi work and a majestic dupatta.', images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800'] },
    { id: 'w4', name: 'Chiffon Evening Gown', price: 4200, categoryId: 'womens-gowns', stock: 8, isFeatured: false, description: 'Elegant flowy chiffon gown for evening parties.', images: ['https://images.unsplash.com/photo-1566160983935-430ded944bf9?q=80&w=800'] },
    { id: 'w5', name: 'Flared Palazzo Pants', price: 899, categoryId: 'womens-palazzo', stock: 40, isFeatured: false, description: 'Comfortable cotton flared palazzo, pairs well with short kurtis.', images: ['https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800'] },
    { id: 'w6', name: 'Traditional Kanjeevaram Saree', price: 12500, categoryId: 'womens-sarees', stock: 3, isFeatured: true, description: 'Authentic pure silk Kanjeevaram saree sourced straight from weavers.', images: ['https://images.unsplash.com/photo-1615887023516-9bbaabdbb9ed?q=80&w=800'] },

    // --- TRADITIONAL & FESTIVE ---
    { id: 't1', name: 'Royal Velvet Pheta (Turban)', price: 1200, categoryId: 'trad-pheta', stock: 10, isFeatured: true, description: 'Premium Maharashtrian styled Pheta for weddings and welcoming guests. Hand-tied looking perfection.', images: ['https://images.unsplash.com/photo-1621005831037-331da2987158?q=80&w=800'] },
    { id: 't2', name: 'Jodhpuri Bandhgala Suit', price: 11999, categoryId: 'trad-bandhgala', stock: 4, isFeatured: true, description: 'Classic men\'s Bandhgala suit for a highly sophisticated royal appeal.', images: ['https://images.unsplash.com/photo-1595909249764-585ee3133de5?q=80&w=800'] },
    { id: 't3', name: 'Wedding Sherwani with Safa', price: 18000, categoryId: 'trad-sherwani', stock: 2, isFeatured: true, description: 'Bridal groom sherwani intricately embroidered with golden threads includes matching Safa.', images: ['https://images.unsplash.com/photo-1617300762161-0af02521d9ef?q=80&w=800'] },
    { id: 't4', name: 'Designer Dupatta Sets', price: 1500, categoryId: 'trad-dupatta', stock: 22, isFeatured: false, description: 'Rich heavy dupatta which can be worn on plain kurtas to immediately elevate look.', images: ['https://plus.unsplash.com/premium_photo-1661665476100-3fc75fd27926?q=80&w=800'] },
    { id: 't5', name: 'Classic Silk Dhoti', price: 1800, categoryId: 'trad-dhoti', stock: 15, isFeatured: false, description: 'Double border pure silk Dhoti for Pooja and traditional functions.', images: ['https://images.unsplash.com/photo-1601648771489-0d1297d2c385?q=80&w=800'] },

    // --- RELIGIOUS & DIVINE ---
    { id: 'r1', name: 'Premium Bhagva Vastra (Orange)', price: 499, categoryId: 'rel-bhagva', stock: 50, isFeatured: true, description: 'Sacred vibrant orange cloth suitable for all traditional rituals. High-grade purity fabric meant for offerings.', images: ['https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?q=80&w=800'] },
    { id: 'r2', name: 'Custom Deity Dress (Shringar)', price: 1599, categoryId: 'rel-deity', stock: 15, isFeatured: true, description: 'Beautifully stitched dress for Bhagwan idols with mukut matching cloth. Send dimensions via Custom Stitching page.', images: ['https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800'] },
    { id: 'r3', name: 'Palakhi Decoration Cloth Set', price: 2200, categoryId: 'rel-palakhi', stock: 10, isFeatured: true, description: 'Fine quality cloth set specifically meant to decorate the sacred Palakhi carriage.', images: ['https://images.unsplash.com/photo-1601831804245-21d7ef490c00?q=80&w=800'] },
    { id: 'r4', name: 'Velvet Pooja Aasan Cloth', price: 350, categoryId: 'rel-aasan', stock: 60, isFeatured: false, description: 'Soft velvet cloth used as seating or platform covering for deities. Contains decorative golden lace border.', images: ['https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=800'] },
    { id: 'r5', name: 'Temple Idol Curtains', price: 1400, categoryId: 'rel-curtains', stock: 8, isFeatured: false, description: 'Elegant pleated curtains for the mandir enclosure. Highly durable.', images: ['https://images.unsplash.com/photo-1582498904554-1594916a04e9?q=80&w=800'] },
    { id: 'r6', name: 'Mukut & Shringar Vastra', price: 850, categoryId: 'rel-mukut', stock: 25, isFeatured: true, description: 'Detailed miniature cloth tailored explicitly for Mukut and deity decoration matching.', images: ['https://images.unsplash.com/photo-1614279090623-1d017a421dd0?q=80&w=800'] },
    { id: 'r7', name: 'Festive Aarti Cloth', price: 200, categoryId: 'rel-aarti', stock: 100, isFeatured: false, description: 'Small traditional cloth piece for placing the Aarti thali cleanly on platforms.', images: ['https://images.unsplash.com/photo-1610471929314-e0ad42b0fb2d?q=80&w=800'] },
    { id: 'r8', name: 'Sasankathi Wrap Cloth', price: 1100, categoryId: 'rel-sasankathi', stock: 15, isFeatured: true, description: 'Long continuous thick wrapping cloth customized for traditional Sasankathi poles.', images: ['https://images.unsplash.com/photo-1444084316824-dc26d6657664?q=80&w=800'] },
];

export const getProductWithCategoryData = (product, flatCategories) => {
    const cat = flatCategories.find(c => c.id === product.categoryId);
    return {
        ...product,
        category: cat || { id: 'unknown', name: 'Uncategorized', parent: null }
    };
};
