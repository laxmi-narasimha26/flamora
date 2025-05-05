
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center watercolor-bg">
      <div className="animate-fade-in flex flex-col items-center">
        <img 
          src="/src/assets/flamora-logo.svg" 
          alt="Kafe Flamora Logo" 
          className="w-32 h-32 mb-6"
        />
        <h1 className="text-3xl font-serif text-flamora-brown mb-2">Kafe Flamora</h1>
        <p className="text-lg text-flamora-purple font-serif italic">Elegance, Brewing Soon</p>
      </div>
    </div>
  );
};

export default SplashScreen;
