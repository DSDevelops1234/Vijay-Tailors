import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroBg from "@/assets/images/hero/herobg.png"
const Index = () => {
    const navigate = useNavigate();

    // Sample product data
    const featuredProducts = [
        {
            id: 1,
            title: "Safari Shirt",
            price: "₹1,200",
            description: "Classic safari shirt with functional pockets and breathable fabric, perfect for outdoor adventures.",
            imageSrc: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
            link: "/products",
        },
        {
            id: 2,
            title: "Safari Trousers",
            price: "₹1,500",
            description: "Durable safari trousers with multiple pockets, designed for comfort and practicality in any environment.",
            imageSrc: "https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=800&auto=format&fit=crop",
            link: "/products",
        },
        {
            id: 3,
            title: "Complete Safari Outfit",
            price: "₹2,500",
            description: "The perfect combination of our signature safari shirt and trousers, offering a coordinated look for your adventures.",
            imageSrc: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
            link: "/products",
        },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <Hero
                title="Crafting Exceptional Safari Attire"
                subtitle="Discover our premium collection of meticulously tailored safari shirts, trousers, and complete outfits designed for comfort, style, and durability."
                ctaText="Explore Collection"
                ctaLink="/products"
                // imageUrl="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop"
                imageUrl={HeroBg}
            />

            {/* About Section */}
            <section className="py-20">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto text-center opacity-0 animate-fade-up">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">Tailored for Adventure</h2>
                        <p className="text-muted-foreground mb-8">
                            At Vijay Safari, we specialize in creating premium safari attire that combines comfort, durability, and timeless style. Each piece is meticulously crafted with attention to detail, ensuring the perfect fit for your outdoor adventures.
                        </p>
                        <Button
                            onClick={() => navigate("/about")}
                            variant="outline"
                            className="group border-primary/20 hover:border-primary/50 hover:bg-transparent"
                        >
                            About Us
                            <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto container-padding">
                    <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-fade-up">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Collection</h2>
                        <p className="text-muted-foreground">
                            Explore our carefully curated selection of safari wear, designed to provide comfort and style for your adventures.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product, index) => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                imageSrc={product.imageSrc}
                                link={product.link}
                                index={index}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-12 opacity-0 animate-fade-up animate-delay-300">
                        <Button
                            onClick={() => navigate("/products")}
                            className="group bg-primary hover:bg-primary/90 text-white transition-all rounded-md px-6 py-5"
                        >
                            View All Products
                            <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <Newsletter />
        </div>
    );
};

export default Index;
