import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
          <AlertCircle className="w-12 h-12 text-primary" />
        </div>
        <h1 className="font-orbitron font-bold text-6xl text-primary mb-4">404</h1>
        <h2 className="font-orbitron font-semibold text-2xl text-foreground mb-4">Page Not Found</h2>
        <p className="text-text-secondary font-inter mb-8 leading-relaxed">
          The page you're looking for doesn't exist. It may have been moved, deleted, or you entered the wrong URL.
        </p>
        <Button 
          asChild 
          className="bg-primary hover:bg-primary-glow text-primary-foreground font-inter font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-glow-primary"
        >
          <a href="/" className="inline-flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
