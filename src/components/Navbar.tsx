import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navbarClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? "glass py-3" : "bg-transparent py-5"
        }`;

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `relative px-3 py-2 transition-all duration-200 
     ${isActive ? "font-medium" : ""}
     after:content-[""] after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-1/2 after:bg-current 
     after:transition-all after:duration-300 hover:after:w-1/2 hover:after:left-1/4`;

    const menuItems = [
        { path: "/", label: "Home" },
        { path: "/products", label: "Products" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <nav className={navbarClasses}>
            <div className="container mx-auto flex justify-between items-center container-padding">
                <NavLink to="/" className="text-2xl font-serif tracking-tight text-primary">
                    Vijay Tailors
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={navLinkClasses}
                            end
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center text-primary"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } pt-24`}
            >
                <div className="flex flex-col items-center space-y-6 p-8">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className="text-2xl font-medium"
                            onClick={closeMenu}
                            end
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
