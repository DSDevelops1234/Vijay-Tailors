import { NavLink } from "react-router-dom";
import {
    Mail,
    Phone,
    MapPin,
    Instagram,
    Facebook,
    Twitter
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto py-12 md:py-16 container-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="opacity-0 animate-fade-up animate-delay-100">
                        <h3 className="text-2xl font-serif mb-4">Vijay Safari</h3>
                        <p className="text-primary-foreground/80 max-w-xs">
                            Crafting premium safari outfits with attention to detail and commitment to quality.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="opacity-0 animate-fade-up animate-delay-200">
                        <h4 className="text-lg font-medium mb-4">Navigation</h4>
                        <nav className="flex flex-col space-y-2">
                            <NavLink to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                                Home
                            </NavLink>
                            <NavLink to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                                Products
                            </NavLink>
                            <NavLink to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                                About
                            </NavLink>
                            <NavLink to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                                Contact
                            </NavLink>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="opacity-0 animate-fade-up animate-delay-300">
                        <h4 className="text-lg font-medium mb-4">Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-accent" />
                                <span className="text-primary-foreground/80">
                                    123 Fashion Street, Mumbai, India
                                </span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-accent" />
                                <span className="text-primary-foreground/80">+91 96622 74775</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-accent" />
                                <span className="text-primary-foreground/80">info@vijaytailors.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="opacity-0 animate-fade-up animate-delay-400">
                        <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center text-primary-foreground/60 text-sm">
                    <p>&copy; {new Date().getFullYear()} Vijay Safari. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
