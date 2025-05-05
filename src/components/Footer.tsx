
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Home, Calendar, Phone, Book, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Book, label: 'Services', path: '/services' },
    { icon: Calendar, label: 'Book', path: '/booking' },
    { icon: Phone, label: 'Contact', path: '/contact' },
    { icon: MessageSquare, label: 'About', path: '/about' },
  ];

  return (
    <footer className="fixed bottom-0 w-full bg-background/80 backdrop-blur-sm border-t border-border z-10">
      <nav className="container">
        <ul className="flex justify-between items-center py-2">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex flex-col items-center p-2 ${
                    isActive 
                      ? 'text-flamora-purple' 
                      : 'text-muted-foreground hover:text-flamora-purple'
                  } transition-colors`}
                >
                  <item.icon size={20} />
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
