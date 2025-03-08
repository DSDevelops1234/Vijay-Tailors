import { useEffect } from "react";
import Newsletter from "@/components/Newsletter";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 overflow-hidden">
            {/* Header */}
            <section className="bg-secondary py-16 md:py-24">
                <div className="container mx-auto container-padding">
                    <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-up">
                        <h1 className="text-4xl md:text-5xl font-serif mb-6">About Vijay Safari</h1>
                        <p className="text-muted-foreground">
                            A legacy of craftsmanship, quality, and attention to detail.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20">
                <div className="container mx-auto container-padding">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="opacity-0 animate-slide-left">
                            <div className="aspect-[4/3] overflow-hidden rounded-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1493344388112-7d0cd2274bd1?q=80&w=1200&auto=format&fit=crop"
                                    alt="Tailor working on a shirt"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="opacity-0 animate-fade-up">
                            <h2 className="text-3xl font-serif mb-6">Our Story</h2>
                            <p className="text-muted-foreground mb-6">
                                Vijay Safari was founded with a passion for craftsmanship and a commitment to quality. For over three decades, we have specialized in creating impeccable safari attire that combines style, comfort, and durability.
                            </p>
                            <p className="text-muted-foreground mb-6">
                                What began as a small family business has grown into a trusted name in safari clothing, known for our attention to detail and the exceptional quality of our garments. Each piece is meticulously crafted using traditional tailoring techniques alongside modern innovations.
                            </p>
                            <p className="text-muted-foreground">
                                Our dedication to excellence has earned us a loyal customer base who value the perfect fit, thoughtful design, and lasting quality of our safari shirts, trousers, and complete outfits.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto container-padding">
                    <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-up">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Approach</h2>
                        <p className="text-muted-foreground">
                            We believe in creating clothing that stands the test of time, both in style and durability. Our approach is centered around three core principles:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Quality Materials",
                                description: "We source only the finest fabrics that offer comfort, durability, and performance in various conditions. Every material is carefully selected to ensure it meets our exacting standards.",
                                delay: "animate-delay-100",
                            },
                            {
                                title: "Expert Craftsmanship",
                                description: "Our team of skilled tailors brings decades of expertise to every garment. Each piece is cut and sewn with precision, ensuring the perfect fit and finish that our customers expect.",
                                delay: "animate-delay-200",
                            },
                            {
                                title: "Thoughtful Design",
                                description: "We understand that safari clothing must balance functionality with style. Every pocket, seam, and detail is designed with purpose, creating garments that are as practical as they are elegant.",
                                delay: "animate-delay-300",
                            },
                        ].map((item, index) => (
                            <div key={index} className={`bg-background p-8 rounded-lg opacity-0 animate-fade-up ${item.delay}`}>
                                <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20">
                <div className="container mx-auto container-padding">
                    <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-up">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">What Our Customers Say</h2>
                        <p className="text-muted-foreground">
                            The true measure of our success is the satisfaction of our customers. Here's what they have to say about their Vijay Safari experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "The attention to detail in my safari outfit is remarkable. The fit is perfect and the fabric quality is exceptional. Couldn't be happier with my purchase.",
                                author: "Rajesh M.",
                                location: "Mumbai",
                                delay: "animate-delay-100",
                            },
                            {
                                quote: "I've been a customer for over 10 years, and the quality has never wavered. My Vijay Safari safari shirts have accompanied me on countless adventures and still look great.",
                                author: "Sarah L.",
                                location: "Bangalore",
                                delay: "animate-delay-200",
                            },
                            {
                                quote: "The convertible safari trousers are a game-changer for my wildlife photography trips. Functional, comfortable, and they look professional too.",
                                author: "Amit K.",
                                location: "Delhi",
                                delay: "animate-delay-300",
                            },
                        ].map((testimonial, index) => (
                            <blockquote key={index} className={`bg-secondary/50 p-8 rounded-lg border border-border opacity-0 animate-fade-up ${testimonial.delay}`}>
                                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                                <footer>
                                    <div className="font-medium">{testimonial.author}</div>
                                    <div className="text-muted-foreground text-sm">{testimonial.location}</div>
                                </footer>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <Newsletter />
        </div>
    );
};

export default About;
