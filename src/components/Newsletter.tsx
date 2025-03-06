import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
    const { toast } = useToast();
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            toast({
                title: "Subscription successful",
                description: "You've been added to our newsletter.",
            });
            setEmail("");
        }, 1500);
    };

    return (
        <section className="py-20 bg-secondary">
            <div className="container mx-auto container-padding">
                <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-up">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4">Stay Informed</h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Subscribe to our newsletter to receive updates on new designs, seasonal collections, and exclusive offers.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <Input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-grow h-12"
                        />
                        <Button
                            type="submit"
                            className="bg-primary hover:bg-primary/90 text-white transition-all h-12 rounded-md flex items-center"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Subscribing..." : "Subscribe"}
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
