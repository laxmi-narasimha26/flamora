
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from "@/components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-flamora-neutral-cream p-4">
      <div className="text-center max-w-md">
        <div className="mb-6 text-flamora-purple">
          <svg 
            width="80" 
            height="80" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mx-auto"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
        <h1 className="text-4xl font-serif mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          We couldn't find the page you're looking for
        </p>
        <Button to="/" variant="default">
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
