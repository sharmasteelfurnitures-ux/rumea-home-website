import React from 'react';
import { Truck, RotateCcw, Shield, Award } from 'lucide-react';

interface TrustBadgeProps {
  icon?: 'truck' | 'returns' | 'warranty' | 'origin';
  title: string;
  subtitle?: string;
  variant?: 'light' | 'dark' | 'card';
  className?: string;
}

export default function TrustBadge({
  icon = 'truck',
  title,
  subtitle,
  variant = 'light',
  className = '',
}: TrustBadgeProps) {
  const getIcon = () => {
    const iconClass = variant === 'dark' ? 'text-warm-sand w-5 h-5' : 'text-muted-olive w-5 h-5';
    switch (icon) {
      case 'truck':
        return <Truck className={iconClass} />;
      case 'returns':
        return <RotateCcw className={iconClass} />;
      case 'warranty':
        return <Shield className={iconClass} />;
      case 'origin':
        return <Award className={iconClass} />;
      default:
        return <Truck className={iconClass} />;
    }
  };

  const textStyles = {
    light: {
      title: 'text-espresso font-medium text-xs md:text-sm',
      subtitle: 'text-soft-taupe text-[11px]',
    },
    dark: {
      title: 'text-warm-ivory font-medium text-xs md:text-sm',
      subtitle: 'text-warm-sand/80 text-[11px]',
    },
    card: {
      title: 'text-espresso font-semibold text-xs',
      subtitle: 'text-soft-taupe text-[10px]',
    },
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-shrink-0 p-2 rounded-full bg-warm-sand/20">
        {getIcon()}
      </div>
      <div>
        <p className={textStyles[variant].title}>{title}</p>
        {subtitle && <p className={textStyles[variant].subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
}
