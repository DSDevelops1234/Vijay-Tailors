import { useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";

const Products = () => {
    // Sample product data organized by category
    const productCategories = [
        {
            id: "safari-shirts",
            title: "Safari Shirts",
            description: "Our signature safari shirts combine style, comfort, and functionality. Made from premium, breathable fabrics, each shirt features practical pockets and thoughtful details.",
            products: [
                {
                    id: 1,
                    title: "Classic Safari Shirt",
                    price: "₹1,200",
                    description: "Our signature safari shirt with two chest pockets, made from 100% cotton for breathability and comfort.",
                    imageSrc: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
                    link: "/products",
                },
                {
                    id: 2,
                    title: "Short Sleeve Safari Shirt",
                    price: "₹950",
                    description: "A lighter option perfect for warmer climates with the same quality and attention to detail as our classic version.",
                    imageSrc: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop",
                    link: "/products",
                },
                {
                    id: 3,
                    title: "Premium Linen Safari Shirt",
                    price: "₹1,500",
                    description: "Crafted from high-quality linen for enhanced breathability and a luxurious feel in hot weather conditions.",
                    imageSrc: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800&auto=format&fit=crop",
                    link: "/products",
                },
            ],
        },
        {
            id: "safari-trousers",
            title: "Safari Trousers",
            description: "Designed for comfort and utility, our safari trousers feature multiple pockets, durable fabrics, and careful tailoring to ensure the perfect fit for your adventures.",
            products: [
                {
                    id: 4,
                    title: "Classic Safari Trousers",
                    price: "₹1,500",
                    description: "Durable safari trousers with reinforced stitching and 6 practical pockets for all your essentials.",
                    imageSrc: "https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=800&auto=format&fit=crop",
                    link: "/products",
                },
                {
                    id: 5,
                    title: "Convertible Safari Trousers",
                    price: "₹1,800",
                    description: "Versatile trousers that can be converted to shorts with zip-off legs, ideal for changing weather conditions.",
                    imageSrc: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop",
                    link: "/products",
                },
                {
                    id: 6,
                    title: "Lightweight Safari Trousers",
                    price: "₹1,300",
                    description: "Made from quick-drying, lightweight fabric perfect for tropical climates while maintaining durability.",
                    imageSrc: "https://images.unsplash.com/photo-1517502550916-1d2d46ec72b8?q=80&w=800&auto=format&fit=crop",
                    link: "/products",
                },
            ],
        },
        {
            id: "safari-outfits",
            title: "Complete Safari Outfits",
            description: "Experience the perfect coordination of our complete safari outfits, offering a unified look with matched shirts and trousers designed to complement each other.",
            products: [
                {
                    id: 7,
                    title: "Classic Safari Outfit",
                    price: "₹2,500",
                    description: "Our most popular combination featuring the classic safari shirt and trousers in a complementary color palette.",
                    imageSrc: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
                    link: "/products",
                },
                {
                    id: 8,
                    title: "Premium Safari Outfit",
                    price: "₹2,950",
                    description: "A luxurious set combining our premium linen shirt with classic safari trousers for the ultimate in comfort and style.",
                    imageSrc: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=800&auto=format&fit=crop",
                    link: "/products",
                },
                {
                    id: 9,
                    title: "Expedition Safari Outfit",
                    price: "₹3,200",
                    description: "Our most comprehensive set featuring reinforced panels and additional specialized pockets for demanding expeditions.",
                    imageSrc: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=800&auto=format&fit=crop",
                    link: "/products",
                },
            ],
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 overflow-hidden">
            {/* Header */}
            <section className="bg-secondary py-16 md:py-24">
                <div className="container mx-auto container-padding">
                    <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-up">
                        <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Collection</h1>
                        <p className="text-muted-foreground">
                            Explore our premium selection of safari attire, meticulously crafted for style, comfort, and durability. Each piece is tailored to provide the perfect balance of functionality and elegance for your adventures.
                        </p>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            {productCategories.map((category, categoryIndex) => (
                <section key={category.id} className="py-20" id={category.id}>
                    <div className="container mx-auto container-padding">
                        <div className="max-w-3xl mx-auto text-center mb-12 opacity-0 animate-fade-up">
                            <h2 className="text-3xl md:text-4xl font-serif mb-4">{category.title}</h2>
                            <p className="text-muted-foreground">
                                {category.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.products.map((product, productIndex) => (
                                <ProductCard
                                    key={product.id}
                                    title={product.title}
                                    price={product.price}
                                    description={product.description}
                                    imageSrc={product.imageSrc}
                                    link={product.link}
                                    index={productIndex}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Newsletter Section */}
            <Newsletter />
        </div>
    );
};

export default Products;
