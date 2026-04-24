export const categoryTree = [
    {
        id: "mens",
        name: "Men's Wear",
        subcategories: [
            { id: "mens-shirts", name: "Shirts" },
            { id: "mens-tshirts", name: "T-Shirts" },
            { id: "mens-pants", name: "Pants" },
            { id: "mens-ethnic", name: "Ethnic Wear" },
            { id: "mens-jeans", name: "Jeans" },
            { id: "mens-jackets", name: "Jackets" },
            { id: "mens-hoodies", name: "Hoodies" },
            { id: "mens-shorts", name: "Shorts" },
            { id: "mens-trackpants", name: "Track Pants" },
            { id: "mens-blazers", name: "Blazers" },
            { id: "mens-innerwear", name: "Innerwear" },
            { id: "mens-sweaters", name: "Sweaters" },
            { id: "mens-kurta", name: "Kurta Sets" },
            { id: "mens-formal", name: "Formal Wear" },
        ]
    },
    {
        id: "womens",
        name: "Women's Wear",
        subcategories: [
            { id: "womens-sarees", name: "Sarees" },
            { id: "womens-kurtis", name: "Kurtis" },
            { id: "womens-dresses", name: "Dresses" },
            { id: "womens-tops", name: "Tops" },
            { id: "womens-skirts", name: "Skirts" },
            { id: "womens-jeans", name: "Jeans" },
            { id: "womens-leggings", name: "Leggings" },
            { id: "womens-palazzo", name: "Palazzo" },
            { id: "womens-dupatta", name: "Dupatta" },
            { id: "womens-gowns", name: "Gowns" },
            { id: "womens-nightwear", name: "Nightwear" },
            { id: "womens-ethnic", name: "Ethnic Sets" },
            { id: "womens-blouses", name: "Blouses" },
            { id: "womens-shrugs", name: "Shrugs" },
        ]
    },
    {
        id: "traditional",
        name: "Traditional",
        subcategories: [
            { id: "trad-kurta", name: "Kurta Pajama" },
            { id: "trad-lehenga", name: "Lehenga" },
            { id: "trad-sherwani", name: "Sherwani" },
            { id: "trad-dhoti", name: "Dhoti" },
            { id: "trad-angarkha", name: "Angarkha" },
            { id: "trad-nehru", name: "Nehru Jacket" },
            { id: "trad-bandhgala", name: "Bandhgala" },
            { id: "trad-pheta", name: "Pheta (Turban)" },
            { id: "trad-dupatta", name: "Dupatta (Traditional)" },
            { id: "trad-choli", name: "Choli" },
            { id: "trad-ghagra", name: "Ghagra" },
            { id: "trad-silk", name: "Silk Sets" },
        ]
    },
    {
        id: "festive",
        name: "Festive Wear",
        subcategories: [
            { id: "festive-wedding", name: "Wedding Wear" }
        ]
    },
    {
        id: "religious",
        name: "Religious / Bhagwan",
        subcategories: [
            { id: "rel-deity", name: "Deity Dresses" },
            { id: "rel-bhagva", name: "Bhagva Vastra" },
            { id: "rel-palakhi", name: "Palakhi Cloth" },
            { id: "rel-sasankathi", name: "Sasankathi Cloth" },
            { id: "rel-temple", name: "Temple Decorations Cloth" },
            { id: "rel-aarti", name: "Aarti Vastra" },
            { id: "rel-idol", name: "Idol Accessories Cloth" },
            { id: "rel-special", name: "Festival Special Dresses" },
            { id: "rel-curtains", name: "God Idol Curtains" },
            { id: "rel-aasan", name: "Pooja Aasan Cloth" },
            { id: "rel-mukut", name: "Mukut Vastra" },
            { id: "rel-shringar", name: "Shringar Cloth" },
            { id: "rel-seasonal", name: "Seasonal Bhagwan Dresses" },
        ]
    }
];

export const flatCategories = categoryTree.reduce((acc, cat) => {
    acc.push({ id: cat.id, name: cat.name, parent: null });
    cat.subcategories.forEach(sub => {
        acc.push({ id: sub.id, name: sub.name, parent: cat.id });
    });
    return acc;
}, []);
