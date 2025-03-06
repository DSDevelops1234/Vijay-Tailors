import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-background px-4 py-24">
            <div className="text-center max-w-md mx-auto">
                <h1 className="text-6xl font-serif font-medium mb-6">404</h1>
                <p className="text-2xl text-muted-foreground mb-8">
                    The page you're looking for doesn't exist.
                </p>
                <Button
                    onClick={() => navigate("/")}
                    className="group bg-primary hover:bg-primary/90 text-white transition-all rounded-md flex items-center mx-auto"
                >
                    <ArrowLeft className="mr-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                    Return to Home
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
