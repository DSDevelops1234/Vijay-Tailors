import { useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 overflow-hidden">
            {/* Header */}
            <section className="bg-secondary py-16 md:py-24">
                <div className="container mx-auto container-padding">
                    <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-up">
                        <h1 className="text-4xl md:text-5xl font-serif mb-6">Contact Us</h1>
                        <p className="text-muted-foreground">
                            Have questions about our products or need assistance? We're here to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="container mx-auto container-padding">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Contact Information */}
                        <div className="opacity-0 animate-fade-up">
                            <h2 className="text-3xl font-serif mb-8">Get in Touch</h2>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 mr-4 text-primary" />
                                    <div>
                                        <h3 className="text-lg font-medium mb-1">Location</h3>
                                        <p className="text-muted-foreground">
                                            9/1154, 1st Floor, Ambaji Road,<br />
                                            Above Parimal Tailor, SURAT, Gujrat<br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="w-6 h-6 mr-4 text-primary" />
                                    <div>
                                        <h3 className="text-lg font-medium mb-1">Email</h3>
                                        <p className="text-muted-foreground">
                                            info@vijaytailors.com<br />
                                            support@vijaytailors.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="w-6 h-6 mr-4 text-primary" />
                                    <div>
                                        <h3 className="text-lg font-medium mb-1">Phone</h3>
                                        <p className="text-muted-foreground">
                                            +91 63785 02037<br />
                                            +91 96622 74775
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="w-6 h-6 mr-4 text-primary" />
                                    <div>
                                        <h3 className="text-lg font-medium mb-1">Business Hours</h3>
                                        <p className="text-muted-foreground">
                                            Monday - Saturday: 10:00 AM - 7:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1604754742629-3e0474ce20b3?q=80&w=1200&auto=format&fit=crop"
                                    alt="Tailor shop"
                                    className="w-full h-full object-cover"
                                />
                            </div> */}
                            <div className="h-80 w-[90vw] overflow-hidden rounded-lg mt-24">
                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=9%2F1154%2C+1st+Floor%2C+Ambaji+Road%2C+Above+Parimal+Tailor%2C+SURAT%2C+Gujrat+%28India%29"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'block', height: '100%', width: '100%', textDecoration: 'none', color: 'inherit' }}
                                >
                                    {/* <p style={{ textAlign: 'center', lineHeight: '320px', margin: 0 }}>Get Directions</p> */}
                                    <iframe
                                        src="https://maps.google.com/maps?q=9/1154, 1st Floor, Ambaji Road, Above Parimal Tailor, SURAT&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allowFullScreen
                                        title="Google Map"
                                    ></iframe>
                                </a>
                            </div>

                            {/* <div className="h-80 w-[90vw] overflow-hidden rounded-lg relative">
                                Embedded Google Map
                                <iframe
                                    src="https://maps.google.com/maps?q=9/1154, 1st Floor, Ambaji Road, Above Parimal Tailor, SURAT, Gujrat (India)&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allowFullScreen
                                    title="Google Map"
                                ></iframe>
                                Transparent link overlay
                                <a
                                    href="https://maps.google.com/maps?q=9/1154, 1st Floor, Ambaji Road, Above Parimal Tailor, SURAT, Gujrat (India)&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0"
                                ></a>
                            </div> */}


                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-serif mb-8 opacity-0 animate-fade-up animate-delay-200">Send a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto container-padding">
                    <div className="max-w-3xl mx-auto text-center mb-12 opacity-0 animate-fade-up">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground">
                            Find answers to common questions about our products, services, and policies.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            {
                                question: "How long does it take to make a custom safari outfit?",
                                answer: "Typically, a custom safari outfit takes 2-3 weeks from measurement to completion. For rush orders, please contact us directly to discuss expedited options.",
                                delay: "animate-delay-100",
                            },
                            {
                                question: "Do you ship internationally?",
                                answer: "Yes, we offer worldwide shipping. International orders usually take 7-14 business days to arrive, depending on the destination country and customs processing.",
                                delay: "animate-delay-200",
                            },
                            {
                                question: "What materials do you use for your safari clothing?",
                                answer: "We primarily use high-quality cotton, cotton-linen blends, and specialized performance fabrics designed for durability and comfort in various weather conditions.",
                                delay: "animate-delay-300",
                            },
                            {
                                question: "Can I get custom measurements for my safari attire?",
                                answer: "Absolutely! We offer custom tailoring services to ensure the perfect fit. You can either visit our store for in-person measurements or follow our detailed measurement guide for remote orders.",
                                delay: "animate-delay-400",
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-background p-6 rounded-lg opacity-0 animate-fade-up ${faq.delay}`}
                            >
                                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                                <p className="text-muted-foreground">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
