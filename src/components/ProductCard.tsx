import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
    title: string;
    price: string;
    description: string;
    imageSrc: string;
    link: string;
    index: number;
}

const ProductCard = ({ title, price, description, imageSrc, link, index }: ProductCardProps) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const animationDelay = `animate-delay-${index * 100}`;

    return (
        <div
            className={`opacity-0 animate-fade-up ${animationDelay} group cursor-pointer overflow-hidden rounded-lg border border-border transition-all duration-300 ease-in-out`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate(link)}
        >
            <div className="aspect-[4/5] w-full overflow-hidden relative">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                    style={{
                        backgroundImage: `url(${imageSrc})`,
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                    }}
                />
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif">{title}</h3>
                    <span className="font-medium text-lg">{price}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {description}
                </p>

                <Button
                    variant="ghost"
                    className="p-0 h-auto text-sm font-medium flex items-center group-hover:text-primary transition-colors"
                >
                    View Details
                    <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;
