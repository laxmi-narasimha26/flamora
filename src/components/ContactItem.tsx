
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  className?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  label,
  value,
  href,
  className,
}) => {
  const content = (
    <div className={cn('flex items-start', className)}>
      <div className="flex-shrink-0 p-2 bg-flamora-purple/10 rounded-full mr-4">
        <Icon size={20} className="text-flamora-purple" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className="block py-3 transition-colors hover:bg-flamora-neutral-cream"
      >
        {content}
      </a>
    );
  }

  return <div className="py-3">{content}</div>;
};

export default ContactItem;
