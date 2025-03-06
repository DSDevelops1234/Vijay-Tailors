import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    imageUrl: string;
}

const Hero = ({ title, subtitle, ctaText, ctaLink, imageUrl }: HeroProps) => {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen relative flex items-center overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="absolute inset-0 bg-primary/30 backdrop-blur-[2px]" />

            {/* Content */}
            <div className="container mx-auto relative z-10 container-padding pb-20">
                <div className="max-w-2xl opacity-0 animate-fade-up">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-4 leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                        {subtitle}
                    </p>
                    <Button
                        onClick={() => navigate(ctaLink)}
                        className="group bg-white text-primary hover:bg-white/90 border border-white/10 rounded-full px-6 py-5 flex items-center space-x-2 transition-all duration-300"
                    >
                        <span>{ctaText}</span>
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
