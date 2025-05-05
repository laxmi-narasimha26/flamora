
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  title,
  showBackButton = false 
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  
  const goBack = () => {
    navigate(-1);
  };

  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border py-4">
      <div className="container flex items-center justify-between">
        {showBackButton ? (
          <button 
            onClick={goBack}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft size={20} />
          </button>
        ) : (
          // Spacer
          <div className="w-10" />
        )}
        
        {title && (
          <h1 className="text-xl font-serif text-center flex-1">{title}</h1>
        )}
        
        {isHomePage ? (
          // Spacer for alignment
          <div className="w-10" />
        ) : (
          // Spacer for alignment
          <div className="w-10" />
        )}
      </div>
    </header>
  );
};

export default Header;
