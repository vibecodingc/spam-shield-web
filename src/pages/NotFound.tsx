
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-rspamd-gray p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-rspamd-dark mb-6">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button className="btn-primary flex items-center gap-2" asChild>
          <a href="/">
            <ArrowLeft size={16} /> Back to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
