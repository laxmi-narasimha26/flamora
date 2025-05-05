
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  to: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  to,
  className,
}) => {
  return (
    <Link 
      to={to}
      className={cn(
        'block rounded-lg overflow-hidden bg-white subtle-shadow transition-transform hover:translate-y-[-4px]',
        className
      )}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-serif mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
